(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{412:function(t,_,v){"use strict";v.r(_);var r=v(42),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"android进程线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#android进程线程"}},[t._v("#")]),t._v(" Android进程线程")]),t._v(" "),v("p",[t._v("[TOC]")]),t._v(" "),v("h4",{attrs:{id:"进程线程区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程线程区别"}},[t._v("#")]),t._v(" 进程线程区别")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("1、根本区别：进程是操作系统资源分配的最小单位，线程是CPU执行和资源调度的最小单位(目的:并发执行任务)。")])]),t._v(" "),v("li",[v("p",[t._v("2、内存分配方面：进程拥有自己的独立内存空间(JMM)，线程共享进程中的数据和空间；")]),t._v(" "),v("p",[t._v("​\t  开销方面：进程切换开销大，线程切换开销小；")]),t._v(" "),v("p",[t._v("​\t  包含关系：线程是进程的一部分，或者叫轻量级进程，一个进程可以包含多个线程(通过CPU调度，在每个时间片只有一个线程执行)。")])])]),t._v(" "),v("h4",{attrs:{id:"线程、纤程、协程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程、纤程、协程"}},[t._v("#")]),t._v(" 线程、纤程、协程")]),t._v(" "),v("p",[t._v("​\t纤程Fiber是一种轻量级线程，纤程可以在它请求阻塞时，暂时放弃执行权，留给其他纤程执行，返回结果时再继续执行。解决线程池并发问题(库Quasar)。 纤程依附于线程执行，一个线程可以执行n多个线程，同一时间只能执行一个纤程。")]),t._v(" "),v("p",[t._v("​\t协程（Coroutine）在执行过程中可中断去执行其他任务，执行完毕后再回来继续原先的操作。可以理解为两个或多个程序协同工作。")]),t._v(" "),v("p",[t._v("协程特点在于"),v("strong",[t._v("单线程")]),t._v("执行。\n优势一：具有极高的执行效率，因为在任务切换的时候是程序之间的切换（由程序自身控制）而不是线程间的切换，所以没有线程切换导致的额外开销（时间浪费），线程越多，携程性能优势越明显。")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/beilong/p/12253328.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),v("OutboundLink")],1)]),t._v(" "),v("h4",{attrs:{id:"跨进程通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨进程通信"}},[t._v("#")]),t._v(" 跨进程通信")]),t._v(" "),v("h5",{attrs:{id:"_1-介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("IPC")]),t._v(" "),v("p",[t._v("跨进程通信(Inter Process Communication)，泛指进程之间任何形式的通信行为，包括LPC、RPC。")]),t._v(" "),v("p",[t._v("进程间通信技术包括消息传递、同步、共享内存和远程过程调用。 IPC是一种标准的Unix通信机制。")])]),t._v(" "),v("li",[v("p",[t._v("LPC")]),t._v(" "),v("p",[t._v("本地过程调用，同一个操作系统中，同时运行的任务能够相互通信。")])]),t._v(" "),v("li",[v("p",[t._v("RPC")]),t._v(" "),v("p",[t._v("远程过程调用(Reomote Process Call)，特指一种隐藏了调用时实际通信细节的"),v("code",[t._v("IPC方法")]),t._v("。客户端将调用一个本地方法，而这个本地方法则是负责透明的与远程服务端进行过程间通信。")])]),t._v(" "),v("li",[v("p",[t._v("RPC与HTTP区别")]),t._v(" "),v("p",[t._v("不同点：")]),t._v(" "),v("p",[t._v("RPC具有TPC协议或http协议，二进制传输，传输效率高；")]),t._v(" "),v("p",[t._v("Http是一种网络传输协议，基于TCP，规定了数据传输格式。缺点是效率封装臃肿。")]),t._v(" "),v("p",[t._v("RPC要求服务器提供方和调用方使用相同的技术(编码语言)，http更加灵活，跨语言。")]),t._v(" "),v("p",[t._v("相同点：")]),t._v(" "),v("p",[t._v("底层通信都是基于Socket，都可以实现远程调用。")]),t._v(" "),v("p",[t._v("使用场景：")]),t._v(" "),v("p",[t._v("RPC主要用于公司内部的服务调用，性能消耗低，传输效率高，服务治理方便。")]),t._v(" "),v("p",[t._v("HTTP主要用于对外的异构环境，浏览器接口调用，APP接口调用，第三方接口调用等。")])])]),t._v(" "),v("h5",{attrs:{id:"_2-进程通信方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-进程通信方式"}},[t._v("#")]),t._v(" 2. 进程通信方式")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/Android/04Android基础/2.Binder进程通信机制.html"}},[t._v("参考文章")])],1),t._v(" "),v("h4",{attrs:{id:"android如何使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#android如何使用"}},[t._v("#")]),t._v(" Android如何使用")]),t._v(" "),v("h5",{attrs:{id:"_1-进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-进程"}},[t._v("#")]),t._v(" 1. 进程")]),t._v(" "),v("p",[t._v("​\t均在清单文件中设置，各类组件元素（Activity、Service、Receiver和provider）的清单文件条目均支持 "),v("code",[t._v("android:process")]),t._v(" 属性，此属性可指定该组件应在哪个进程中运行。")]),t._v(" "),v("p",[t._v("​\t共享进程前提是这些应用共享相同的Linux用户ID并且使用相同的证书进行签署。")]),t._v(" "),v("h5",{attrs:{id:"_2-线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程"}},[t._v("#")]),t._v(" 2. 线程")]),t._v(" "),v("p",[t._v("​\t主要分为主线程或UI线程、工作线程。")])])}),[],!1,null,null,null);_.default=a.exports}}]);