## 卡顿优化

[TOC]

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