## 卡顿优化

[TOC]

> 解决方案：
>
> 1. 打印方法执行时间；
> 2. 监控消息队列；
> 3. 模拟器上hook ArtMethod，打印执行时间。

### 一、概要

​	对用户来说，内存占用高、耗费电、耗费流量不容易被发现，但对卡顿特别敏感，很容易感受到。另一方面，卡顿难以定位排查，产生的原因也错综复杂，跟CPU、内存、I/O都可能有关，跟用户当时的系统环境也有很大关系。

​	造成卡顿的原因可能有千百种，**不过最终都会反映到 CPU 时间上**。我们可以把 CPU 时间分为两种：**用户时间和系统时间**。用户时间就是执行用户态应用程序代码所消耗的时间；系统时间就是执行内核态系统调用所消耗的时间，包括 I/O、锁、中断以及其他系统调用的时间。 

​	所以，出现卡顿问题后，首先我们应该查看 **CPU 的使用率。**

### 二、卡顿排查工具

​	**选择哪种工具，需要看具体的场景。我来汇总一下，如果需要分析 Native 代码的耗时，可以选择 Simpleperf；如果想分析系统调用，可以选择 systrace；如果想分析整个程序执行流程的耗时，可以选择 Traceview 或者插桩版本的 systrace。**

#### 1. TraceView

**Traceview的作用：**
 **(1).** 查看跟踪代码的执行时间，分析哪些是耗时操作。
 **(2).** 可以用于跟踪方法的调用，尤其是Android Framework层的方法调用关系。
 **(3).** 可以方便的查看线程的执行情况，某个方法执行时间、调用次数、在总体中的占比等，从而定位性能点。

```java
Debug.startMethodTracing("sample");
Debug.stopMethodTracing();
```

#### 2. Systrace

​	它可帮助开发者收集Android关键子系统（如Surfaceflinger、WindowManagerService等Framework部分关键模块、服务）的运行信息，从而帮助开发者更直观的分析系统瓶颈，改进性能。

我通常使用 systrace 跟踪系统的 I/O 操作、CPU 负载、Surface 渲染、GC 等事件。
**(1).应用层代码添加systrace跟踪方式:**

  Trace.beginSection(“TEST”);
  Trace.endSection();
**(2).framework的java层代码添加systrace跟踪方式:**
 Trace.traceBegin(Trace.TRACE_TAG_VIEW, “performTraversals”);
 Trace.traceEnd(Trace.TRACE_TAG_VIEW);
 也可以使用：
 ATRACE_BEGIN(“TEST”);
 ATRACE_END();
**(3).framework的native代码添加systrace跟踪方式:**  
 ATRACE_INIT();
 ATRACE_CALL();

#### 3. Nanoscope

​	Uber的开源工具(性能损耗小)，它的实现原理是直接修改 Android 虚拟机源码，**在ArtMethod执行入口和执行结束位置增加埋点代码，将所有的信息先写到内存**，等到 trace 结束后才统一生成结果文件。

​	缺点：需要root权限，目前只支持neuxs6P手机。

#### 4. Simpleperf

​	分析native代码。

### 三、监控

#### 1. 消息队列

#### 2. 插桩

#### 3. Profilo

​	利用linux内核实现，集成 atrace 功能。ftrace 所有性能埋点数据都会通过 trace_marker 文件写入内核缓冲区，Profilo 通过 PLT  Hook 拦截了写入操作，选择部分关心的事件做分析。这样所有 systrace 的探针我们都可以拿到，例如四大组件生命周期、锁等待时间、类校验、GC 时间等。

#### 4. 帧率&生命周期&线程



**参考：**

- [Android Vitals google监控](https://developer.android.google.cn/topic/performance/vitals/)

- [Tencent matrix 微信APM监控](https://github.com/Tencent/matrix#matrix_android_cn)

- [Facebook Profilo监控](https://github.com/facebookincubator/profilo)

- [Tencent Hardcoder](https://github.com/Tencent/Hardcoder)

  **Hardcoder 是一套 Android APP 与系统间的通信解决方案，突破了 APP 只能调用系统标准 API，无法直接调用系统底层硬件资源的问题，让 Android APP 和系统能实时通信。APP 能充分调度系统资源如 CPU 频率，大小核，GPU 频率等来提升 APP 性能，系统能够从 APP 侧获取更多信息以便更合理提供各项系统资源。同时，对于 Android 缺乏标准接口实现的功能，APP 和系统也可以通过该框架实现机型适配和功能拓展。**

  Hardcoder 在微信的启动、发送视频、小程序启动等重度场景平均优化效果达 10%-30%；在手机 QQ 的启动、打开聊天界面、发送图片等场景的平均优化效果达 10%-50%。该框架目前已接入 OPPO、vivo、华为、小米、三星、魅族等主流手机厂商，覆盖 4.6 亿+ 设备量。

- [Uber nanoscope 性能分析损耗小](https://github.com/uber/nanoscope)

- [TraceView](https://developer.android.com/studio/profile/generate-trace-logs#java)

- [systrace](https://source.android.com/devices/tech/debug/systrace?hl=zh-cn)

- [帧率检测Choreographer](https://github.com/wasabeef/Takt)



<br/>



## 一、卡顿现场信息搜集

### 1. 手机信息和用户信息

手机型号、系统、网络状态、用户id等；

## 2. Cpu情况

#### 1. cpu核心数

#### 2. cpu使用率

通过` /proc/stat` 采样计算(Android8.0之后权限禁用):

```shell
#可以分别计算 用户态、内核态、ioWait占用的cpu比例
CPU使用率＝（用户态Jiffies＋系统态Jiffies）／总Jiffies
cpu:68%[user:40%,system:22%,ioWait:4%]
```



## 3. 内存情况





## 一、UI渲染机制

- 每16毫秒发出垂直信号，触发对UI进行渲染，渲染过程需要在16ms内完成，否则掉帧(就是卡顿)；

- 16ms需要做的事：

  有了对Android渲染机制基本的认识以后，那么我们的卡顿的原因就在于没有办法在16ms内完成该完成的操作，而主要因素是在于没有必要的layouts、invalidations、Overdraw。渲染的过程是由CPU与GPU协作完成，下面一张图很好的展示出了CPU和GPU的工作，以及潜在的问题，检测的工具和解决方案。

  <img src="/Users/xin/books/docs/Android/08业务实战/images/ui_render_16ms.png" style="zoom:67%;" />

### **解决办法：**

- 通过Hierarchy Viewer去检测渲染效率，去除不必要的嵌套；
- 通过Show GPU Overdraw去检测Overdraw，最终可以通过移除不必要的背景以及使用canvas.clipRect解决大多数问题（**clipRect的妙用**）；
- **对自定义view进行优化**；

## 二、线上监控

### 1. 利用UI线程Looper打印的日志!!!

> 自定义Looper的Printer实现，计算每个消息执行时间，大于阈值，打印堆栈信息。

```java
// 获取消息执行时间
public class BlockDetectByPrinter {

    public static void start() {

        Looper.getMainLooper().setMessageLogging(new Printer() {

            private static final String START = ">>>>> Dispatching";
            private static final String END = "<<<<< Finished";

            @Override
            public void println(String x) {
                if (x.startsWith(START)) {
                    LogMonitor.getInstance().startMonitor();
                }
                if (x.startsWith(END)) {
                    LogMonitor.getInstance().removeMonitor();
                }
            }
        });

    }
}
// 打印堆栈
Looper.getMainLooper().getThread().getStackTrace();

// 日志分析
1. 监测生命周期函数(500ms)
 <<<<< Finished to Handler (android.app.ActivityThread$H) {18b87a0} null

2. 监测一帧时间包括动画、输入、绘制(20ms)          }
<<<<< Finished to Handler (android.view.Choreographer$FrameHandler) 

3. 监测UI事件(500ms)
click:<<<<< Finished to Handler (android.view.ViewRootImpl$ViewRootHandler) {c043eb5} android.view.View$PerformClick@2c9289b
longClick:<<<<< Finished to Handler (android.view.ViewRootImpl$ViewRootHandler) {c043eb5} android.view.View$CheckForLongPress@15e1c49

```

### 2. 利用Choreographer



### 3. Dumpsys命令

```shell
> adb shell dumpsys gfxinfo <PACKAGE_NAME>
Stats since: 752958278148ns
    Total frames rendered: 82189
    Janky frames: 35335 (42.99%)  #丢帧率
    90th percentile: 34ms
    95th percentile: 42ms
    99th percentile: 69ms
    Number Missed Vsync: 4706
    Number High input latency: 142
    Number Slow UI thread: 17270
    Number Slow bitmap uploads: 1542
    Number Slow draw: 23342

```





<br/>

- 参考

  [1. dumpsys](https://developer.android.com/training/testing/performance)

  [2.BlockCanary](http://blog.zhaiyifan.cn/2016/01/16/BlockCanaryTransparentPerformanceMonitor/)

  [3BlockCanaryEx](https://github.com/seiginonakama/BlockCanaryEx)

  [4AndroidPerformanceMonitor](https://github.com/markzhai/AndroidPerformanceMonitor/blob/master/README_CN.md)

