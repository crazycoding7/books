(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{357:function(v,e,_){v.exports=_.p+"assets/img/android_system_architecture.ca9dac68.png"},358:function(v,e,_){v.exports=_.p+"assets/img/android_system_boot.2bacdad2.jpeg"},379:function(v,e,_){"use strict";_.r(e);var t=_(42),r=Object(t.a)({},(function(){var v=this,e=v.$createElement,t=v._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"android系统启动过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android系统启动过程"}},[v._v("#")]),v._v(" Android系统启动过程")]),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-android系统介绍"}},[v._v("1. Android系统介绍")]),t("ul",[t("li",[t("a",{attrs:{href:"#_2-系统启动过程"}},[v._v("2. 系统启动过程")])])])])])]),t("p"),v._v(" "),t("h2",{attrs:{id:"_1-android系统介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-android系统介绍"}},[v._v("#")]),v._v(" 1. Android系统介绍")]),v._v(" "),t("p",[v._v("​\tAndroid采用分层的架构模型，分为四层， 分别是**应用程序层(app+System apps)、应用程序框架层(Framework)、系统运行库和运行环境层(Libraries+runtime)、Linux内核层(HAL+LinuxKernel),**如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:_(357),alt:"android_architecture"}})]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Linux核心层")]),v._v(" "),t("p",[v._v("linux内核：平台的基础，直接和硬件打交道。硬件驱动、进程管理、内存管理、网络管理的功能都在这里实现。")]),v._v(" "),t("p",[v._v("硬件抽象层：为上层的JavaAPIFramework提供相关的硬件显示功能，audio,camera,sensors是硬件抽象层的库模块。")])]),v._v(" "),t("li",[t("p",[v._v("系统运行库和运行环境")]),v._v(" "),t("p",[v._v("运行环境：5.0之前是Dalvik虚拟机，之后被ART替代。基于寄存器(区别：Jvm基于栈)，运行dex文件。")]),v._v(" "),t("p",[v._v("库文件：原生的C/C++库，如webkit、OpenGL。")])]),v._v(" "),t("li",[t("p",[v._v("应用程序框架层")])]),v._v(" "),t("li",[t("p",[v._v("Application层")])])]),v._v(" "),t("h3",{attrs:{id:"_2-系统启动过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-系统启动过程"}},[v._v("#")]),v._v(" 2. 系统启动过程")]),v._v(" "),t("p",[v._v("可以看到：Android系统启动是一个从下往上的启动过程： "),t("code",[v._v("Loader")]),v._v("->"),t("code",[v._v("Kernel")]),v._v("->"),t("code",[v._v("Native")]),v._v("->"),t("code",[v._v("Framework")]),v._v("->"),t("code",[v._v("app")]),v._v("。")]),v._v(" "),t("h4",{attrs:{id:"loader层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader层"}},[v._v("#")]),v._v(" Loader层")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Boot Rom")]),v._v("：长按开机键开机，引导芯片开始从固化在"),t("code",[v._v("Rom")]),v._v("里预设的代码开始执行，然后加载引导程序到"),t("code",[v._v("Ram")]),v._v("。")]),v._v(" "),t("li",[t("code",[v._v("Boot Loader")]),v._v("：这是启动"),t("code",[v._v("Android")]),v._v("系统之前的引导程序，主要是检查"),t("code",[v._v("Ram")]),v._v("、初始化参数等功能。")])]),v._v(" "),t("h4",{attrs:{id:"kernel层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kernel层"}},[v._v("#")]),v._v(" Kernel层")]),v._v(" "),t("p",[v._v("kernel层是Android内核层，到这里才刚刚进入Android系统。")]),v._v(" "),t("ol",[t("li",[v._v("启动"),t("code",[v._v("Kernel")]),v._v("层的"),t("code",[v._v("swapper")]),v._v("进程（pid=1），系统初始化过程Kernel创建的第一个进程，用于初始化进程管理、内存管理，加载"),t("code",[v._v("Display")]),v._v("、"),t("code",[v._v("Camera")]),v._v("、"),t("code",[v._v("Binder")]),v._v("等驱动相关工作。")]),v._v(" "),t("li",[v._v("启动"),t("code",[v._v("kthreadd")]),v._v("（pid=2），这是"),t("code",[v._v("Linux")]),v._v("系统的内核进程，会创建内核工作线程"),t("code",[v._v("kworkder")]),v._v("、软中断线程"),t("code",[v._v("ksoftirqd")]),v._v("和"),t("code",[v._v("thermal")]),v._v("等内核守护进程。"),t("code",[v._v("kthreadd")]),v._v("是所有内核进程的鼻祖。")])]),v._v(" "),t("h4",{attrs:{id:"native层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native层"}},[v._v("#")]),v._v(" Native层")]),v._v(" "),t("p",[v._v("这里的"),t("code",[v._v("Native")]),v._v("层主要包括"),t("code",[v._v("init")]),v._v("孵化来的用户空间的守护进程、HAL层及开机动画等。启动"),t("code",[v._v("init")]),v._v("进程（pid=1），是"),t("code",[v._v("Linux")]),v._v("系统的用户进程，"),t("strong",[v._v("init进程是所有用户进程的鼻祖。！！！")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("init")]),v._v("进程会孵化出"),t("code",[v._v("ueventd")]),v._v("、"),t("code",[v._v("logd")]),v._v("、"),t("code",[v._v("healthd")]),v._v("、"),t("code",[v._v("installd")]),v._v("、"),t("code",[v._v("adbd")]),v._v("、"),t("code",[v._v("lmkd")]),v._v("等用户守护进程；")]),v._v(" "),t("li",[t("code",[v._v("init")]),v._v("进程还会启动"),t("code",[v._v("ServiceManager")]),v._v("（Binder服务管家）、"),t("code",[v._v("bootanim")]),v._v("（开机动画）等重要服务。")]),v._v(" "),t("li",[t("code",[v._v("init")]),v._v("进程孵化出"),t("code",[v._v("Zygote")]),v._v("进程，"),t("code",[v._v("Zygote")]),v._v("进程是Android系统第一个"),t("code",[v._v("Java")]),v._v("进程（虚拟机进程），"),t("strong",[v._v("zygote进程是所有Java进程的父进程。！！！")])])]),v._v(" "),t("h4",{attrs:{id:"framework层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#framework层"}},[v._v("#")]),v._v(" Framework层")]),v._v(" "),t("p",[v._v("framework层主要"),t("strong",[v._v("包括"),t("code",[v._v("Zygote进程")]),v._v("、"),t("code",[v._v("SystemServer进程")]),v._v("和MediaService进程。")])]),v._v(" "),t("h5",{attrs:{id:"_1-zygote进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-zygote进程"}},[v._v("#")]),v._v(" 1. Zygote进程")]),v._v(" "),t("p",[t("code",[v._v("Zygote")]),v._v("进程是由"),t("code",[v._v("init")]),v._v("进程通过解析"),t("code",[v._v("init.rc")]),v._v("文件后"),t("code",[v._v("fork")]),v._v("生成的。"),t("code",[v._v("Zygote")]),v._v("的任务主要包括：")]),v._v(" "),t("ol",[t("li",[v._v("加载"),t("code",[v._v("ZygoteInit")]),v._v("类，注册"),t("code",[v._v("Zygote Socket")]),v._v("服务端套接字。")]),v._v(" "),t("li",[v._v("加载虚拟机")]),v._v(" "),t("li",[t("code",[v._v("preloadClassses")])]),v._v(" "),t("li",[t("code",[v._v("preloadResources")])])]),v._v(" "),t("h5",{attrs:{id:"_2-systemserver进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-systemserver进程"}},[v._v("#")]),v._v(" 2. SystemServer进程")]),v._v(" "),t("p",[t("code",[v._v("System Server")]),v._v("进程是由"),t("code",[v._v("Zygote")]),v._v("进程"),t("code",[v._v("fork")]),v._v("而来，"),t("strong",[v._v("System Server是Zygote孵化的第一个进程")]),v._v("。"),t("code",[v._v("System Server")]),v._v("负责启动和管理整个"),t("code",[v._v("Java Framework")]),v._v("，包含"),t("code",[v._v("ActivityManager")]),v._v("、"),t("code",[v._v("PowerManager")]),v._v("等服务。")]),v._v(" "),t("h5",{attrs:{id:"_3-mediaserver进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-mediaserver进程"}},[v._v("#")]),v._v(" 3. MediaServer进程")]),v._v(" "),t("p",[t("code",[v._v("Media Server")]),v._v(" 进程由"),t("code",[v._v("init")]),v._v("进程"),t("code",[v._v("fork")]),v._v("而来，负责管理整个"),t("code",[v._v("C++ Framework")]),v._v("，包含"),t("code",[v._v("AudioFlinger")]),v._v("、"),t("code",[v._v("Camera Service")]),v._v("等服务。")]),v._v(" "),t("h4",{attrs:{id:"app层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app层"}},[v._v("#")]),v._v(" App层")]),v._v(" "),t("p",[t("code",[v._v("Zygote")]),v._v("进程孵化出的第一个"),t("code",[v._v("App")]),v._v("进程是"),t("code",[v._v("Launcher")]),v._v("，也就是用户看到的"),t("code",[v._v("桌面App")]),v._v("。同时"),t("code",[v._v("Zygote")]),v._v("进程还会创建"),t("code",[v._v("Browser")]),v._v("、"),t("code",[v._v("Phone")]),v._v("、"),t("code",[v._v("Email")]),v._v("等"),t("code",[v._v("App")]),v._v("进程。也就是说"),t("strong",[v._v("所有的App进程都是由Zygote进程fork生成的。")])]),v._v(" "),t("h4",{attrs:{id:"syscall和jni"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syscall和jni"}},[v._v("#")]),v._v(" Syscall和JNI")]),v._v(" "),t("p",[t("code",[v._v("Native")]),v._v("层和"),t("code",[v._v("Kernel")]),v._v("层有一个系统调用层，也就是Syscall。"),t("code",[v._v("Java")]),v._v("层和"),t("code",[v._v("native")]),v._v("层之间的纽带是"),t("code",[v._v("JNI")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:_(358),alt:"android_boot"}})]),v._v(" "),t("h4",{attrs:{id:"名词解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[v._v("#")]),v._v(" 名词解释")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("类名")]),v._v(" "),t("th",[v._v("作用")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[v._v("Init进程")])]),v._v(" "),t("td",[v._v("系统内核启动完成后，就会创建用户空间的第一个进程；后面所有的进程，都是它孵化出来的。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("Zygote进程")])]),v._v(" "),t("td",[v._v("是系统创建新进场的核心，在init进程启动后就会创建zygote进程；zygote进程在内部会先启动Dalvik虚拟机，继而加载一些必要的系统资源和系统类，最后进入一种监听状态。在之后的运作中，当其他系统模块（比如AMS）希望创建新进程时，只需向zygote进程发出请求，zygote进程监听到该请求后，会相应地fork出新的进程，于是这个新进程在初生之时，就先天具有了自己的Dalvik虚拟机以及系统资源")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("SystemServer进程")])]),v._v(" "),t("td",[v._v("并称**Android世界的三极。**SS是由Zygote通过Zygote.forkSystemServer函数fork诞生出来的。与Zygote生死与共.SS诞生后,便和生父Zygote分道扬镳,它有了自己的历史使命。即加载各种Service()。"),t("br"),v._v("作用:"),t("br"),v._v("init1()是native函数,启动了 c++运行时库,如：sqllite,OpenGL ES等,然后把调用线程加入Binder通信中。"),t("br"),v._v("init2在Java层,就是单独创建一个线程,用以启动系统各项服务,如：ActivityManagerService,PowerManagerService...注意这些服务都是线程,在SystemServer进程中.")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("AcitvityThread")])]),v._v(" "),t("td",[v._v("它的main方法，是整个应用程序的入口，管理者四大组件。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("ServiceManager进程")])]),v._v(" "),t("td",[v._v("Binder服务管家或叫路由。")])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("它是android中很重要的一个服务，它统筹管理着android的四大组件；统一调度各应用进程。")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);