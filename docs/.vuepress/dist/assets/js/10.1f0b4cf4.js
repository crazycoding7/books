(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{359:function(e,t,r){e.exports=r.p+"assets/img/flutter_framework.8e1e6951.jpg"},434:function(e,t,r){"use strict";r.r(t);var a=r(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"flutter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter"}},[e._v("#")]),e._v(" Flutter")]),e._v(" "),a("p",[e._v("[TOC]")]),e._v(" "),a("h2",{attrs:{id:"一、架构设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、架构设计"}},[e._v("#")]),e._v(" 一、架构设计")]),e._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:r(359),alt:"flutter"}}),e._v(" "),a("p",[e._v("可以看到，Flutter框架主要分为Framework、Engine和 Embedder三层。\n其中，Framework使用Dart语言实现，包括UI、文本、图片、按钮等Widgets，渲染，动画，手势等，与开发者直接交互的就是这一层。Engine使用C++实现，主要包括Skia、Dart 和 Text。")]),e._v(" "),a("ul",[a("li",[e._v("Skia是开源的二维图形库，提供了适用于多种软硬件平台的通用API。其已作为Google Chrome，Chrome OS，Android, Mozilla Firefox, Firefox OS等其他众多产品的图形引擎，支持平台还包括Windows, macOS, iOS，Android，Ubuntu等。")]),e._v(" "),a("li",[e._v("Dart 部分主要包括:Dart Runtime，Garbage Collection(GC)，如果是Debug模式的话，还包括JIT(Just In Time)支持。Release和Profile模式下，是AOT(Ahead Of Time)编译成了原生的arm代码，并不存在JIT部分。")]),e._v(" "),a("li",[e._v("Text 即文本渲染，其渲染层次如下，衍生自 Minikin的libtxt库(用于字体选择，分隔行)；HartBuzz用于字形选择和成型；Skia作为渲染/GPU后端，在Android和Fuchsia上使用FreeType渲染，在iOS上使用CoreGraphics来渲染字体。")])]),e._v(" "),a("p",[e._v("Embedder则是一个嵌入层，该层的主要作用是把Flutter嵌入到各个平台上去，它的主要工作包括渲染Surface设置, 线程设置，以及插件等。平台(如iOS)只是提供一个画布，剩余的所有渲染相关的逻辑都在Flutter内部，这就使得它具有了很好的跨端一致性。")]),e._v(" "),a("h2",{attrs:{id:"二、ui性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、ui性能优化"}},[e._v("#")]),e._v(" 二、UI性能优化")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1F4411D7rP",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"三、mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、mvvm"}},[e._v("#")]),e._v(" 三、MVVM")]),e._v(" "),a("br"),e._v(" "),a("ul",[a("li",[e._v("参考")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xiangzhihong8/article/details/106433461/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.nowcoder.com/discuss/573795?type=5&order=0&pos=22&page=0&channel=-1&source_id=discuss_center_5_nctrack",target:"_blank",rel:"noopener noreferrer"}},[e._v("内存优化"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://book.flutterchina.club/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1. 入门书籍"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pub.flutter-io.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2. Dark packages插件"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://flutterchina.club/using-packages/",target:"_blank",rel:"noopener noreferrer"}},[e._v("3. Flutter中文网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);