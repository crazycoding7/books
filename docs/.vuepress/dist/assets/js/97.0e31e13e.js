(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{467:function(t,a,s){"use strict";s.r(a);var r=s(42),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"qq侧滑删除实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qq侧滑删除实现"}},[t._v("#")]),t._v(" QQ侧滑删除实现")]),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("h2",{attrs:{id:"一、设计思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、设计思路"}},[t._v("#")]),t._v(" 一、设计思路")]),t._v(" "),s("h3",{attrs:{id:"_1-自定义实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-自定义实现"}},[t._v("#")]),t._v(" 1. 自定义实现")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 自定义View继承Linearout(水平布局)； \n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 初始化；\n\t高度固定(100dp)；\n\t三个显示区域宽度8：1：1(屏幕占比)；\n\t状态类型： 1：默认状态(一个view)  2： 拖动状态 3：全显状态(三个View)；\n\tx,y:Action_Down时的坐标；\n\t显示阈值：20px;\n\t固定显示阈值：200px;\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" onDraw方法;\n\t根据状态和view坐标 绘制一个或三个View\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" onTouchEvent()方法\n\tAction_Down:记录按下坐标；\n\tAction_Move:与Down计算距离，大于阈值慢慢绘制其余view(第一个view的右下角坐标不停改变)；\n\tAction_Up:\n\t  如果大于固定阈值，重新绘制三个View；\n\t  如果小于固定阈值，恢复默认；\n\t  如果坐标在对应View的区域内，调用对应onClick事件；\n")])])]),s("h3",{attrs:{id:"_2-drawerlayout实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-drawerlayout实现"}},[t._v("#")]),t._v(" 2. DrawerLayout实现")]),t._v(" "),s("blockquote",[s("p",[t._v("自定义ViewGroup，根据layout_gravity判断子布局是否是侧滑布局。")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("androidx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawerlayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("DrawerLayout")]),t._v(" xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/dl_view"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50dp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 显示内容 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RelativeLayout")]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/rl_item"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50dp"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("gravity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center_vertical"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("orientation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertical"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("paddingLeft"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"16dp"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("paddingRight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"16dp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/tv_name"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap_content"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("maxWidth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"170dp"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-11"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("textColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@color/color_333333"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("textSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"14sp"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RelativeLayout")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 侧滑内容 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("             \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinearLayout")]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200dp"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50dp"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_gravity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/top"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0dp"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_weight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#FFEB3B"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("gravity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"置顶"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("textSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26sp"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/del"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0dp"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"match_parent"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("layout_weight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#F10001"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("gravity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"删除"')]),t._v("\n            android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("textSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26sp"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinearLayout")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("          \n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("androidx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawerlayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("DrawerLayout")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n              \n              \nholder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dlLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDrawerListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DrawerLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DrawerListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDrawerSlide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" drawerView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" slideOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//DrawerLayout滑动监听")]),t._v("\n                holder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rlView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTranslationX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("drawerView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMeasuredWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" slideOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDrawerOpened")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" drawerView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDrawerClosed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" drawerView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDrawerStateChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              \n")])])]),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=n.exports}}]);