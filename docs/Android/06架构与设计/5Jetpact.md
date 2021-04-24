# Jetpack

[TOC]

## 一、 介绍

​	Jetpack 是一个由多个库组成的套件，可帮助开发者遵循最佳做法，减少样板代码并编写可在各种 Android 版本和设备中一致运行的代码，让开发者精力集中编写重要的代码(**1. 是一套组件库(大约有80个组件) 2. 是一个最佳开发规范指导样例**)。

- Jetpack库

  activity*、appcompat*、camera、compose、room、**databinding**、**lifecycle(LiveData)**...

- 使用 [LiveData](https://developer.android.google.cn/topic/libraries/architecture/livedata) 构建数据对象，在基础数据库改变时通知视图。

- [ViewModel](https://developer.android.google.cn/topic/libraries/architecture/viewmodel) 存储界面相关的数据，这些数据不会在应用旋转时销毁。

- [Room](https://developer.android.google.cn/topic/libraries/architecture/room) 是一个 SQLite 对象映射库。它可用来避免样板代码，还可以轻松地将 SQLite 表数据转换为 Java 对象。Room 提供 SQLite 语句的编译时检查，并且可以返回 RxJava、Flowable 和 LiveData 可观察对象。

<img src="images/arch_jetpack.png" alt="jetpact" style="zoom:50%;" />

## 二、 LifeCycle(生命周期感知组件) 

#### 1. what

> Lifecycle 是 Android Jetpack 的一部分，是**生命周期感知型组件**，可执行操作来响应另一个组件（Activity 和 Fragment）的生命周期状态的变化。Lifecycle 是一个类，用于存储有关组件（如 Activity 或 Fragment）的生命周期状态的信息，并允许其他对象观察此状态。它是 LiveData 和 ViewModel 的基础，如果你想更深入的了解 Android Jetpack 的其他组件，你应该从它学起。

1. Lifecycle源代码

```java
/**
	* 1. 是一个抽象类，包含添加、删除观察者方法；
	* 2. 枚举类Event(事件类型)、State类(自身状态)
  */
public abstract class Lifecycle{
  @MainThread
  public abstract void addObserver(@NonNull LifecycleObserver observer); 
  @MainThread
  public abstract void removeObserver(@NonNull LifecycleObserver observer);
  
  public enum State{
    INITIALIZED,CREATED,STARTED,RESUMED,DESTROYED
  }
  Public enum Event{
    ON_CREATE,ON_START,ON_RESUME,ON_PAUSE,ON_STOP,ON_DESTROY,ON_ANY
  }
}
```

**Event和State关系：**

<img src="/Users/xin/books/docs/Android/06架构与设计/images/lifecycle_event_state.jpeg" style="zoom:80%;" />

**流程原理：**

```java
/**
	* 自定义实现生命周期监听
	* 1. 系统ComponentActivity默认实现了生命周期检测功能(在Activity可以直接使用lifecycle对象添加观察者)。我们可以方便的addObserver实现监听(默认添加了一  
  * 个空的Fragment来监听生命周期的)。
	*/
public class MyComponentActivity extends Activity implements LifecycleOwner {
	  private LifecycleRegistry mLifecycleRegistry;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    		
      	//1. 实现LifecycleOwner，提供生命周期
      	//2. 注册(提供生命周期持有者acitvity，可以保存所有观察者列表，状态发生改变时循环通知)
      	mLifecycleRegistry = new LifecycleRegistry(this);
				//3. 设置当前状态
        mLifecycleRegistry.setCurrentState(Lifecycle.State.CREATED);
    		//4. 任意地方添加观察者类
        mLifecycleRegistry.addObserver(new MyObserver());
    }
  
   @Override
    public Lifecycle getLifecycle() {
        return mLifecycleRegistry;
    }
}

public class MyObserver implements LifecycleObserver {
    @OnLifecycleEvent(Lifecycle.Event.ON_CREATE)
    private void onObserverCreate(){
        Log.e("testme", "onObserverCreate " );
    }
    @OnLifecycleEvent(Lifecycle.Event.ON_RESUME)
    private void onObserverResume(){
        Log.e("testme", "onObserverResume " );
    }
}

public class LifecycleRegistry extends Lifecycle {
 // 保存所有观察者对象列表(类似LinkedHashMap，支持迭代中修改删除数据，不是线程安全的)  
 private FastSafeIterableMap<LifecycleObserver, ObserverWithState> mObserverMap =
            new FastSafeIterableMap<>();
 // 存储owner即Activity
 private final WeakReference<LifecycleOwner> mLifecycleOwner;
 // 设置状态改变，通知观察者。
 public void setCurrentState(@NonNull State state) {
        moveToState(state);
 } 
 // 添加观察者
 public void addObserver(@NonNull LifecycleObserver observer) {} 
} 
```

## 三、 LiveData

1. LiveData源代码

   onStop状态时，数据源改变，不会通知UI更新，当onResume时，生命周期会再通知UI更新(生命周期激活是触发)。

   setValue强制UI更新(强制触发)。

```java
// 对外使用类
public class MutableLiveData<T> extends LiveData<T> {
    public MutableLiveData(T value) {
        super(value);
    }
    @Override
    public void postValue(T value) {
        super.postValue(value);
    }
    @Override
    public void setValue(T value) {
        super.setValue(value);
    }
}

// 抽象类
public abstract class LiveData<T> {
  // 观察者列表
	private SafeIterableMap<Observer<? super T>, ObserverWrapper> mObservers =
            new SafeIterableMap<>();
  // 存储的数据对象
  private volatile Object mData;

  // 添加监听，并用生命周期绑定
  public void observe(@NonNull LifecycleOwner owner, @NonNull Observer<? super T> observer){
       LifecycleBoundObserver wrapper = new LifecycleBoundObserver(owner, observer);
       // 保持观察者列表
       ObserverWrapper existing = mObservers.putIfAbsent(observer, wrapper);
       // 生命周期与观察者绑定 
       owner.getLifecycle().addObserver(wrapper);
  }
  
  // 设置数据，通知观察者更新
  protected void setValue(T value) {
        assertMainThread("setValue");
        mVersion++;
        mData = value;
        dispatchingValue(null);
  }
  
  // 只有 onStart 后，对数据的修改才会触发 observer.onChanged()
    public void observe(@NonNull LifecycleOwner owner, @NonNull Observer<T> observer) {}

    // 无论何时，只要数据发生改变，就会触发 observer.onChanged()
    public void observeForever(@NonNull Observer<T> observer) {}
}

// demo
class LoginViewModel : BaseViewModel() {
    var loginData = MutableLiveData<LoginDataModel>()

    fun login(userName: String, pwd: String) {
        launch({
            loginData.value = LoginService.login(userName, pwd)
        }, {
            // error handler
        })
    }
}

class LoginActivity : BaseActivity<LoginViewModel,ActivityLoginBinding>() {
	override fun createObserver() {
    	  // 观察liveData数据变化
        mViewModel.loginData.observe(this, Observer {
           	// update UI
            showToast("登录成功 token = ${it.data.token}")
        })
    }
}
```

## 四、ViewMode

> ViewModel类是被设计用来以可感知生命周期的方式存储和管理 UI 相关数据，ViewModel中数据会一直存活即使 activity configuration发生变化，比如横竖屏切换的时候。

#### 1. 好处

- 数据持久化(屏幕旋转是可以保存)；
- 异步回调问题，内存泄漏；
- 分层MVVM；
- Fragment间数据共享；

#### 2. 原理

```kotlin
//1. 两种使用方式
// ViewModelProviders.of(this).get(LoginViewModel::class.java)
val model:MyViewModel by viewModels()
  model.getUser().observe(this, Observer<List<UserModel>> {
  // update ui
  tv_second_test.text = it[0].name
})

// 2.
public class ViewModelProvider {
    private static final String DEFAULT_KEY =
            "androidx.lifecycle.ViewModelProvider.DefaultKey";

    private final Factory mFactory; // 通过Class.java 创建ViewMode对象
    // map存储多个ViewMode对象(key=DEFAULT_KEY+类名，value等于class.newInstance对象)
    private final ViewModelStore mViewModelStore; 
}
```

1. 清空ViewMode

   ```java
    public ComponentActivity() {
           Lifecycle lifecycle = getLifecycle();
         
           getLifecycle().addObserver(new LifecycleEventObserver() {
               @Override
               public void onStateChanged(@NonNull LifecycleOwner source,
                       @NonNull Lifecycle.Event event) {
                   // 销毁时通过Lifecycle清空ViewMode
                   if (event == Lifecycle.Event.ON_DESTROY) {
                       if (!isChangingConfigurations()) {
                           getViewModelStore().clear();
                       }
                   }
               }
           });
   
       }
   ```

   

2. 屏幕配置变化保存ViewMode

```java
public class ComponentActivity extends androidx.core.app.ComponentActivity implements
        LifecycleOwner,
        ViewModelStoreOwner{
   // 返回当前viewModelStore       
	 public final Object onRetainNonConfigurationInstance() {
        // Maintain backward compatibility.
        Object custom = onRetainCustomNonConfigurationInstance();

        ViewModelStore viewModelStore = mViewModelStore;
        if (viewModelStore == null) {
            // No one called getViewModelStore(), so see if there was an existing
            // ViewModelStore from our last NonConfigurationInstance
            NonConfigurationInstances nc =
                    (NonConfigurationInstances) getLastNonConfigurationInstance();
            if (nc != null) {
                viewModelStore = nc.viewModelStore;
            }
        }

        NonConfigurationInstances nci = new NonConfigurationInstances();
        nci.custom = custom;
        nci.viewModelStore = viewModelStore;
        return nci;
    }  
}

// 在 ActivityThread 的 performDestroyActivity 找到了调用(Acitvity销毁前会保存viewModelStore到ActivityClientRecord的`Activity.NonConfigurationInstances lastNonConfigurationInstances;`中)：
ActivityClientRecord performDestroyActivity(IBinder token, boolean finishing, int configChanges, boolean getNonConfigInstance, String reason) {
    // 从 mActivities 中获取 token 对应的 ActivityClientRecord
    ActivityClientRecord r = mActivities.get(token);
    Class<? extends Activity> activityClass = null;
    if (r != null) {
        activityClass = r.activity.getClass();
      
        // 如果参数 getNonConfigInstance 为 true
        if (getNonConfigInstance) {
            try {
                // 将 ViewModelStore 存入 ActivityClientRecord 的 lastNonConfiguratinInstances 字段中
                r.lastNonConfigurationInstances = r.activity.retainNonConfigurationInstances();
            } catch (Exception e) {}
        }
        //...
    }
    mActivities.remove(token);
    return r;
}

```







- 参考

[1. JetpackMvvm](https://github.com/hegaojian/JetpackMvvm)

[2. Jetpack-MVVM-Best-Practice](https://github.com/KunMinX/Jetpack-MVVM-Best-Practice)

[3. Lifecycle 从入门到精通](https://www.jianshu.com/p/be866522c4d9)

[4. ViewModel](https://www.jianshu.com/p/35d143e84d42)

[5. ViewModel](https://zhuanlan.zhihu.com/p/110772274)

