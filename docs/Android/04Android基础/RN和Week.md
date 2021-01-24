## RN和Week

[TOC]

### 一、简介

> 你可以使用 **JavaScript 语言和前端开发经验**来开发移动应用。目前流行的前端开发框架有Vue、React、Angular。

- React中提出一个重要思想：状态改变则UI随之自动改变，而React框架本身就是响应用户状态改变的事件而执行重新构建用户界面的工作，这就是典型的响应式编程范式，下面我们总结一下React中响应式原理：
- 开发者只需关注状态转移（数据），当状态发生变化，React框架会自动根据新的状态重新构建UI。
  React框架在接收到用户状态改变通知后，会根据当前渲染树，结合最新的状态改变，通过Diff算法，计算出树中变化的部分，然后只更新变化的部分（DOM操作），从而避免整棵树重构，提高性能。

### React Native

- 上文已经提到React Native 是React 在原生移动应用平台的衍生产物，那两者主要的区别是什么呢？其实，主要的区别在于虚拟DOM映射的对象是什么？React中虚拟DOM最终会映射为浏览器DOM树，而RN中虚拟DOM会通过 JavaScriptCore 映射为原生控件树。
- JavaScriptCore 是一个JavaScript解释器，它在React Native中主要有两个作用：
  - 为JavaScript提供运行环境。
  - 是JavaScript与原生应用之间通信的桥梁，作用和JsBridge一样，事实上，在iOS中，很多JsBridge的实现都是基于 JavaScriptCore 。
- 而RN中将虚拟DOM映射为原生控件的过程中分两步：
  - 布局消息传递； 将虚拟DOM布局信息传递给原生；
  - 原生根据布局信息通过对应的原生控件渲染控件树；





- 参考

  [RN官网 FaceBook](https://www.react-native.cn/docs/getting-started)

  [Week官网 ali](https://weex.apache.org/zh/guide/introduction.html#%E6%A6%82%E8%BF%B0)

  [Vue.js 前端框架](https://www.runoob.com/vue2/vue-tutorial.html)

