### 代理模式

>  **定义：**代理模式给某一个对象提供一个代理对象，并由代理对象控制对原对象的引用。通俗的来讲代理模式就是我们生活中常见的中介。

#### 好处

- **中介隔离作用**

  在某些情况下，一个客户端类不想或者不能直接引用一个委托对象，而代理类可以在客户端和委托类之间起到中介作用，其特征是代理类和委托类实现相同的接口。

- **开闭原则,增强功能**

  代理类除了是客户类和委托类的中介之外，我们还可以通过给代理类增加额外的功能来扩展委托类的功能，这样做我们只需要修改代理类而不需要再修改委托类，符合代码设计的开闭原则。代理类主要负责为委托类预处理消息、过滤消息、把消息转发给委托类，以及事后对返回结果的处理等。代理类本身并不真正实现服务，而是同过调用委托类的相关方法，来提供特定的服务。真正的业务功能还是由委托类来实现，但是可以在业务功能执行的前后加入一些公共的服务。例如我们想给项目加入缓存、日志这些功能，我们就可以使用代理类来完成，而没必要打开已经封装好的委托类。

#### 分类

   我们有多种不同的方式来实现代理。如果按照代理创建的时期来进行分类的话， 可以分为两种：静态代理、动态代理。静态代理是由程序员创建或特定工具自动生成源代码，在对其编译。在程序员运行之前，代理类.class文件就已经被创建了。动态代理是在程序运行时通过反射机制动态创建的。

**区别**

- 静态代理需要为每一个服务新建代理类、接口一旦发生变化代理类也需要修改。工作量大，不易维护。
- 动态代理类仅支持interface类型的代理，代理类是**实现接口的另一个新类**;
- cglib代理支持支持class类型的代理,代理类是委托类的一个**子类**；

##### 1.静态代理

```java
// 接口
public interface UserService {
    void save();
}
```

```java
// 实现类&委托类
public class UserServiceImpl implements UserService {
    @Override
    public void save() {
        System.out.println("保存用户");
    }
}
```

```java
// 代理类
public class UserServiceStaticProxyFactory implements UserService{
    private UserService userService;

    public UserServiceStaticProxyFactory(UserService userService){
        this.userService = userService;
    }
    
    @Override
    public void save() {
        System.out.println("打开事务！");
        userService.save();
        System.out.println("提交事务！");
    }
}
```

```java
// test 
public static void main(String[] args) {
        UserServiceStaticProxyFactory proxyFactory = new UserServiceStaticProxyFactory(new UserServiceImpl());
        proxyFactory.save();
    }

```

##### 2.动态代理

**调用Proxy.newProxyInstance(类加载器，类实现的接口，事务处理器对象);生成一个代理实例。**

注意*Proxy.newProxyInstance()*方法接受三个参数：

- *ClassLoader loader:*指定当前目标对象使用的类加载器,获取加载器的方法是固定的
- *Class<?>[] interfaces:*指定目标对象实现的接口的类型,使用泛型方式确认类型
- InvocationHandler:动态处理器，执行目标对象的方法时,会触发事件处理器的方法

```java
public class UserServiceProxyFactory {

    public <T> Object getProxy(Class<T> clz) {
        try {
            Object impl = clz.newInstance();
            // 生成动态代理
            return Proxy.newProxyInstance(clz.getClassLoader(), clz.getInterfaces(), new InvocationHandler() {
                @Override
                public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                    before();
                    Object invoke = method.invoke(impl, args);
                    after();
                    return invoke;
                }
            });
        } catch (InstantiationException | IllegalAccessException e) {
            e.printStackTrace();
        }

        return null;
    }
    
    //可以重写
    public void before() {
        System.out.println("之前");
    }

    public void after() {
        System.out.println("之后");
    }
}
```

##### 3.cglib代理

 	JDK实现动态代理需要实现类通过接口定义业务方法，对于没有接口的类，如何实现动态代理呢，这就需要CGLib了。CGLib采用了非常底层的字节码技术，其原理是通过字节码技术为一个类创建子类，并在子类中采用方法拦截的技术拦截所有父类方法的调用，顺势织入横切逻辑。但因为采用的是继承，所以不能对final修饰的类进行代理。JDK动态代理与CGLib动态代理均是实现Spring AOP的基础。

```java
public class UserServiceProxyFactory2 implements MethodInterceptor {

    public <T> Object getProxy(Class<T> clz) {
        Enhancer en = new Enhancer();// 帮我们生成代理对象
        en.setSuperclass(clz);// 设置对谁进行代理
        en.setCallback(this);//回调函数
        return en.create();// 创建代理对象;
    }

    @Override
    public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        // 打开事务
        System.out.println("打开事务！");
        // 调用原有方法
        Object invokeSuper = methodProxy.invokeSuper(o, objects);
        // 提交事务
        System.out.println("提交事务！");
        return invokeSuper;
    }
}
```

```java
// Test  
public static void testAop() {
        UserServiceProxyFactory2 factoryContext = new UserServiceProxyFactory2();
        UserService userServiceProxy = (UserService) factoryContext.getProxy(UserServiceImpl.class);
        userServiceProxy.save();
        System.out.println(userServiceProxy instanceof UserServiceImpl);// 判断是否属于被代理对象类型
    }
```

