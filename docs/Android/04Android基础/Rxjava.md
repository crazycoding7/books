## Rxjava

[TOC]

### 一、简介

​	Reactive Extensions(简称ReactiveX)是对**响应式编程**理念的一个实现。它最初是由微软的一个团队所开发的响应式扩展库（Reactive Extensions libraray，Rx），随后越来流行，目前已经支持了几乎全部的流行编程语言。

​	**响应式编程：** 一直基于数据流和变化传递的异步编程方式。 其核心思想是观察者模式，上游数据发生变化，下游能够及时感知到这些变化。

>  一个词：**异步**。 组成部分 ：`Observable` (可观察者，即被观察者)、 `Observer` (观察者)、 `subscribe` (订阅)、事件。`Observable` 和 `Observer` 通过 `subscribe()` 方法实现订阅关系，从而 `Observable` 可以在需要的时候发出事件来通知 `Observer`。

RxJava 在 GitHub 主页上的自我介绍是 "a library for composing asynchronous and event-based programs using observable sequences for the Java VM"（一个在 Java VM 上使用可观测的序列来组成异步的、基于事件的程序的库）。这就是 RxJava ，概括得非常精准。

```java
 private fun testRx() {
        // 事件发生 被观察者
        var observable: Observable<Integer> = Observable.create {
            //处理网络请求或其他业务无关逻辑
            it.onNext(Integer(1))
            Log.e(TAG, "observable onNext 1 " + Thread.currentThread().name)
            it.onNext(Integer(2))
            it.onNext(Integer(3))
            it.onComplete()
            Log.e(TAG, "observable onComplete")
            it.onNext(Integer(4))
            Log.e(TAG, "observable onComplete 后的 onNext")
        }

        // 事件处理 UI观察者
        var observer:Observer<Integer> = object :Observer<Integer>{
            override fun onComplete() {
               Log.e(TAG, "observer onComplete()")
            }

            override fun onSubscribe(d: Disposable?) {
                Log.e(TAG, "observer onSubscribe()")
            }

            override fun onNext(t: Integer?) {
                Log.e(TAG, "observer onNext() = $t " + Thread.currentThread().name)
            }

            override fun onError(e: Throwable?) {
                Log.e(TAG, "observer onError()")
            }

        }

        observable.subscribeOn(Schedulers.newThread())  // 指定数据处理线程
            .observeOn(AndroidSchedulers.mainThread())  // 指定业务UI处理线程
            .subscribe(observer)
    }
// result
E/MainActivityCoroutine: observer onSubscribe()
E/MainActivityCoroutine: observable onNext 1 RxNewThreadScheduler-1
E/MainActivityCoroutine: observable onComplete
E/MainActivityCoroutine: observable onComplete 后的 onNext
E/MainActivityCoroutine: observer onNext() = 1 main
E/MainActivityCoroutine: observer onNext() = 2 main
E/MainActivityCoroutine: observer onNext() = 3 main
E/MainActivityCoroutine: observer onComplete()
  
// java Demo 
    Observable.create(new ObservableOnSubscribe<String>() {
            @Override
            public void subscribe(ObservableEmitter<String> emitter) throws Exception {
                String s = "1234";
                //执行耗时任务
                emitter.onNext(s);
            }
        }).map(new Function<String, Integer>() {
            @Override
            public Integer apply(String s) throws Exception {
                return Integer.parseInt(s);
            }
        }).subscribeOn(Schedulers.io())
          .observeOn(AndroidSchedulers.mainThread())
          .subscribe();
```

**优势：**

1. 数据事件处理和数据事件呈现解耦。
2. 链式调用，代码简洁，方便指定线程且进行数据转换。





- 参考

  [给 Android 开发者的 RxJava 详解](https://gank.io/post/560e15be2dca930e00da1083)

