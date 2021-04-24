## Android 高级

[TOC]

### 一、概念理解

#### 1. 响应式编程(react programming)理解

[参考](https://www.jianshu.com/p/c95e29854cb1/)

**Ks题目**

（可多选）关于响应式编程(react programming)描述正确的是：B C
（A）使用 facebook 开源的 react native 写代码，实现跨平台的方案
（B）响应式编程是使用异步数据流进行编程
（C）RxJava就是一种用Java语言实现的响应式编程
（D）LiveData、ViewModel是实现响应式编程的方案之一

**概念**

**总结起来，响应式编程（reactive programming）是一种基于数据流（data stream）和变化传递（propagation of change）的声明式（declarative）的编程范式。响应式编程是一种通过异步和数据流来构建事物关系的编程模式。**

响应式编程的“变化传递”就相当于果汁流水线的管道；在入口放进橙子，出来的就是橙汁；放西瓜，出来的就是西瓜汁，橙子和西瓜、以及机器中的果肉果汁以及残渣等，都是流动的“数据流”；管道的图纸是用“声明式”的语言表示的。

这种编程范式如何让Web应用更加“reactive”呢？

我们设想这样一种场景，我们从底层数据库驱动，经过持久层、服务层、MVC层中的model，到用户的前端界面的元素，全部都采用声明式的编程范式，从而搭建一条能够传递变化的管道，这样我们只要更新一下数据库中的数据，用户的界面上就相应的发生变化，岂不美哉？尤其重要的是，一处发生变化，我们不需要各种命令式的调用来传递这种变化，而是由搭建好的“流水线”自动传递。

这种场景用在哪呢？比如一个日志监控系统，我们的前端页面将不再需要通过“命令式”的轮询的方式不断向服务器请求数据然后进行更新，而是在建立好通道之后，数据流从系统源源不断流向页面，从而展现实时的指标变化曲线；再比如一个社交平台，朋友的动态、点赞和留言不是手动刷出来的，而是当后台数据变化的时候自动体现到界面上的。

#### 2. Rxjava LiveData思考

[参考](https://www.sohu.com/a/279237108_659256)

#### 3. 协程思考

[参考](https://blog.csdn.net/zheng199172/article/details/88800275)

[quasar](https://www.cnblogs.com/ConstXiong/p/11991459.html)

#### 4. Gradle构建流程

```java

1.clean  清理工程  删除build文件夹

// ************** Configuration on demand is an incubating feature  *******

2、preBuild          每个module 都会执行preBuild   准备配置文件

3、preReleaseBuild   准备release configuration    在 preBuild 之后执行 会依赖preBuild

4、checkReleaseManifest 检查 release下的manifest 在 preReleaseBuild 之后执行 依赖preReleaseBuild 

5、preDebugAndroidTestBuild          准备debug下的Test   在preBuild后执行 依赖preBuild

6、preDebugBuild                 准备 debug configuration  在preBuild后执行 依赖preBuild

7、preDebugUnitTestBuild             准备 debug下的单元测试构建  在preBuild后执行 依赖preBuild

8、preReleaseUnitTestBuild           准备 release下的单元测试构建  在preBuild后执行 依赖preBuild

   // ***************** 以上  build 文件夹不存在 ***********************************
   //  ****************  接下来是对依赖的包 进行下载 *********************在build/incremental/exploded-aar下

9、prepareComAndroidSupportSupportV42311Library       生成 Android SupportV4.23.1库支持 在build/incremental/exploded-aar下

10、prepareComNdAndroidSmartcanCommonsUtilAar1205SmartcanReleaseLibrary   生成 smartcan.commons.util-aar.1.2.0.5.smartcan.release

11、prepareComNdAndroidSmartcanDatalayerAar1205SmartcanReleaseLibrary        生成 smartcan.commons.datalayer-aar.1.2.0.5.smartcan.release

12、prepareComNdAndroidSmartcanDatatransferAar1205SmartcanReleaseLibrary     生成 smartcan.commons.datatransfer-aar.1.2.0.5.smartcan.release

13、prepareComNdAndroidSmartcanFrameworkAar1205SmartcanReleaseLibrary        生成 smartcan.commons.framnework-aar.1.2.0.5.smartcan.release

14、prepareComNdAndroidSmartcanNetworkAar1205SmartcanReleaseLibrary          生成 smartcan.commons.network-aar.1.2.0.5.smartcan.release

15、prepareComNdAndroidSmartcanSmartcanCoreAar1205SmartcanReleaseLibrary 生成 smartcan.commons.smartcan.core-aar.1.2.0.5.smartcan.release

16、prepareComNdAndroidSmartcanSmartcanDatacollectionAar1205SmartcanReleaseLibrary  生成 smartcan.commons.datacollection-aar.1.2.0.5.smartcan.release

17、prepareComNdSdpAndroidProcesscheck108Library                         生成  android.process.check.1.0.8 

18、prepareReleaseDependencies        加载 远端的依赖   加载 所有的需要从远端下载的依赖   

19、compileReleaseAidl               编译release环境下的 AIDL文件   依赖prepareDebugDependencies   在build/incremental/aidl/release下

20、compileReleaseRenderscript       编译 release环境下的渲染脚本， Renderscript用来进行高性能计算，是一种类C脚本语言 依赖prepareDebugDependencies  在build/incremental/rs/release下

21、generateReleaseBuildConfig   会生成 releasse下的 资源和源码 包括BuildConfig  在build/generate/source/buildConfig/release  依赖checkReleaseManifest

22、generateReleaseAssets            生成 release下的 Assets文件       但没有完全生成个  算是准备

23、mergeReleaseAssets               生成 debug下的Assets文件 在 build/intermediates/assets/release下,  和 merge.xml文件 在build/intermediates/incremental/mergeAssets/release下   依赖ReleaseDependencies 

24、generateReleaseResValues     准备resource的 values文件  

25、generateReleaseResources     准备 资源文件 

26、mergeReleaseResources             release下的 生成Resource文件 在build/incremental/res/release下 和 merge.xml 在build/intermediates/incremental/mergeResources/release下

27、processReleaseManifest           依赖prepareReleaseDependencies  生成 AndroidManifest文件 在build/incremental/manifest/full/release

28、processReleaseResources          生成resources-release.ap_    在 build/intermediates/resources下

29、generateReleaseSources           生成R文件  在build/generate/source/r/debug下 

30、processReleaseJavaRes            

31、compileReleaseJavaWithJavac      使用Javac编译Java代码

32、proguardRelease                  生成 混淆文件 运行混淆规则

33、androidJavadocsPicked

34、copyMappingTask                  复制 mapping文件  

35、androidJavadocsJar               生成 Javadocs的Jar文件

36、androidSourcesJar                生成 Java源码的 Jar文件

37、compileLint                      静态代码检查

38、copyDebugLint                    

39、checkDebugManifest               检查 release下的manifest 在 preDebugBuild 之后执行 依赖preDebugBuild 

40、prepareDebugDependencies     debug下  加载 远端的依赖   加载 所有的需要从远端下载的依赖

41、compileDebugAidl             编译debug环境下的 AIDL文件   依赖prepareDebugDependencies   在build/incremental/aidl/debug下

42、compileDebugRenderscript     编译 debug环境下的渲染脚本   依赖prepareDebugDependencies  在build/incremental/rs/debug下

43、generateDebugBuildConfig     会生成 debug下的 资源和源码 包括BuildConfig  在build/generate/source/buildConfig/debug  依赖checkDebugManifest

44、generateDebugAssets              准备 debug下的 Assets文件  
 
45、mergeDebugAssets             生成 debug下的Assets文件 在 build/intermediates/assets/debug下,  和 merge.xml文件 在build/intermediates/incremental/mergeAssets/debug下   依赖ReleaseDependencies  

46、generateDebugResValues           准备resource的 values文件  件

47、generateDebugResources           准备 资源文件

48、mergeDebugResources              生成资源文件 在generateDebugResources后执行  在build/incremental/res/debug下  和 merge.xml在build/intermediates/incremental/mergeResources/debug下

49、processDebugManifest         依赖prepareReleaseDependencies  生成 AndroidManifest文件 在build/incremental/manifest/full/release

50、processDebugResources            生成resources-debug.ap_    在 build/intermediates/resources下

51、generateDebugSources         生成R文件  在build/generate/source/r/debug下

52、processDebugJavaRes              生成Java资源文件 

53、compileDebugJavaWithJavac            使用Javac编译Java代码

54、extractDebugAnnotations              

55、mergeDebugProguardFiles       生成混淆文件

56、compileDebugNdk              编译NDK

57、packageDebugJniLibs              打包本地依赖包

58、packageDebugRenderscript    打包渲染脚本

59、packageDebugResources        debug  打包资源文件

60、proguardDebug                混淆

61、bundleDebug

62、compileDebugSources          编译java源码

63、assembleDebug                编译创建Jar包

64、copyReleaseLint

65、extractReleaseAnnotations

66、mergeReleaseProguardFiles        生成混淆文件 在buil/outputs/

67、compileReleaseNdk

68、packageReleaseJniLibs

69、packageReleaseRenderscript

70、packageReleaseResources

80、bundleRelease

81、compileReleaseSources        编译

82、assembleRelease              编译创建Jar包

83、assemble     包含了项目中的所有打包相关的任务，比如java项目中打的jar包，Android项目中打的apk

84、lint         android静态代码检查

85、prepareDebugUnitTestDependencies    加载单元测试以来的远程包

85、processDebugUnitTestJavaRes          生成单元测试

86、compileDebugUnitTestJavaWithJavac        使用Javac编译Java单元测试代码

87、compileDebugUnitTestSources              编译单元测试 源码

88、mockableAndroidJar

89、assembleDebugUnitTest                    编译打包

90、testDebugUnitTestPicked                  测试UT

91、prepareReleaseUnitTestDependencies       加载 UT的依赖

92、processReleaseUnitTestJavaRes            加载UT需要的资源文件

93、compileReleaseUnitTestJavaWithJavac      使用Javac编译Java单元测试代码

94、compileReleaseUnitTestSources            编译单元测试 源码

95、assembleReleaseUnitTest                  编译打包

96、testReleaseUnitTestPicked                测试UT

97、test         包含了所有的测试任务

98、check       包含了项目中所有验证相关的任务

99、:build       包含所有的 build任务

100、uploadArchivesUploading:  上传

```



### 二、开源项目设计

#### 1. Arouter



#### 2. Retrofit