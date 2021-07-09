# 协程

[TOC]

### 一、简介

#### 1. 概念

> > 协程在编译阶段就完成了，它不需要虚拟机或者os的支持。
>
> > 协程里面被挂起的任务是通过代码转换而成的。
> > 每个可被挂起的函数，被增强为一个状态机：这个状态机记录当前函数所处环境的状态，若这个函数执行完毕，状态机依据当前的状态恢复被挂起之前的环境。
>
> 协程，又称微线程和纤程等,“协程”（Coroutine）概念最早由 Melvin Conway 于 1958 年提出。协程可以理解为纯用户态的线程，其通过协作而不是抢占来进行切换。相对于进程或者线程，协程所有的操作都可以在用户态完成，创建和切换的消耗更低。总的来说，协程为协同任务提供了一种运行时抽象，这种抽象非常适合于协同多任务调度和数据流处理。**在现代操作系统和编程语言中，因为用户态线程切换代价比内核态线程小，协程成为了一种轻量级的多任务模型**。
>
> 从编程角度上看，协程的**思想本质上就是控制流的主动让出（yield）和恢复（resume）机制**，迭代器常被用来实现协程，所以大部分的语言实现的协程中都有 yield 关键字，比如 Python、PHP、Lua。但也有特殊比如 Go 就使用的是通道来通信。
>
> 有趣的是协程的历史其实要早于线程。

这里有两个关键点： **1 不阻塞** 、**2 中断、恢复执行**

**好处：**避免线程切换性能消耗。**协程更加轻量，创建成本更小，降低了内存消耗。协作式的用户态调度器，减少了 CPU 上下文切换的开销，提高了 CPU 缓存命中率。减少同步加锁，整体上提高了性能。可以按照同步思维写异步代码，即用同步的逻辑，写由协程调度的回调。**

**适合场景：**多IO操作场景，避免cpu密集场景。

**区别：**

​	**协程(Coroutine)编译器级的，进程(Process)和线程(Thread)操作系统级的**

​	进程(Process)和线程(Thread)是os通过调度算法，保存当前的上下文，然后从上次暂停的地方再次开始计算，重新开始的地方不可预期，每次CPU计算的指令数量和代码跑过的CPU时间是相关的，跑到os分配的cpu时间到达后就会被os强制挂起，开发者无法精确的控制它们。

​	协程（Coroutine）是一种轻量级的用户态线程，实现的是非抢占式的调度，即由当前协程切换到其他协程由当前协程来控制。目前的协程框架一般都是设计成 1:N 模式。所谓 1:N 就是一个线程作为一个容器里面放置多个协程。那么谁来适时的切换这些协程？答案是有协程自己主动让出 CPU，也就是每个协程池里面有一个调度器，这个调度器是被动调度的。意思就是他不会主动调度。而且当一个协程发现自己执行不下去了（比如异步等待网络的数据回来，但是当前还没有数据到)，这个时候就可以由这个协程通知调度器，这个时候执行到调度器的代码，调度器根据事先设计好的调度算法找到当前最需要 CPU 的协程。切换这个协程的 CPU 上下文把 CPU 的运行权交个这个协程，直到这个协程出现执行不下去需要等等的情况，或者它调用主动让出 CPU 的 API 之类，触发下一次调度。

这点是和 thread 最大的不同，thread 线程之间采取的是竞争 cpu 时间段的方法，谁抢到谁运行，由系统内核控制，对我们来说是不可见不可控的。协程不同，协程之间不用竞争、谁运行、谁挂起、什么时候恢复都是由我们自己控制的。

#### 2. 原理	

```java
public fun CoroutineScope.launch(
    context: CoroutineContext = EmptyCoroutineContext,// 上下文
    start: CoroutineStart = CoroutineStart.DEFAULT,   // 启动方式
    block: suspend CoroutineScope.() -> Unit          // 闭包
): Job {
    val newContext = newCoroutineContext(context)
    val coroutine = if (start.isLazy)
        LazyStandaloneCoroutine(newContext, block) else
        StandaloneCoroutine(newContext, active = true)
    coroutine.start(start, coroutine, block)
    return coroutine
}
```



[参考](https://zhuanlan.zhihu.com/p/52495120)

#### 3. 使用

##### 1. 启动协程的方式

- launch
- runblocking(阻塞当前线程，一般用于最外层)
- Async/await

```java
// 测试三种执行方式 
private fun startCoroutineType(){
        runBlocking {
            val job = launch {
                repeat(1000){ i ->
                    Log.e(TAG," 挂起中 launch . " + i)
                    delay(500)
                }
            }

            val job2 = async {
                delay(500)
                return@async "job2 result"
            }
            Log.e(TAG,"job2. 结果= " + job2.await())
            Log.e(TAG,"job2. 继续执行下面代码吗？ ")
            
            delay(1300)
            Log.e(TAG,"runBlocking. 等待中. " + Thread.currentThread().name)
            job.cancel()
            Log.e(TAG,"runBlocking. 完成. " )
        }

        Log.e(TAG,"startCoroutineType(). " + Thread.currentThread().name)
    }

E/MainActivityCoroutine:  挂起中 launch . 0
E/MainActivityCoroutine:  挂起中 launch . 1
E/MainActivityCoroutine: job2. 结果= job2 result
E/MainActivityCoroutine: job2. 继续执行下面代码吗？ 
E/MainActivityCoroutine:  挂起中 launch . 2
E/MainActivityCoroutine:  挂起中 launch . 3
E/MainActivityCoroutine: runBlocking. 等待中. main
E/MainActivityCoroutine: runBlocking. 完成. 
E/MainActivityCoroutine: startCoroutineType(). main
```



##### 2. 其他

它们在某些 [CoroutineScope](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/index.html) 上下文中与 [launch](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html) *协程构建器* 一起启动。 这里我们在 [GlobalScope](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-global-scope/index.html) 中启动了一个新的协程，这意味着新协程的生命周期只受整个应用程序的生命周期限制。

可以将 `GlobalScope.launch { …… }` 替换为 `thread { …… }`，并将 `delay(……)` 替换为 `Thread.sleep(……)` 达到同样目的。 试试看（不要忘记导入 `kotlin.concurrent.thread`）

```kotlin
import kotlinx.coroutines.*

fun main() {
   // 非阻塞
    GlobalScope.launch { // 在后台启动一个新的协程并继续
        delay(1000L) // 非阻塞的等待 1 秒钟（默认时间单位是毫秒）
        println("World!") // 在延迟后打印输出
    }
  	// 阻塞 调用了 runBlocking 的主线程会一直 阻塞 直到 runBlocking 内部的协程执行完毕。
  	runBlocking {     // 但是这个表达式阻塞了主线程
        delay(2000L)  // ……我们延迟 2 秒来保证 JVM 的存活
    } 
  	// 也是阻塞
    println("Hello,") // 协程已在等待时主线程还在继续
    Thread.sleep(2000L) // 阻塞主线程 2 秒钟来保证 JVM 存活
}
```

**kotlin协程** 是一种异步编程的顺序写法，将上诉例子中的代码可以改写成下面这样（为了表达出主线程不会阻塞，加了两行代码）：

虽然异步回调能很好的处理异步问题，但是有两点坏处：

- 将一条控制流分割成两条控制流，**增加代码复杂性**
- 如果嵌套层级过多，会造成**回调地狱**，同时控制流数量也可能呈指数上升

```kotlin
 fun setUpUI(){
        GlobalScope.launch(Main) { 
            val dataDeferred  = requestDataAsync()
            doSomethingElse()
            val data = dataDeferred.await()
            processData(data)
        }
        Thread.sleep(1000)
        doSomethingElse2()
    }

    fun requestDataAsync():Deferred<String>{
        // 启动一个异步协程去执行耗时任务
        return GlobalScope.async { 
            requestData()
        }
    }  

    fun doSomethingElse2(){
        println("doSomethingElse2")
    }

```

<img src="./images/coroutine原理.png" style="zoom:50%;" />

### 二、使用场景

#### 1. 网络请求像同步

```java
  private fun netTest() {
        Log.e(TAG, "netTest() Main start...")

        CoroutineScope(Dispatchers.Main).launch {
            val result = async(Dispatchers.IO) { //或者withContext(Dispatchers.IO) {
                //使用okhttp使用同步请求，完事将response返回
                val request = Request.Builder().url("http://www.baidu.com").build()
                val response = OkHttpClient().newCall(request).execute()
                Log.e(TAG, "CoroutineScope  IO : ${Thread.currentThread().name}")

                response
            }
            Log.e(TAG, "CoroutineScope Main start : ${Thread.currentThread().name}")

            //等待异步执行的结果
            val response = result.await()
            //返回的结果，直接显示在sample_text这个textview上，也就是更新UI
            btn_jump.text = response.body()?.string()
            Log.e(TAG, "CoroutineScope Main end: ${Thread.currentThread().name}")
        }


        Log.e(TAG, "netTest() Main end...")
    }

// 结果：
 E/MainActivityCoroutine: netTest() Main start...
 E/MainActivityCoroutine: netTest() Main end...
 E/MainActivityCoroutine: CoroutineScope Main start : main
 E/MainActivityCoroutine: CoroutineScope  IO : DefaultDispatcher-worker-1
 E/MainActivityCoroutine: CoroutineScope Main end: main
```

#### 2. 线程切换

```java
// 2.
override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_thread)
        loadData()
    }

    private fun loadData() {
        GlobalScope.launch(Dispatchers.IO) { //在IO线程开始
            //IO 线程里拉取数据
            val result = fetchData()
            //主线程里更新 UI
            withContext(Dispatchers.Main) { //执行结束后，自动切换到UI线程
                tvShowContent.text = result
            }
        }
    }
    
    //关键词 suspend
    private suspend fun fetchData(): String {
        delay(2000) // delaying for 2 seconds to keep JVM alive
        return "content"
    }

// 2
val request = Request.Builder().url("http://www.baidu.com").build()
        val call = OkHttpClient().newCall(request)
        call.enqueue(object : Callback{
            override fun onResponse(call: Call, response: Response) {
                response.body()?.string()?.let { threadToMain(it) }
            }
 
            override fun onFailure(call: Call, e: IOException) {
 
            }
 
})
 
  fun threadToMain(string: String){
        MainScope().launch {
            sample_text.text = string
        }
    } 
```



#### 3. Suspend、Async&await区别

​    Async&await用来处理异步:

```kotlin
coroutineScope.launch(Dispatchers.IO) {
	val a = async{ getUserInfo() }  // 创建协程 闭包，返回Deferred对象
	val userInfo = a.await()        // 执行协程闭包
}
```

Suspend暂停挂起(修饰函数)：

```java
fun init() {
	coroutineScope.launch {
		val userInfo = getUserInfo()
		tv_name.text = userInfo.name
	}
}

// 请求用户信息 用suspend修饰的函数会切换的对应线程执行，如何再切回主协程
suspend fun getUserInfo(): UserInfo {
	return withContext(Dispatchers.IO){
		...
	}
}
```









- 参考

  [kotlin学习网站](https://www.kotlincn.net/docs/reference/coroutines-overview.html)

  [协程原理](https://ethanhua.github.io/2018/12/24/kotlin_coroutines/)
  
  [协程理解](https://segmentfault.com/a/1190000021068283)
  
  [异步、并发、协程原理](http://www.iigrowing.cn/?p=6736)
  
  [协程使用理解！！！](https://www.jianshu.com/p/76d2f47b900d)

