## ANR问题

[TOC]

### 一、介绍

​	ANR全称：Application Not Reponding，也就四应用程序无响应。

#### 	原因

​	Android系统中，**ActivityManagerService(简称AMS)**和**WindowManagerService(简称WMS)**会检测App的响应时间，如果App在特定时间无法相应屏幕触摸或键盘输入时间，或者特定事件没有处理完毕，就会出现ANR。

- 主线程慢代码
- 主线程IO
- 锁竞争
- 死锁

#### 	触发条件

​	**InputDispatching Timeout**：5秒内无法响应屏幕触摸事件或键盘输入事件

   **BroadcastQueue Timeout** ：在执行前台广播（BroadcastReceiver）的`onReceive()`函数时10秒没有处理完成，后台为60秒。

   **Service Timeout** ：前台服务20秒内，后台服务在200秒内没有执行完毕。

   **ContentProvider Timeout** ：ContentProvider的publish在10s内没进行完。

### 二、解决方案

**异常代码：**

```java
// 异常代码
findViewById(R.id.button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    Thread.sleep(10000l);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                Toast.makeText(MainActivity.this,"点我你就发了", Toast.LENGTH_SHORT).show();
            }
        });
```



#### 1. 利用logcat

```java
// logcat 错误日志
2020-12-21 11:27:04.810 26533-26558/com.dodola.breakpad I/dodola.breakpa: Thread[3,tid=26558,WaitingInMainSignalCatcherLoop,Thread*=0x7cc7c17400,peer=0x13f80120,"Signal Catcher"]: reacting to signal 3
2020-12-21 11:27:05.595 26533-26558/com.dodola.breakpad I/dodola.breakpa: Wrote stack traces to '[tombstoned]'
2020-12-21 11:28:00.799 26533-26591/com.dodola.breakpad I/dodola.breakpa: Starting profile saver IsSaveProfileNow end.
2020-12-21 11:28:00.812 26533-26533/com.dodola.breakpad I/Choreographer: Skipped 6006 frames!  The application may be doing too much work on its main thread.
2020-12-21 11:28:00.840 26533-26605/com.dodola.breakpad I/OpenGLRenderer: Davey! duration=100143ms; Flags=0, IntendedVsync=2621994292513931, Vsync=2622094392509927, OldestInputEvent=9223372036854775807, NewestInputEvent=0, HandleInputStart=2622094408549484, AnimationStart=2622094408734901, PerformTraversalsStart=2622094413432818, DrawStart=2622094415197401, SyncQueued=2622094420339588, SyncStart=2622094420743234, IssueDrawCommandsStart=2622094421002609, SwapBuffers=2622094433322401, FrameCompleted=2622094436245838, DequeueBufferDuration=746000, QueueBufferDuration=1130000, 
2020-12-21 11:28:00.865 26533-26533/com.dodola.breakpad I/ViewRootImpl: jank_removeInvalidNode jank list is null
2020-12-21 11:28:00.867 26533-26533/com.dodola.breakpad V/AudioManager: playSoundEffect   effectType: 0
2020-12-21 11:28:00.867 26533-26533/com.dodola.breakpad V/AudioManager: querySoundEffectsEnabled...
2020-12-21 11:28:01.480 26533-26593/com.dodola.breakpad D/ZrHung.AppEyeUiProbe: sendAppEye recover Events.
2020-12-21 11:28:04.694 26533-26593/com.dodola.breakpad D/ZrHung.AppEyeUiProbe: message delay warning
2020-12-21 11:28:05.796 26533-26593/com.dodola.breakpad D/ZrHung.AppEyeUiProbe: message delay warning
```

 可以看到logcat清晰地记录了ANR发生的时间，以及线程的tid和一句话概括原因：`WaitingInMainSignalCatcherLoop`，大概意思为主线程等待异常。
 最后一句`The application may be doing too much work on its main thread.`告知可能在主线程做了太多的工作。

#### 2. 使用 FileObserver 监听 /data/anr/traces.txt 的变化

高版本已经没有权限。只能导出日志。

**命令行导出:**

```java
//低版本
adb pull /data/anr/traces.txt /Users/xin/Desktop
//高版本
adb bugreport /Users/xin/Desktop
```

**文件内容:**

错误原因： Sleeping ，后面是行数和进程信息。

```java

----- pid 26533 at 2020-12-21 11:26:36 -----
Cmd line: com.dodola.breakpad
Build fingerprint: 'HONOR/STF-AL00/HWSTF:9/HUAWEISTF-AL00/9.1.0.201C00:user/release-keys'
ABI: 'arm64'
Build type: optimized
Zygote loaded classes=11989 post zygote classes=98
Intern table: 101624 strong; 364 weak
JNI: CheckJNI is off; globals=624 (plus 41 weak)
Libraries: /data/app/com.dodola.breakpad-0gSImeXHx-t0IM3fZVYZPQ==/lib/arm64/libcrash-lib.so /system/lib64/libandroid.so /system/lib64/libcompiler_rt.so /system/lib64/libhwetrace_jni.so /system/lib64/libhwlog_jni.so /system/lib64/libiAwareSdk_jni.so /system/lib64/libimonitor_jni.so /system/lib64/libjavacrypto.so /system/lib64/libjnigraphics.so /system/lib64/libmedia_jni.so /system/lib64/libsoundpool.so /system/lib64/libwebviewchromium_loader.so libjavacore.so libopenjdk.so (14)
Heap: 11% free, 2MB/2MB; 40464 objects
Dumping cumulative Gc timings
Start Dumping histograms for 1 iterations for concurrent copying
GrayAllDirtyImmuneObjects:	Sum: 3.181ms 99% C.I. 3.181ms-3.181ms Avg: 3.181ms Max: 3.181ms
VisitConcurrentRoots:	Sum: 2.989ms 99% C.I. 2.989ms-2.989ms Avg: 2.989ms Max: 2.989ms
ProfileSaver total_ms_of_sleep=5000
ProfileSaver total_ms_of_work=0
ProfileSaver max_number_profile_entries_cached=0
ProfileSaver total_number_of_hot_spikes=0
ProfileSaver total_number_of_wake_ups=0

suspend all histogram:	Sum: 32.283ms 99% C.I. 2us-3423.999us Avg: 61.491us Max: 9945us
DALVIK THREADS (17):
"Signal Catcher" daemon prio=5 tid=3 Runnable
  | group="system" sCount=0 dsCount=0 flags=0 obj=0x13f80120 self=0x7cc7c17400
  | sysTid=26558 nice=0 cgrp=default sched=0/0 handle=0x7cc12fe4f0
  | state=R schedstat=( 30344792 900001 21 ) utm=1 stm=1 core=2 HZ=100
  | stack=0x7cc1203000-0x7cc1205000 stackSize=1009KB
  | held mutexes= "mutator lock"(shared held)
  native: #00 pc 00000000003c7d4c  /system/lib64/libart.so (art::DumpNativeStack(std::__1::basic_ostream<char, std::__1::char_traits<char>>&, int, BacktraceMap*, char const*, art::ArtMethod*, void*, bool)+220)
  native: #01 pc 00000000004a5b64  /system/lib64/libart.so (art::Thread::DumpStack(std::__1::basic_ostream<char, std::__1::char_traits<char>>&, bool, 
// 错误原因和行数信息    

"main" prio=5 tid=1 Sleeping
  | group="main" sCount=1 dsCount=0 flags=1 obj=0x76148358 self=0x7cc7c15c00
  | sysTid=26533 nice=-10 cgrp=default sched=0/0 handle=0x7d4e4bd548
  | state=S schedstat=( 536965100 28957813 497 ) utm=44 stm=9 core=3 HZ=100
  | stack=0x7ff1ddc000-0x7ff1dde000 stackSize=8MB
  | held mutexes=
  at java.lang.Thread.sleep(Native method)
  - sleeping on <0x01ff52c8> (a java.lang.Object)
  at java.lang.Thread.sleep(Thread.java:386)
  - locked <0x01ff52c8> (a java.lang.Object)
  at java.lang.Thread.sleep(Thread.java:327)
  at com.dodola.breakpad.MainActivity$1.onClick(MainActivity.java:54)
  at android.view.View.performClick(View.java:6663)
  at android.view.View.performClickInternal(View.java:6635)
  at android.view.View.access$3100(View.java:794)
  at android.view.View$PerformClick.run(View.java:26199)
  at android.os.Handler.handleCallback(Handler.java:907)
  at android.os.Handler.dispatchMessage(Handler.java:105)
  at android.os.Looper.loop(Looper.java:216)
  at android.app.ActivityThread.main(ActivityThread.java:7625)
  at java.lang.reflect.Method.invoke(Native method)
  at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:524)
  at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:987)

"Jit thread pool worker thread 0" daemon prio=5 tid=2 Native
  | group="main" sCount=1 dsCount=0 flags=1 obj=0x13f80000 self=0x7cc1434000
  | sysTid=26557 nice=9 cgrp=default sched=0/0 handle=0x7cc13ff4f0
  | state=S schedstat=( 71260934 10785941 155 ) utm=4 stm=2 core=1 HZ=100
  | stack=0x7cc1301000-0x7cc1303000 stackSize=1021KB
  | held mutexes=
  kernel: (couldn't read /proc/self/task/26557/stack stderr:Permission denied)
  native: #00 pc 000000000001f2ec  /system/lib64/libc.so (syscall+28)
  native: #01 pc 00000000000dbd94  /system/lib64/libart.so (art::ConditionVariable::WaitHoldingLocks(art::Thread*)+148)
  native: #02 pc 00000000004c0fc4  /system/lib64/libart.so (art::ThreadPool::GetTask(art::Thread*)+260)
  native: #03 pc 00000000004c052c  /system/lib64/libart.so (art::ThreadPoolWorker::Run()+124)
  native: #04 pc 00000000004bffec  /system/lib64/libart.so (art::ThreadPoolWorker::Callback(void*)+148)
  native: #05 pc 0000000000083588  /system/lib64/libc.so (__pthread_start(void*)+36)
  native: #06 pc 00000000000241dc  /system/lib64/libc.so (__start_thread+68)
  (no managed stack frames)

"ADB-JDWP Connection Control Thread" daemon prio=0 tid=4 WaitingInMainDebuggerLoop
  | group="system" sCount=1 dsCount=0 flags=1 obj=0x13f801d0 self=0x7cc1413800
  | sysTid=26559 nice=0 cgrp=default sched=0/0 handle=0x7cab9104f0
  | state=S schedstat=( 3231772 346354 14 ) utm=0 stm=0 core=2 HZ=100
  | stack=0x7cab815000-0x7cab817000 stackSize=1009KB
  | held mutexes=
  kernel: (couldn't read /proc/self/task/26559/stack stderr:Permission denied)
  native: #00 pc 000000000006fdcc  /system/lib64/libc.so (__ppoll+8)
  native: #01 pc 000000000002c310  /system/lib64/libc.so (poll+88)
  native: #02 pc 0000000000006c50  /system/lib64/libadbconnection.so (adbconnection::AdbConnectionState::RunPollLoop(art::Thread*)+836)
  native: #03 pc 0000000000005218  /system/lib64/libadbconnection.so (adbconnection::CallbackFunction(void*)+1060)
  native: #04 pc 0000000000083588  /system/lib64/libc.so (__pthread_start(void*)+36)
  native: #05 pc 00000000000241dc  /system/lib64/libc.so (__start_thread+68)
  (no managed stack frames)

----- end 26533 -----

----- binder transactions -----
2020-12-21  11:26:36
blocked binder transactions:
	28826:9048(hwid.persistent:HiHealth_Thread) -> 29570:22884(hwid.container1:Binder:29570_8) code 1 wait:404727.528225547 s
	28826:28902(hwid.persistent:HiHealth_Thread) -> 29570:29594(hwid.container1:Binder:29570_4) code 1 wait:401127.433798407 s
	28826:29205(hwid.persistent:HiHealth_Thread) -> 29570:1786(hwid.container1:Binder:29570_6) code 1 wait:411927.784341807 s
	28826:31426(hwid.persistent:HiHealth_Thread) -> 29570:29275(hwid.container1:Binder:29570_B) code 1 wait:408327.765007375 s
	1319:1453(system_server:SensorService) -> 734:859(sensors@1.0-ser:HwBinder:734_1) code 4 wait:0.326859376 s
binder thread count, and memory info:

pid	context		max_threads	ready_threads	requested_threads	requested_threads_started	free async space(byte)
28826	hwbinder	0		0		0			0					520192
28826	binder		15		7		0			6					520192
29570	binder		15		6		0			13					520192
1319	hwbinder	4		5		0			4					520192
1319	binder		31		32		0			31					520192
734	hwbinder	1		1		0			1					520192
499	vndbinder	0		1		0			0					65536	< -- binder memory < 100KB
497	binder		0		1		0			0					65536	< -- binder memory < 100KB
----- end binder transactions -----

```

#### 3. 监控消息队列的运行时间

​	建立一个线程，不停向消息队列发送消息，如果处理时间大于5s，代表发生了ANR。但不是100%准确，需要单独跑线程。

例如**Watchdog**。

#### 4. jstack工具监控

​	jstack(查看线程)、jmap(查看内存)和jstat(性能分析)。

#### 5. 微信团队Hardcoder性能优化框架

​	需要和ROM厂商谈合作。

### 三、finalize time out 崩溃问题案例

​	gc垃圾回收手，会将实现了finalize()函数的对象放在一个队列中，由守护线程`FinalizerWatchdogDaemon`执行，如果处理超时(默认10s)，就会报`TimeoutException`。

```java
// 异常demo
public class GhostObject {
    @Override
    protected void finalize() throws Throwable {
        Log.d("ghost", "=============fire finalize============="+Thread.currentThread().getName());
        super.finalize();
        Thread.sleep(80000);//每个手机触发 Timeout 的时长不同，比如 vivo 的某些rom 是2分钟，模拟器统一都是10秒钟，所以在模拟器上效果明显
    }
}

// 异常日志
2020-12-21 15:27:58.370 7443-7453/com.dodola.watchdogkiller E/AndroidRuntime: FATAL EXCEPTION: FinalizerWatchdogDaemon
    Process: com.dodola.watchdogkiller, PID: 7443
    java.util.concurrent.TimeoutException: com.dodola.watchdogkiller.GhostObject.finalize() timed out after 10 seconds
        at java.lang.Thread.sleep(Native Method)
        at java.lang.Thread.sleep(Thread.java:386)
        at java.lang.Thread.sleep(Thread.java:327)
        at com.dodola.watchdogkiller.GhostObject.finalize(GhostObject.java:13)
        at java.lang.Daemons$FinalizerDaemon.doFinalize(Daemons.java:250)
        at java.lang.Daemons$FinalizerDaemon.runInternal(Daemons.java:237)
        at java.lang.Daemons$Daemon.run(Daemons.java:103)
        at java.lang.Thread.run(Thread.java:784)
```



#### 1. 利用反射停止守护线程	

```java
public static void stopWatchDog() {
        // 建议在在debug包或者灰度包中不要stop，保留发现问题的能力。为了Sample效果，先注释
        //if (!BuildConfig.DEBUG) {
        //    return;
        //}

        // Android P 以后不能反射FinalizerWatchdogDaemon
        if (Build.VERSION.SDK_INT >= 28) {
            Log.w(TAG, "stopWatchDog, do not support after Android P, just return");
            return;
        }
        if (sWatchdogStopped) {
            Log.w(TAG, "stopWatchDog, already stopped, just return");
            return;
        }
        sWatchdogStopped = true;
        Log.w(TAG, "stopWatchDog, try to stop watchdog");

        try {
            final Class clazz = Class.forName("java.lang.Daemons$FinalizerWatchdogDaemon");
            final Field field = clazz.getDeclaredField("INSTANCE");
            field.setAccessible(true);
            final Object watchdog = field.get(null);
            try {
                final Field thread = clazz.getSuperclass().getDeclaredField("thread");
                thread.setAccessible(true);
                thread.set(watchdog, null);
            } catch (final Throwable t) {
                Log.e(TAG, "stopWatchDog, set null occur error:" + t);

                t.printStackTrace();
                try {
                    // 直接调用stop方法，在Android 6.0之前会有线程安全问题
                    final Method method = clazz.getSuperclass().getDeclaredMethod("stop");
                    method.setAccessible(true);
                    method.invoke(watchdog);
                } catch (final Throwable e) {
                    Log.e(TAG, "stopWatchDog, stop occur error:" + t);
                    t.printStackTrace();
                }
            }
        } catch (final Throwable t) {
            Log.e(TAG, "stopWatchDog, get object occur error:" + t);
            t.printStackTrace();
        }
    }
```



#### 2. 利用Thread.setDefaultuncaughtExceptionHandler忽略异常

```java
  Thread.setDefaultUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() {
            @Override
            public void uncaughtException(Thread t, Throwable e) {
                Log.e("MainActivity", t.getName() + Toast.LENGTH_SHORT + (e instanceof TimeoutException));
                if(t.getName().contains("FinalizerWatchdogDaemon") || e instanceof TimeoutException){
                    Log.e("MainActivity", "-----------"+t.getName() + Toast.LENGTH_SHORT);
                    // 忽略异常
                    return;
                }
            }
        });
```



#### 3. 优化代码结构，争取不超时(根本方法)

[例子参考Chapter02](https://github.com/AndroidAdvanceWithGeektime/Chapter02)

[Art hook](https://blog.csdn.net/ganyao939543405/article/details/89205821)

