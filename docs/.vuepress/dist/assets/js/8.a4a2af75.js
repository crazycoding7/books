(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(t,s,a){t.exports=a.p+"assets/img/ui_event_dispatch.1a3c0fdb.png"},444:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_2面试题-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2面试题-android"}},[t._v("#")]),t._v(" 2面试题-Android")]),t._v(" "),n("p",[t._v("[TOC]")]),t._v(" "),n("h2",{attrs:{id:"一、ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、ui"}},[t._v("#")]),t._v(" 一、UI")]),t._v(" "),n("h4",{attrs:{id:"_1-launcher启动流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-launcher启动流程"}},[t._v("#")]),t._v(" 1. Launcher启动流程？")]),t._v(" "),n("blockquote",[n("p",[t._v("Launcher本质上是一个App(HomeAPP)，系统启动后第一个启动，清单文件类型为"),n("code",[t._v("android.intent.category.LAUNCHER")]),t._v(".")])]),t._v(" "),n("ol",[n("li",[t._v("系统启动时，Zygote进程fork出SystemServer进程，执行SystemServer.java类；")]),t._v(" "),n("li",[t._v("SystemServer会启动AMS、PMS以及其他service;")]),t._v(" "),n("li",[t._v("PMS解析本地应用，并把数据信息保存起来(包括launcher app)；")]),t._v(" "),n("li",[t._v("AMS触发systemReady(...)方法，其中执行了startHomeActivity(...);")]),t._v(" "),n("li",[t._v("构建home intent,然后通过PMS查找到一个符合HomeIntent的Activity；")]),t._v(" "),n("li",[t._v("启动Acitvity。")])]),t._v(" "),n("h4",{attrs:{id:"_2-activity启动流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-activity启动流程"}},[t._v("#")]),t._v(" 2. Activity启动流程？")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("大致流程：(背诵)")])]),t._v(" "),n("p",[t._v("单击桌面图标 -> 发送请求到AMS-> Zygote fork新进程->ActivityThread执行main方法(handler loop)")]),t._v(" "),n("p",[t._v("->通过attach函数创建ApplicationThread于AMS通信(server端)"),n("code",[t._v("mgr.attachApplication(mAppThread);")])]),t._v(" "),n("p",[t._v("->AMS发送bindApplication message -> create application(onCreate)")]),t._v(" "),n("p",[t._v("->AMS发送 launcherActivity message -> Activity attach创建PhoneWindow对象(包含空DecorViewFL)")]),t._v(" "),n("p",[t._v("=》在onCreate的"),n("code",[t._v("setContentView(layoutId)")]),t._v("中将布局加载到DecorView的content中")]),t._v(" "),n("p",[t._v("=》在onResume中将DecorView添加到WindowManager中"),n("code",[t._v("wm.addView(mDecor, getWindow().getAttributes());")])]),t._v(" "),n("p",[t._v("=》在WindowManagerGlobal中分别保存view，和新创建的ViewRootImpl，然后执行root.setView进行遍历绘制。")]),t._v(" "),n("p",[t._v("=>ViewRoot执行测量绘制、然后与WMS通信提供窗口信息或接受窗口事件到view。")])]),t._v(" "),n("ul",[n("li",[t._v("例子\n"),n("ol",[n("li",[t._v("单击桌面淘宝图标，Launcher通知AMS启动淘宝APP(清单文件中的入口类);")]),t._v(" "),n("li",[t._v("AMS记录要启动的Activity信息，并且通知Launcher进入pause状态;")]),t._v(" "),n("li",[t._v("Launcher进入pause状态后，通知AMS已经paused了，可以启动淘宝了;")]),t._v(" "),n("li",[t._v("淘宝app未开启过，所以AMS启动新的进程，并且在新进程中创建ActivityThread对象，执行其中的main函数方法;")]),t._v(" "),n("li",[t._v("淘宝app主线程启动完毕后通知AMS，并传入applicationThread以便通讯;")]),t._v(" "),n("li",[t._v("AMS通知淘宝绑定Application并启动MainActivity;")]),t._v(" "),n("li",[t._v("淘宝启动MainActivitiy，并且创建和关联Context,最后调用onCreate方法。")])])])]),t._v(" "),n("h4",{attrs:{id:"_3-ui绘制流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-ui绘制流程"}},[t._v("#")]),t._v(" 3. UI绘制流程？")]),t._v(" "),n("ol",[n("li",[t._v("setContentView会创建一个DocorView并将自定义的layout添加到DocorView；")]),t._v(" "),n("li",[t._v("onResume时候会将DocorView添加到PhoneWindow上，并执行performTraversals开始绘制；")]),t._v(" "),n("li",[t._v("onMeasure测量("),n("code",[t._v("从顶层父View到子View递归调用measure方法，measure方法又回调OnMeasure")]),t._v(")；")]),t._v(" "),n("li",[t._v("onLayout布局("),n("code",[t._v("从顶层父View向子View的递归调用view.layout方法的过程，即父View根据上一步measure子View所得到的布局大小和布局参数，将子View放在合适的位置上")]),t._v(")；")]),t._v(" "),n("li",[t._v("onDraw绘制("),n("code",[t._v("ViewRoot创建一个Canvas对象，然后调用OnDraw()。六个步骤：①、绘制视图的背景；②、保存画布的图层（Layer）；③、绘制View的内容；④、绘制View子视图，如果没有就不用；⑤、还原图层（Layer）；⑥、绘制滚动条。")]),t._v(")；")]),t._v(" "),n("li",[t._v("然后通过Surface将Canvas绘制到缓存区，每16毫秒，SurfaceFlinger进程合成多个Surface后调用opengl进行栅格化和最终显示。")])]),t._v(" "),n("p",[t._v("问题：")]),t._v(" "),n("ol",[n("li",[t._v("MeasureSpec的三种模式和对子View的影响？")])]),t._v(" "),n("h4",{attrs:{id:"_4-事件分发机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-事件分发机制"}},[t._v("#")]),t._v(" 4. 事件分发机制？")]),t._v(" "),n("p",[t._v("首先应该搞清楚两个问题：事件分发机制分发的是什么？怎么进行分发？")]),t._v(" "),n("p",[t._v("分发的是MotionEvent事件了，因而我们讨论的问题就成了当MotionEvent事件生成之后，事件是怎么传递到某一个View控件上面并且得到处理的过程；")]),t._v(" "),n("p",[t._v("​\tandroid事件产生后的传递过程是从"),n("code",[t._v("Activity---\x3eWindow---\x3eView的，即隧道式传递")]),t._v("，而View又分为不包含子View的View以及包含子View的ViewGroup，事件产生之后首先传递到Activity上面，而Activity接着会传递到PhoneWindow上，PhoneWindow会传递给RootView，而RootView其实就是DecorView了，接下来便是从DecorView到View上的分发过程了，具体就可以分成ViewGroup和View的分发两种情况了；")]),t._v(" "),n("p",[t._v("对于ViewGroup而言，当事件分发到当前ViewGroup上面的时候，首先会调用他的dispatchTouchEvent方法，在dispatchTouchEvent方法里面会调用onInterceptTouchEvent来判断是否要拦截当前事件，如果要拦截的话，就会调用ViewGroup自己的onTouchEvent方法了，如果onInterceptTouchEvent返回false的话表示不拦截当前事件，那么事件将会继续往当前ViewGroup的子View上面传递了，如果他的子View是ViewGroup的话，则重复ViewGroup事件分发过程，如果子View就是View的话，则转到下面的View分发过程；")]),t._v(" "),n("p",[t._v("对于View而言，事件传递过来首先当然也是执行他的dispatchTouchEvent方法了，如果我们为当前View设置了onTouchListener监听器的话，首先就会执行他的回调方法onTouch了，这个方法的返回值将决定事件是否要继续传递下去了，如果返回false的话，表示事件没有被消费，还会继续传递下去，如果返回true的话，表示事件已经被消费了，不再需要向下传递了；如果返回false，那么将会执行当前View的onTouchEvent方法，如果我们为当前View设置了onLongClickListener监听器的话，则首先会执行他的回调方法onLongClick，和onTouch方法类似，如果该方法返回true表示事件被消费，不会继续向下传递，返回false的话，事件会继续向下传递，为了分析，我们假定返回false，如果我们设置了onClickListener监听器的话，则会执行他的回调方法onClick，该方法是没有返回值的，所以也是我们事件分发机制中最后执行的方法了；可以注意到的一点就是只要你的当前View是clickable或者longclickable的，View的onTouchEvent方法默认都会返回true，也就是说对于事件传递到View上来说，系统默认是由View来消费事件的，但是ViewGroup就不是这样了；")]),t._v(" "),n("p",[t._v("上面的事件分发过程只是正常情况下的，如果有这样一种情况，比如事件传递到最里层的View之后，调用该View的onTouchEvent方法返回了false，那么这时候事件将通过冒泡式的方式向他的父View传递，调用它父View的onTouchEvent方法，如果正好他的父View的onTouchEvent方法也返回false的话，这个时候事件最终将会传递到Activity的onTouchEvent方法了，也就是最终就只能由Activity自己来处理了；")]),t._v(" "),n("img",{staticStyle:{zoom:"60%"},attrs:{src:a(358)}}),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// activity嵌套自定义View，view不处理事件，不可点击")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. down能从最外层向内传递，之后有传出到activity. 2. 同一个事件序列就不在传递给子View了 ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" dispatchTouchEvent button "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" down button\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子View设置为Clickable(子View消耗每个事件)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" dispatchTouchEvent button "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" down button\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" dispatchTouchEvent button "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" move button\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" dispatchTouchEvent button "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" move button\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" dispatchTouchEvent button "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" move button\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" dispatchTouchEvent button "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" move button\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyEvent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestUIEventActivity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" dispatchTouchEvent button "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("You")]),t._v(" up button  \n")])])]),n("p",[n("strong",[t._v("问题：")])]),t._v(" "),n("ol",[n("li",[t._v("一旦一个ViewGroup决定拦截事件，那么这个事件序列剩余的部分将不再会由该ViewGroup的子View去处理了，即事件将在此ViewGroup层停止向下传递，同时随后的事件序列将不再会调用onInterceptTouchEvent方法了(down 返回false，move返回true，up返回false，子view只处理down事件)；")]),t._v(" "),n("li",[t._v("触摸事件传递顺序：dispatchTouchEvent–>>onInterceptT->>onTouch–>>onTouchEvent–>>onClick。")]),t._v(" "),n("li",[t._v("onTouch和onTouchEvent区别：两个方法先后在dispatchTouchEvent中调用，只有给View设置了触摸事件View#setOnTouchListener才会执行onTouch方法；onTouch方法的返回值决定是否执行onTouchEvent方法。")]),t._v(" "),n("li",[t._v("手势操作执行的顺序为ACTION_DOWN,ACTION_MOVE,ACTION_UP，只有dispatchTouchEvent方法返回true值时后面的手势才会被执行。")]),t._v(" "),n("li",[t._v("onClick方法的调用是在onTouchEvent的ACTION_UP手势里面执行的，也就是当手势抬起时，手势操作结束才会触发onClick方法的调用。")]),t._v(" "),n("li",[t._v("如果说除Activity之外的View都没有消费掉DOWN事件的话，那么事件将不再会传递到Activity里面的子View了，将直接由Activity自己调用自己的onTouchEvent方法来处理了。")]),t._v(" "),n("li",[t._v("如果一个View开始处理事件但是没有消费掉DOWN事件，那么这个事件序列随后的事件将不再由该View来处理，通俗点讲就是你自己没能力就别瞎BB，要不以后的事件就都不给你了；")])]),t._v(" "),n("h4",{attrs:{id:"_5-手势冲突如何解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-手势冲突如何解决"}},[t._v("#")]),t._v(" 5. 手势冲突如何解决？")]),t._v(" "),n("p",[t._v("冲突类型： 1. 外部和内部View滑动方向一致；2. 外部和内部滑动方向不一致。")]),t._v(" "),n("p",[t._v("一般解决滑动冲突利用的是事件分发机制：")]),t._v(" "),n("p",[n("strong",[t._v("外部拦截法：")])]),t._v(" "),n("p",[t._v("​\t父容器通过修改onInterceptTouchEvent方法确定是否拦截事件，拦截则自己处理，不拦截则给子View处理(需要注意的是如果想要让子View能够收到事件，我们需要在onInterceptTouchEvent方法里面判断如果是DOWN事件的话，返回false，这样后续的MOVE以及UP事件才有机会传递到子View上面)。")]),t._v(" "),n("p",[n("strong",[t._v("内部拦截法：")])]),t._v(" "),n("p",[t._v("实现思路是事件从父容器传递到子View上面，父容器不做任何干预性的措施，所有的事件都会传递到子View上面，如果子元素需要改事件，那么就由子元素消耗掉了，该事件也就不会回传了，如果子元素不需要该事件，那么他就会回传给父容器来处理了；具体实现措施需要借助于requestDisallowInterceptTouchEvent方法，该方法用来告诉父容器要不要拦截当前事件，为了配合子View能够调用这个方法成功，父容器必须默认能够拦截除了DOWN事件以外的事件，为什么要除了DOWN事件以外呢？因为如果一旦父容器拦截了DOWN事件，那么后续事件将不再会传递到子元素了，内部拦截法也就失去作用了。")]),t._v(" "),n("p",[n("strong",[t._v("问题：")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("scrollview 包含recycleView有何异常？")]),t._v(" "),n("p",[t._v("ListView只显示第一行数据.")]),t._v(" "),n("p",[t._v("原因是：当ListView被ScrollView嵌套时，ListView使用的测量模式是ScrollView传入的MeasureSpec.UNSPECIFIED，默认只是一行的高度。")]),t._v(" "),n("p",[t._v("解决办法：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMeasure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" widthMeasureSpec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" heightMeasureSpec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newHeightMeasureSpec "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MeasureSpec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeMeasureSpec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设计一个较大的值和AT_MOST模式")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MeasureSpec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AT_MOST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMeasure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widthMeasureSpec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newHeightMeasureSpec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//再调用原方法测量")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("ListView高度固定后无法触发滑动事件.")]),t._v(" "),n("p",[t._v("原因：当对listview的高度设置为固定值（例200dp）时，listview的高度是可以直接显示出来的。但嵌套在一起后ScrollView中的ListView就没法上下滑动了，事件先被ScrollView响应了。")]),t._v(" "),n("p",[t._v("解决方法：当ListView自身接收到的滑动事件时，使ScrollView取消拦截。ListView区域内的滑动事件由自己处理，ListView区域外滑动事件由外层ScrollView处理。可以系统自带的API来实现：requestDisallowInterceptTouchEvent这一方法。")]),t._v(" "),n("p",[n("strong",[t._v("解决方法一")]),t._v("：在这里我们自定义ListView来重写ListView的dispatchTouchEvent函数：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_DOWN"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_MOVE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestDisallowInterceptTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_UP"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_CANCEL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestDisallowInterceptTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchTouchEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),n("h4",{attrs:{id:"_6-动画实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-动画实现原理"}},[t._v("#")]),t._v(" 6. 动画实现原理？")]),t._v(" "),n("blockquote",[n("p",[t._v("Choreographer以每秒60帧的时间，接受垂直信号。")])]),t._v(" "),n("p",[t._v("帧动画、补间动画、属性动画。")]),t._v(" "),n("p",[t._v("补间动画： Android 动画就是通过 ParentView 来不断调整 ChildView 的画布坐标系来实现的(然后反复调用invalidate重绘子View)。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fooClick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animation")]),t._v(" animation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" last "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n          \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 系统会一每秒60帧的频率不停调用该方法，绘制view")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyTransformation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" interpolatedTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transformation")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" curr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" delta "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" last"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                last "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testme"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delta  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMatrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postTranslate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        animation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDuration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        mBtnTest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startAnimation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"二、framework"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、framework"}},[t._v("#")]),t._v(" 二、Framework")]),t._v(" "),n("h4",{attrs:{id:"_1-android系统三大进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-android系统三大进程"}},[t._v("#")]),t._v(" 1. Android系统三大进程？")]),t._v(" "),n("p",[t._v("init进程、zygote进程、systemServer进程。")]),t._v(" "),n("h4",{attrs:{id:"_2-handler机制和handler-postdelayed实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-handler机制和handler-postdelayed实现"}},[t._v("#")]),t._v(" 2. Handler机制和Handler.postDelayed实现？")])])}),[],!1,null,null,null);s.default=e.exports}}]);