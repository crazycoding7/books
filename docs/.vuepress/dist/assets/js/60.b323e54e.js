(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{420:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ui进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui进阶"}},[t._v("#")]),t._v(" UI进阶")]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("h4",{attrs:{id:"_1-ui绘制流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-ui绘制流程"}},[t._v("#")]),t._v(" 1. UI绘制流程？")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"images/ui-design.jpg"}}),t._v(" "),a("h4",{attrs:{id:"_2-getwidth和getmeasurewidth区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-getwidth和getmeasurewidth区别"}},[t._v("#")]),t._v(" 2. getWidth和getMeasureWidth区别？")]),t._v(" "),a("h5",{attrs:{id:"_1-赋值时机不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-赋值时机不同"}},[t._v("#")]),t._v(" ①：赋值时机不同")]),t._v(" "),a("p",[t._v("getMeasuredWidth是当view绘制流程中的measure流程结束之后有值\ngetWidth是当view的绘制流程中的layout流程结束之后有值。")]),t._v(" "),a("h5",{attrs:{id:"_2-数值含义不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数值含义不同"}},[t._v("#")]),t._v(" ②：数值含义不同")]),t._v(" "),a("p",[t._v("getMeasuredWidth获取的是view的测量宽度\ngetWidth获取的是view的实际宽度\n正常情况下这个两个数值都是相同的，手动设置layout值。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强行改变getWidth(辟谣：View大于屏幕还是相等的)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变传入的顶点位置参数")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l，t，r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("，b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-事件分发流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件分发流程"}},[t._v("#")]),t._v(" 3. 事件分发流程？")]),t._v(" "),a("h4",{attrs:{id:"_4-滑动事件冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-滑动事件冲突"}},[t._v("#")]),t._v(" 4. 滑动事件冲突？")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主View判断事件是否需要继续传递下去")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onInterceptTouchEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRawY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRawX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" resume "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_DOWN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发生down事件时,记录y坐标")]),t._v("\n                mLastMotionY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                mLastMotionX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                resume "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_MOVE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// deltaY > 0 是向下运动,< 0是向上运动")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" deltaY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" mLastMotionY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" deleaX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" mLastMotionX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 横向滑动距离大于纵向时，无须拦截这次滑动事件，滑动事件会传递到下一层的view，也就是这里的轮播图控件，这样横向滑动轮播图的时候，PullToRefreshView就不会有下拉的动作了。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deleaX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deltaY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    resume "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前正处于滑动")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isRefreshViewScroll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deltaY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        resume "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MotionEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_CANCEL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_5-自定义仿qq拖拽小红点效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-自定义仿qq拖拽小红点效果"}},[t._v("#")]),t._v(" 5. 自定义仿QQ拖拽小红点效果")]),t._v(" "),a("p",[t._v("​\tonTouchEvent、WindowManger浮窗拖拽、贝塞尔曲线。")]),t._v(" "),a("h4",{attrs:{id:"_6-onmeasure-研究"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-onmeasure-研究"}},[t._v("#")]),t._v(" 6. onMeasure()研究")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_42477338/article/details/105979515",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_7-onlayout-研究"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-onlayout-研究"}},[t._v("#")]),t._v(" 7. onLayout()研究")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/da4e77fd0cfe",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_8-动画实现总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-动画实现总结"}},[t._v("#")]),t._v(" 8. 动画实现总结？")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/420629118c10",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);