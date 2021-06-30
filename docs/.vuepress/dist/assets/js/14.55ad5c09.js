(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{366:function(t,s,a){t.exports=a.p+"assets/img/rx流程图.5ad7ded7.png"},445:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"rxjava"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rxjava"}},[t._v("#")]),t._v(" Rxjava")]),t._v(" "),n("p",[t._v("[TOC]")]),t._v(" "),n("h2",{attrs:{id:"一、简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、简介"}},[t._v("#")]),t._v(" 一、简介")]),t._v(" "),n("h3",{attrs:{id:"_1-概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),n("p",[t._v("​\tReactive Extensions(简称ReactiveX)是对"),n("strong",[t._v("响应式编程")]),t._v("理念的一个实现。它最初是由微软的一个团队所开发的响应式扩展库（Reactive Extensions libraray，Rx），随后越来流行，目前已经支持了几乎全部的流行编程语言。")]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("响应式编程：")]),t._v(" 一直基于数据流和变化传递的异步编程方式。 其核心思想是观察者模式，上游数据发生变化，下游能够及时感知到这些变化。")]),t._v(" "),n("blockquote",[n("p",[t._v("一个词："),n("strong",[t._v("异步")]),t._v("。 组成部分 ："),n("code",[t._v("Observable")]),t._v(" (可观察者，即被观察者)、 "),n("code",[t._v("Observer")]),t._v(" (观察者)、 "),n("code",[t._v("subscribe")]),t._v(" (订阅)、事件。"),n("code",[t._v("Observable")]),t._v(" 和 "),n("code",[t._v("Observer")]),t._v(" 通过 "),n("code",[t._v("subscribe()")]),t._v(" 方法实现订阅关系，从而 "),n("code",[t._v("Observable")]),t._v(" 可以在需要的时候发出事件来通知 "),n("code",[t._v("Observer")]),t._v("。")])]),t._v(" "),n("p",[t._v('RxJava 在 GitHub 主页上的自我介绍是 "a library for composing asynchronous and event-based programs using observable sequences for the Java VM"（一个在 Java VM 上使用可观测的序列来组成异步的、基于事件的程序的库）。这就是 RxJava ，概括得非常精准。')]),t._v(" "),n("h3",{attrs:{id:"_2-核心"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心"}},[t._v("#")]),t._v(" 2. 核心")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(366)}}),t._v(" "),n("p",[n("strong",[t._v("变异的观察者模式：")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("标准观察者设计模式：")]),t._v(" "),n("p",[t._v("多个观察者，一个被观察者，注册多次，需要自己主动产生事件并通知观察者。")])]),t._v(" "),n("li",[n("p",[t._v("RxJava的变种模式：")]),t._v(" "),n("p",[t._v("一个观察者，多个被被观察者，注册一次(注册完毕立即分发事件)。")])])]),t._v(" "),n("h2",{attrs:{id:"二、使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、使用"}},[t._v("#")]),t._v(" 二、使用")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" fun "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("testRx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件发生 被观察者")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" observable"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observable")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//处理网络请求或其他业务无关逻辑")]),t._v("\n            it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observable onNext 1 "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onComplete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observable onComplete"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observable onComplete 后的 onNext"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件处理 UI观察者")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" observer"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observer")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observer")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            override fun "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onComplete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observer onComplete()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            override fun "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSubscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Disposable")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observer onSubscribe()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            override fun "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observer onNext() = $t "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            override fun "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observer onError()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        observable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeOn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schedulers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newThread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定数据处理线程")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observeOn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AndroidSchedulers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mainThread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定业务UI处理线程")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivityCoroutine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observer "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSubscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivityCoroutine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observable onNext "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RxNewThreadScheduler")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivityCoroutine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observable onComplete\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivityCoroutine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observable onComplete 后的 onNext\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivityCoroutine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observer "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivityCoroutine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observer "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivityCoroutine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observer "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivityCoroutine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observer "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onComplete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// java Demo ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObservableOnSubscribe")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObservableEmitter")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" emitter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行耗时任务")]),t._v("\n                emitter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeOn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schedulers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("io")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observeOn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AndroidSchedulers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mainThread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("优势：")])]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("数据事件处理和数据事件呈现解耦")]),t._v("。")]),t._v(" "),n("li",[t._v("**处理异步业务是更加简洁，**链式调用，代码简洁，方便指定线程且进行数据转换。")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("参考")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://gank.io/post/560e15be2dca930e00da1083",target:"_blank",rel:"noopener noreferrer"}},[t._v("给 Android 开发者的 RxJava 详解"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/theone10211024/article/details/50435325",target:"_blank",rel:"noopener noreferrer"}},[t._v("RxJava使用场景"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.bilibili.com/video/av711415013",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习视频"),n("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=e.exports}}]);