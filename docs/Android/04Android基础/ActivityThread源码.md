## ActivityThread源码

[TOC]

### 1. 介绍

​	它管理应用程序主线程的执行(main入口函数)，并负责调度和执行activities、service和其他操作。都是基于事件驱动机制完成。

### 2. ActivityThread

```java
public final class ActivityThread {
	 final ApplicationThread mAppThread = new ApplicationThread();
   final Looper mLooper = Looper.myLooper();
   final H mH = new H();
   final ArrayMap<IBinder, ActivityClientRecord> mActivities = new ArrayMap<>();
   final ArrayMap<IBinder, Service> mServices = new ArrayMap<>();
  
   private class ApplicationThread extends IApplicationThread.Stub {...}
   private class H extends Handler {...}
	 public static void main(String[] args) {...}
   ...
}  
```

### 3. Main函数

​	app入口函数，负责app创建工作。

```java
 public static void main(String[] args) {
        //....
        //创建Looper和MessageQueue对象，用于处理主线程的消息
        Looper.prepareMainLooper();
        //创建ActivityThread对象
        ActivityThread thread = new ActivityThread(); 
        //建立Binder通道 (创建新线程)
        thread.attach(false);
        Looper.loop(); //消息循环运行
        throw new RuntimeException("Main thread loop unexpectedly exited");
    }
```

### 4. ApplicationThread

​	通过Binder机制建立与AMS通信。ApplicationThread作为server，AMS作为client。

```java
// 内部类继承aidl实现通信(binder通信)
private class ApplicationThread extends IApplicationThread.Stub {
  schedulePauseActivity(IBinder token, boolean finished){
    // 通过mH发送
    sendMessage(
                    finished ? H.PAUSE_ACTIVITY_FINISHING : H.PAUSE_ACTIVITY,
                    token);
  }
  scheduleStopActivity(){}
  ...
}

private void attach(boolean system) {
	...			
  //将mAppThread（IBinder类型）放到RuntimeInit类中的静态变量
  RuntimeInit.setApplicationObject(mAppThread.asBinder());
  //创建ActivityManagerProxy对象
  final IActivityManager mgr = ActivityManagerNative.getDefault();
  try {
    //将mAppThread传入ActivityManagerService中
    mgr.attachApplication(mAppThread);
  } catch (RemoteException ex) {
  }
}
```

1.调用 RuntimeInit.setApplicationObject() 方法，把对象mAppThread（Binder）放到了RuntimeInit类中的静态变量mApplicationObject中。

2.调用**ActivityManagerService**的attachApplication()方法，将mAppThread 作为参数传入ActivityManagerService，这样ActivityManagerService就可以调用**ApplicaitonThread**的接口了。这与我们刚才说的，ActivityManagerService作为Client端调用ApplicaitonThread的接口管理Activity，就不谋而合了。

### 5. class H

​	根据接收到不同的msg，执行相应的生命周期(四大组件)等。	

```java
public final class ActivityThread {
	final H mH = new H();
  private class H extends Handler {
        //...声明的一些常量
        public void handleMessage(Message msg) {
            //...
            switch (msg.what) {
                //针对不同的常量，做不同的业务处理
                case LAUNCH_ACTIVITY: {
                    //...启动一个Activity
                  	final ActivityClientRecord r = (ActivityClientRecord) msg.obj;
                    r.packageInfo = getPackageInfoNoCheck(
                            r.activityInfo.applicationInfo, r.compatInfo);
                  
                    handleLaunchActivity(r, null, "LAUNCH_ACTIVITY");
                } break;
                case RELAUNCH_ACTIVITY: {
                    handleRelaunchActivity(r);
                } break;
                case PAUSE_ACTIVITY: {
                    handlePauseActivity((IBinder) args.arg1, false,
                            (args.argi1 & USER_LEAVING) != 0, args.argi2,
                            (args.argi1 & DONT_REPORT) != 0, args.argi3);
                    maybeSnapshot();
                    //...
                } break;
                //...
            }
            //...
        }

        private void maybeSnapshot() {
           //...这个方法主要统计snapshot 
        }
    }
}
```

### 6. 总结

<img src="images/source_activitythread_bind.jpg" style="zoom:80%;" />

​	ActivityThread框架是基于Binder通信的C/S结构，从图可知Server端是ActivityThread、ApplicationThread，Client是AMS（ActivityManagerService），而ApplicationThreadProxy可以看作AMS中Server代表

**system_server进程是系统进程**，java framework框架的核心载体，里面运行了大量的系统服务，比如这里提供ApplicationThreadProxy，ActivityManagerService，这个两个服务都运行在system_server进程的不同线程中，由于ApplicationThreadProxy和ActivityManagerService都是基于IBinder接口，都是binder线程，binder线程的创建与销毁都是由binder驱动来决定的。 

**App进程则是我们常说的应用程序**，主线程主要负责Activity/Service等组件的生命周期以及UI相关操作都运行在这个线程； 另外，每个App进程中至少会有两个binder线程 ApplicationThread和ActivityManagerProxy，除了图中画的线程，其中还有很多线程，比如signal catcher线程等，这里就不一一列举。

Binder用于不同进程之间通信，由一个进程的Binder客户端向另一个进程的服务端发送事务，比如图中线程2向线程4发送事务；而handler用于同一个进程中不同线程的通信，比如图中线程4向主线程发送消息。

例如:

需要暂停一个Activity

- 线程1的AMS中调用线程2的ApplicationThreadProxy；（由于同一个进程的线程间资源共享，可以相互直接调用，但需要注意多线程并发问题）
- 线程2通过binder传输到App进程的线程4；
- 线程4通过handler消息机制，将暂停Activity的消息发送给主线程；
- 主线程在looper.loop()中循环遍历消息，当收到暂停Activity的消息时，便将消息分发给ActivityThread.H.handleMessage()方法，再经过方法的调用，最后便会调用到Activity.onPause()，当onPause()处理完后，继续循环loop下去。