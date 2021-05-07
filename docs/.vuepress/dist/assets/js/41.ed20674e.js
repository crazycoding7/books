(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{402:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"android开源项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android开源项目"}},[t._v("#")]),t._v(" Android开源项目")]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("blockquote",[a("p",[t._v("Android 知识总结。")])]),t._v(" "),a("h4",{attrs:{id:"_1-listview原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-listview原理"}},[t._v("#")]),t._v(" 1. ListView原理")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_15827013/article/details/97809431",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考1"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/guolin_blog/article/details/44996879",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考2"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/0ec7b56d974e",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考3"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("组成部分")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("列表控件")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/listview_class.png",alt:"listview_calss"}})]),t._v(" "),a("p",[t._v("AbsListView继承自AdapterView，泛型参数为ListAdapter，一个列表adapter，该ViewGroup有一套view的回收复用机制供子类使用，专门负责对多数据多view的控件的展示优化；")]),t._v(" "),a("p",[t._v("ListView与GridView都继承自AbsListView，使用了其父类的回收机制，并重写相应的布局方法来实现各自的布局；")]),t._v(" "),a("p",[t._v("ExpandableListView继承了ListView，只是对数据的展示划分的更细一层，分为section和child。")])]),t._v(" "),a("li",[a("p",[t._v("Adapter适配器")]),t._v(" "),a("blockquote",[a("p",[t._v("避免列表控件直接与各种数据源打交道而变得复杂；Adapter为数据源定义了一个通用的实现接口，是控件通过指定的方法完成对数据的监控和使用，而不用关系数据是什么类型。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"images/listview_adapter.png",alt:"listview_adapter"}})])]),t._v(" "),a("li",[a("p",[t._v("RecycleBin回收机制")])])]),t._v(" "),a("blockquote",[a("p",[t._v("RecycleBin是AbsListView的一个内部类，都是在内部维护一个缓存池，回收划出列表的item，添加给将要进入列表的item。ListView内部是两级缓存，分别是mActiveViews和mScrapViews.而RecycleView内部有四级缓存。")])]),t._v(" "),a("ul",[a("li",[t._v("工作原理")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RecycleBin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1. 用来保存item的一个临时数组，主要用在listView第二次onLayout()时，给listView提供item.")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mActiveViews "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2. 存在划出屏幕的view，回收利用。 ")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mScrapViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" mCurrentScrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填充mActiveViews")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillActiveViews")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" childCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" firstActivePosition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mActiveViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" childCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                mActiveViews "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("childCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            mFirstActivePosition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" firstActivePosition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//noinspection MismatchedReadAndWriteOfArray")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" activeViews "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mActiveViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" childCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbsListView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LayoutParams")]),t._v(" lp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbsListView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LayoutParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLayoutParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Don't put header or footer views into the scrap heap")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" lp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" ITEM_VIEW_TYPE_HEADER_OR_FOOTER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note:  We do place AdapterView.ITEM_VIEW_TYPE_IGNORE in active views.")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        However, we will NOT place them into scrap views.")]),t._v("\n                    activeViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Remember the position so that setupChild() doesn't reset state.")]),t._v("\n                    lp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrappedFromPosition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" firstActivePosition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取view，并从列表移除")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将废弃的View进行缓存")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addScrapView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" scrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取废弃的view")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrapView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// listview中几种类型的数据项")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewTypeCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * onlayout 获取view！！！\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("obtainView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" outMetadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mAdapter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scrapView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("二次layout")]),t._v(" "),a("blockquote",[a("p",[t._v("任何一个View，在展示到界面上之前都会经历至少两次onMeasure()和两次onLayout()的过程。")])]),t._v(" "),a("p",[t._v("总结一下:\n1.在第一次布局的时候调用我们写的getView()的逻辑代码来加载第一次的数据，\n2.因为需要二次布局的原因，将第一次加载的item放到一个临时数组mActiveViews中,用于在第二次makeAndAddView()时复用，\n3.通过while循环和makeAndAddView()填满可见屏幕\n4.接下来的listView中item的复用主要通过mScrapViews来解决。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);