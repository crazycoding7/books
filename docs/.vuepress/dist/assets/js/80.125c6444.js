(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{441:function(e,s,a){"use strict";a.r(s);var t=a(42),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"android-高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-高级"}},[e._v("#")]),e._v(" Android 高级")]),e._v(" "),a("p",[e._v("[TOC]")]),e._v(" "),a("h3",{attrs:{id:"一、概念理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、概念理解"}},[e._v("#")]),e._v(" 一、概念理解")]),e._v(" "),a("h4",{attrs:{id:"_1-响应式编程-react-programming-理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-响应式编程-react-programming-理解"}},[e._v("#")]),e._v(" 1. 响应式编程(react programming)理解")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/c95e29854cb1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("strong",[e._v("Ks题目")])]),e._v(" "),a("p",[e._v("（可多选）关于响应式编程(react programming)描述正确的是：B C\n（A）使用 facebook 开源的 react native 写代码，实现跨平台的方案\n（B）响应式编程是使用异步数据流进行编程\n（C）RxJava就是一种用Java语言实现的响应式编程\n（D）LiveData、ViewModel是实现响应式编程的方案之一")]),e._v(" "),a("p",[a("strong",[e._v("概念")])]),e._v(" "),a("p",[a("strong",[e._v("总结起来，响应式编程（reactive programming）是一种基于数据流（data stream）和变化传递（propagation of change）的声明式（declarative）的编程范式。响应式编程是一种通过异步和数据流来构建事物关系的编程模式。")])]),e._v(" "),a("p",[e._v("响应式编程的“变化传递”就相当于果汁流水线的管道；在入口放进橙子，出来的就是橙汁；放西瓜，出来的就是西瓜汁，橙子和西瓜、以及机器中的果肉果汁以及残渣等，都是流动的“数据流”；管道的图纸是用“声明式”的语言表示的。")]),e._v(" "),a("p",[e._v("这种编程范式如何让Web应用更加“reactive”呢？")]),e._v(" "),a("p",[e._v("我们设想这样一种场景，我们从底层数据库驱动，经过持久层、服务层、MVC层中的model，到用户的前端界面的元素，全部都采用声明式的编程范式，从而搭建一条能够传递变化的管道，这样我们只要更新一下数据库中的数据，用户的界面上就相应的发生变化，岂不美哉？尤其重要的是，一处发生变化，我们不需要各种命令式的调用来传递这种变化，而是由搭建好的“流水线”自动传递。")]),e._v(" "),a("p",[e._v("这种场景用在哪呢？比如一个日志监控系统，我们的前端页面将不再需要通过“命令式”的轮询的方式不断向服务器请求数据然后进行更新，而是在建立好通道之后，数据流从系统源源不断流向页面，从而展现实时的指标变化曲线；再比如一个社交平台，朋友的动态、点赞和留言不是手动刷出来的，而是当后台数据变化的时候自动体现到界面上的。")]),e._v(" "),a("h4",{attrs:{id:"_2-rxjava-livedata思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rxjava-livedata思考"}},[e._v("#")]),e._v(" 2. Rxjava LiveData思考")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.sohu.com/a/279237108_659256",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"_3-协程思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-协程思考"}},[e._v("#")]),e._v(" 3. 协程思考")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/zheng199172/article/details/88800275",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/ConstXiong/p/11991459.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("quasar"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"_4-gradle构建流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-gradle构建流程"}},[e._v("#")]),e._v(" 4. Gradle构建流程")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v("clean  清理工程  删除build文件夹\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ************** Configuration on demand is an incubating feature  *******")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("、preBuild          每个"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("module")]),e._v(" 都会执行preBuild   准备配置文件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("、preReleaseBuild   准备release configuration    在 preBuild 之后执行 会依赖preBuild\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("、checkReleaseManifest 检查 release下的manifest 在 preReleaseBuild 之后执行 依赖preReleaseBuild \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("、preDebugAndroidTestBuild          准备debug下的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Test")]),e._v("   在preBuild后执行 依赖preBuild\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("、preDebugBuild                 准备 debug configuration  在preBuild后执行 依赖preBuild\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("、preDebugUnitTestBuild             准备 debug下的单元测试构建  在preBuild后执行 依赖preBuild\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("、preReleaseUnitTestBuild           准备 release下的单元测试构建  在preBuild后执行 依赖preBuild\n\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ***************** 以上  build 文件夹不存在 ***********************************")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//  ****************  接下来是对依赖的包 进行下载 *********************在build/incremental/exploded-aar下")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v("、prepareComAndroidSupportSupportV42311Library       生成 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Android")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SupportV4")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".23")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".1")]),e._v("库支持 在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("exploded"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("aar下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("、prepareComNdAndroidSmartcanCommonsUtilAar1205SmartcanReleaseLibrary   生成 smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("util"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("aar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v("、prepareComNdAndroidSmartcanDatalayerAar1205SmartcanReleaseLibrary        生成 smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("datalayer"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("aar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v("、prepareComNdAndroidSmartcanDatatransferAar1205SmartcanReleaseLibrary     生成 smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("datatransfer"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("aar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v("、prepareComNdAndroidSmartcanFrameworkAar1205SmartcanReleaseLibrary        生成 smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("framnework"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("aar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v("、prepareComNdAndroidSmartcanNetworkAar1205SmartcanReleaseLibrary          生成 smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("network"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("aar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v("、prepareComNdAndroidSmartcanSmartcanCoreAar1205SmartcanReleaseLibrary 生成 smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("core"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("aar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v("、prepareComNdAndroidSmartcanSmartcanDatacollectionAar1205SmartcanReleaseLibrary  生成 smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("datacollection"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("aar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("smartcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v("、prepareComNdSdpAndroidProcesscheck108Library                         生成  android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".8")]),e._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v("、prepareReleaseDependencies        加载 远端的依赖   加载 所有的需要从远端下载的依赖   \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("19")]),e._v("、compileReleaseAidl               编译release环境下的 AIDL文件   依赖prepareDebugDependencies   在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("aidl"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("、compileReleaseRenderscript       编译 release环境下的渲染脚本， "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Renderscript")]),e._v("用来进行高性能计算，是一种类"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("C")]),e._v("脚本语言 依赖prepareDebugDependencies  在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("rs"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v("、generateReleaseBuildConfig   会生成 releasse下的 资源和源码 包括"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BuildConfig")]),e._v("  在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("generate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("buildConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release  依赖checkReleaseManifest\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v("、generateReleaseAssets            生成 release下的 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Assets")]),e._v("文件       但没有完全生成个  算是准备\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v("、mergeReleaseAssets               生成 debug下的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Assets")]),e._v("文件 在 build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("intermediates"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release下"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  和 merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("xml文件 在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("intermediates"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("mergeAssets"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release下   依赖"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ReleaseDependencies")]),e._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v("、generateReleaseResValues     准备resource的 values文件  \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v("、generateReleaseResources     准备 资源文件 \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("26")]),e._v("、mergeReleaseResources             release下的 生成"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Resource")]),e._v("文件 在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("res"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release下 和 merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("xml 在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("intermediates"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("mergeResources"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("27")]),e._v("、processReleaseManifest           依赖prepareReleaseDependencies  生成 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AndroidManifest")]),e._v("文件 在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("manifest"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("full"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v("、processReleaseResources          生成resources"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ap_    在 build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("intermediates"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("resources下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("29")]),e._v("、generateReleaseSources           生成"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("R")]),e._v("文件  在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("generate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug下 \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v("、processReleaseJavaRes            \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("31")]),e._v("、compileReleaseJavaWithJavac      使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Javac")]),e._v("编译"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Java")]),e._v("代码\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v("、proguardRelease                  生成 混淆文件 运行混淆规则\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("33")]),e._v("、androidJavadocsPicked\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("34")]),e._v("、copyMappingTask                  复制 mapping文件  \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("35")]),e._v("、androidJavadocsJar               生成 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Javadocs")]),e._v("的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Jar")]),e._v("文件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("36")]),e._v("、androidSourcesJar                生成 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Java")]),e._v("源码的 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Jar")]),e._v("文件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("37")]),e._v("、compileLint                      静态代码检查\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("38")]),e._v("、copyDebugLint                    \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("39")]),e._v("、checkDebugManifest               检查 release下的manifest 在 preDebugBuild 之后执行 依赖preDebugBuild \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("40")]),e._v("、prepareDebugDependencies     debug下  加载 远端的依赖   加载 所有的需要从远端下载的依赖\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("41")]),e._v("、compileDebugAidl             编译debug环境下的 AIDL文件   依赖prepareDebugDependencies   在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("aidl"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("42")]),e._v("、compileDebugRenderscript     编译 debug环境下的渲染脚本   依赖prepareDebugDependencies  在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("rs"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("43")]),e._v("、generateDebugBuildConfig     会生成 debug下的 资源和源码 包括"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BuildConfig")]),e._v("  在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("generate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("buildConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug  依赖checkDebugManifest\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("44")]),e._v("、generateDebugAssets              准备 debug下的 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Assets")]),e._v("文件  \n \n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("45")]),e._v("、mergeDebugAssets             生成 debug下的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Assets")]),e._v("文件 在 build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("intermediates"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug下"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  和 merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("xml文件 在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("intermediates"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("mergeAssets"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug下   依赖"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ReleaseDependencies")]),e._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("46")]),e._v("、generateDebugResValues           准备resource的 values文件  件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("47")]),e._v("、generateDebugResources           准备 资源文件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("48")]),e._v("、mergeDebugResources              生成资源文件 在generateDebugResources后执行  在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("res"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug下  和 merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("xml在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("intermediates"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("mergeResources"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("49")]),e._v("、processDebugManifest         依赖prepareReleaseDependencies  生成 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AndroidManifest")]),e._v("文件 在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("incremental"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("manifest"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("full"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("release\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("、processDebugResources            生成resources"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ap_    在 build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("intermediates"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("resources下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("51")]),e._v("、generateDebugSources         生成"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("R")]),e._v("文件  在build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("generate"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("debug下\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("52")]),e._v("、processDebugJavaRes              生成"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Java")]),e._v("资源文件 \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("53")]),e._v("、compileDebugJavaWithJavac            使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Javac")]),e._v("编译"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Java")]),e._v("代码\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("54")]),e._v("、extractDebugAnnotations              \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("55")]),e._v("、mergeDebugProguardFiles       生成混淆文件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("56")]),e._v("、compileDebugNdk              编译NDK\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("57")]),e._v("、packageDebugJniLibs              打包本地依赖包\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("58")]),e._v("、packageDebugRenderscript    打包渲染脚本\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("59")]),e._v("、packageDebugResources        debug  打包资源文件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v("、proguardDebug                混淆\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("61")]),e._v("、bundleDebug\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("62")]),e._v("、compileDebugSources          编译java源码\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("63")]),e._v("、assembleDebug                编译创建"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Jar")]),e._v("包\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("、copyReleaseLint\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("65")]),e._v("、extractReleaseAnnotations\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("66")]),e._v("、mergeReleaseProguardFiles        生成混淆文件 在buil"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("outputs"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("67")]),e._v("、compileReleaseNdk\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("68")]),e._v("、packageReleaseJniLibs\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("69")]),e._v("、packageReleaseRenderscript\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("70")]),e._v("、packageReleaseResources\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("、bundleRelease\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("81")]),e._v("、compileReleaseSources        编译\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("82")]),e._v("、assembleRelease              编译创建"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Jar")]),e._v("包\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("83")]),e._v("、assemble     包含了项目中的所有打包相关的任务，比如java项目中打的jar包，"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Android")]),e._v("项目中打的apk\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("84")]),e._v("、lint         android静态代码检查\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("85")]),e._v("、prepareDebugUnitTestDependencies    加载单元测试以来的远程包\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("85")]),e._v("、processDebugUnitTestJavaRes          生成单元测试\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("86")]),e._v("、compileDebugUnitTestJavaWithJavac        使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Javac")]),e._v("编译"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Java")]),e._v("单元测试代码\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("87")]),e._v("、compileDebugUnitTestSources              编译单元测试 源码\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("88")]),e._v("、mockableAndroidJar\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("89")]),e._v("、assembleDebugUnitTest                    编译打包\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("90")]),e._v("、testDebugUnitTestPicked                  测试UT\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("91")]),e._v("、prepareReleaseUnitTestDependencies       加载 UT的依赖\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("92")]),e._v("、processReleaseUnitTestJavaRes            加载UT需要的资源文件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("93")]),e._v("、compileReleaseUnitTestJavaWithJavac      使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Javac")]),e._v("编译"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Java")]),e._v("单元测试代码\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("94")]),e._v("、compileReleaseUnitTestSources            编译单元测试 源码\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("95")]),e._v("、assembleReleaseUnitTest                  编译打包\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("96")]),e._v("、testReleaseUnitTestPicked                测试UT\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("97")]),e._v("、test         包含了所有的测试任务\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("98")]),e._v("、check       包含了项目中所有验证相关的任务\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("99")]),e._v("、"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("build       包含所有的 build任务\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("、uploadArchivesUploading"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("  上传\n\n")])])]),a("h3",{attrs:{id:"二、开源项目设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、开源项目设计"}},[e._v("#")]),e._v(" 二、开源项目设计")]),e._v(" "),a("h4",{attrs:{id:"_1-arouter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-arouter"}},[e._v("#")]),e._v(" 1. Arouter")]),e._v(" "),a("h4",{attrs:{id:"_2-retrofit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-retrofit"}},[e._v("#")]),e._v(" 2. Retrofit")])])}),[],!1,null,null,null);s.default=r.exports}}]);