# EventBus

[TOC]

## 一、使用

```java
//1. 定义事件
public static class MessageEvent { /* Additional fields if needed */ }
//2. 订阅方法
@Subscribe(threadMode = ThreadMode.MAIN)  
public void onMessageEvent(MessageEvent event) {/* Do something */};
//3. 注册
 @Override
 public void onStart() {
     super.onStart();
     EventBus.getDefault().register(this);
 }

 @Override
 public void onStop() {
     super.onStop();
     EventBus.getDefault().unregister(this);
 }
//4. 发送
 EventBus.getDefault().post(new MessageEvent());
```

## 二、原理

事件发布/订阅框架；

利用反射得到订阅方法，利用反射invoke订阅方法；

缓存订阅方法列表；

如果是粘性事件，立即发送给当前订阅者执行。





- 参考

[原理](https://www.jianshu.com/p/56540e07416a)

[原理2](https://blog.csdn.net/lanxingfeifei/article/details/50600567)