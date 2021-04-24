# Okhttp

[TOC]

## 一、 介绍

> 线程池、连接池、拦截器链、缓存管理、连接复用、连接清理规则。

### 1. 框架优点

1. 支持HTTPS/HTTP2/WebSocket(服务器可主动推送消息)
2. 内部维护任务队列线程池，友好支持并发访问
3. 内部维护连接池，支持多路复用，减少连接创建开销
4. 提供拦截器链，实现request和response的分层处理
5. Okio提供超时机制
6. Socket创建支持最佳路由

### 2. 总体架构

**Interface-接口层：**接口层接收用户的网络访问请求，发起实际的网络访问

OkHttpClient是OkHttp框架的用户面板，用户使用OkHttp进行各种设置，发起各种网络请求都是通过OkHttpClient完成的

Call描述一个实际的访问请求，用户的每一个网络请求都是一个Call实例。Call本身只是一个接口，定义了Call的接口方法，实际执行过程中，OkHttp会为每一个请求创建一个RealCall，每一个RealCall内部有一个AsyncCall

Dispatcher是OkHttp的调度器，其内部维护了一个线程池

**Protocal-协议层：**Protocol层负责处理协议逻辑，OkHttp支持Http1/Http2/WebSocket协议

**Connection-连接层：**）在连接层中有一个连接池，统一管理所有的Socket连接，当用户新发起一个网络请求时，OkHttp会首先从连接池中查找是否有符合要求的连接，如果有则直接通过该连接发送网络请求；否则新创建一个连接。RealConnection描述一个物理Socket连接，连接池中维护多个RealConnection实例。由于Http/2支持多路复用，一个RealConnection可以支持多个网络访问请求，所以OkHttp又引入了StreamAllocation来描述一个实际的网络请求

**Cache-缓存层：**Cache层负责维护请求缓存，当用户的网络请求在本地已有符合要求的缓存时，OkHttp会直接从缓存中返回结果，从而节省网络开销

**IO层：**I/O层负责实际的数据读写。OkHttp的另一大有点就是其高效的I/O操作，这归因于其高效的I/O库Okio

**Interceptor-拦截器层：**拦截器层提供了一个类AOP接口，方便用户可以切入到各个层面对网络访问进行拦截并执行相关逻辑。



## 二、源码精读

```java
 // demo
 OkHttpClient okHttpClient = new OkHttpClient();
 Request request = new Request.Builder().url("").build();
       
  okHttpClient.newCall(request).execute();
  okHttpClient.newCall(request).enqueue(new okhttp3.Callback() {
    @Override
    public void onFailure(okhttp3.Call call, IOException e) {
    }
    @Override
    public void onResponse(okhttp3.Call call, okhttp3.Response response) throws IOException {
    }
  });

```

### 1. OkHttpClient 属性

```
final Dispatcher dispatcher;//调度器 
final @Nullable Proxy proxy;//代理 
final List<Protocol> protocols;//协议 
final List<ConnectionSpec> connectionSpecs;//传输层版本和连接协议 
final List<Interceptor> interceptors;//拦截器 
final List<Interceptor> networkInterceptors;//网络拦截器 
final EventListener.Factory eventListenerFactory; 
final ProxySelector proxySelector;//代理选择器 
final CookieJar cookieJar;//cookie final @Nullable Cache cache;//cache 缓存 
final @Nullable InternalCache internalCache;//内部缓存 
final SocketFactory socketFactory;//socket 工厂 
final @Nullable SSLSocketFactory sslSocketFactory;//安全套层socket工厂 用于https 
final @Nullable CertificateChainCleaner certificateChainCleaner;//验证确认响应书，适用HTTPS 请求连接的主机名 
final HostnameVerifier hostnameVerifier;//主机名字确认 
final CertificatePinner certificatePinner;//证书链 
final Authenticator proxyAuthenticator;//代理身份验证 
final Authenticator authenticator;//本地省份验证 
final ConnectionPool connectionPool;//链接池 复用连接 
final Dns dns; //域名 
final boolean followSslRedirects;//安全套接层重定向 
final boolean followRedirects;//本地重定向 
final boolean retryOnConnectionFailure;//重试连接失败 
final int connectTimeout;//连接超时 
final int readTimeout;//读取超时 
final int writeTimeout;//写入超时
```

### 2. 请求流程

简述okhttp的执行流程：

1. OkhttpClient 实现了Call.Fctory,负责为Request 创建 Call；
2. RealCall 为Call的具体实现，其enqueue() 异步请求接口通过Dispatcher()调度器利用ExcutorService实现，而最终进行网络请求时和同步的execute()接口一致，都是通过 getResponseWithInterceptorChain() 函数实现
3. getResponseWithInterceptorChain() 中利用 Interceptor 链条，责任链模式 分层实现缓存、透明压缩、网络 IO 等功能；最终将响应数据返回给用户。

```java
//1. okhttpclient 实现了newCall接口
@Override public Call newCall(Request request) { 
  return RealCall.newRealCall(this, request, false /* for web socket */); 
}
//2. 构造真实请求RealCall对象
static RealCall newRealCall(OkHttpClient client, Request originalRequest, boolean forWebSocket) {
    // Safely publish the Call instance to the EventListener.
    RealCall call = new RealCall(client, originalRequest, forWebSocket);
    call.eventListener = client.eventListenerFactory().create(call);
    return call;
}
//3. 同步异步请求 realCall.execute() realCall.enqueue()
@Override 
public Response execute() throws IOException {
    synchronized (this) {
      if (executed) throw new IllegalStateException("Already Executed");
      executed = true;
    }
    captureCallStackTrace();
    timeout.enter();
    eventListener.callStart(this);
    try {
      // !!!通过client的dispatcher开始请求
      client.dispatcher().executed(this);
      /// !!!通过拦截器获取结果
      Response result = getResponseWithInterceptorChain();
      if (result == null) throw new IOException("Canceled");
      return result;
    } catch (IOException e) {
      e = timeoutExit(e);
      eventListener.callFailed(this, e);
      throw e;
    } finally {
      client.dispatcher().finished(this);
    }
  }
@Override 
public void enqueue(Callback responseCallback) {
    synchronized (this) {
      if (executed) throw new IllegalStateException("Already Executed");
      executed = true;
    }
    captureCallStackTrace();
    eventListener.callStart(this);
    // 交给 dispatcher调度器 进行调度
    client.dispatcher().enqueue(new AsyncCall(responseCallback));
  }

//4. Dispatcher调度器 放入线程池
class Dispatcher{
  @get:Synchronized var maxRequests = 64
  @get:Synchronized var maxRequestsPerHost = 5
  /** Ready async calls in the order they'll be run. */
  private val readyAsyncCalls = ArrayDeque<AsyncCall>()
  /** Running asynchronous calls. Includes canceled calls that haven't finished yet. */
  private val runningAsyncCalls = ArrayDeque<AsyncCall>()
  /** Running synchronous calls. Includes canceled calls that haven't finished yet. */
  private val runningSyncCalls = ArrayDeque<RealCall>()
    
  //执行异步请求 
  synchronized void enqueue(AsyncCall call) { 
    // 同时请求不能超过并发数(64,可配置调度器调整) 
    // okhttp会使用共享主机即 地址相同的会共享socket 
    // 同一个host最多允许5条线程通知执行请求 
    if (runningAsyncCalls.size() < maxRequests && runningCallsForHost(call) < maxRequestsPerHost) { 
      // 加入运行队列 并交给线程池执行 
      runningAsyncCalls.add(call); 
      // AsyncCall 是一个runnable，放到线程池中去执行，查看其execute实现 
      executorService().execute(call); } else { 
      // 加入等候队列 
      readyAsyncCalls.add(call); } 
  }
  
  // 无线大小的线程池
  public synchronized ExecutorService executorService() {
    if (executorService == null) {
      executorService = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60, TimeUnit.SECONDS,
          new SynchronousQueue<Runnable>(), Util.threadFactory("OkHttp Dispatcher", false));
    }
    return executorService;
  } 
  
}  

//5. 线程池执行
final class RealCall implements Call {
	
  // 线程池最终执行的Runnable
  final class AsyncCall extends NamedRunnable { 
    @Override protected void execute() { 
      boolean signalledCallback = false; 
      try { 
        // 责任链模式 拦截器链 执行请求 
        Response response = getResponseWithInterceptorChain(); 
        //回调结果 
        if (retryAndFollowUpInterceptor.isCanceled()) { 
          signalledCallback = true; 
          responseCallback.onFailure(RealCall.this, new IOException("Canceled"));
        } else { 
          signalledCallback = true; 
          responseCallback.onResponse(RealCall.this, response); 
        } 
      } catch (IOException e) { } 
      finally { 
        //TODO 移除队列 
        client.dispatcher().finished(this); 
      } 
    } 
  }
  
  //!!!***责任链模式请求结果(核心代码)
  //从代码中，可以看出都实现了Interceptor接口，这是okhttp最核心的部分，采用责任链的模式来使每个功能分开，每个Interceptor自行完成自己的任务，并且将不属于自己的任务交给下一个，简化了各自的责任和逻辑。
  Response getResponseWithInterceptorChain() throws IOException {
    // Build a full stack of interceptors.
    List<Interceptor> interceptors = new ArrayList<>();
   	// 在配置okhttpClient 时设置的intercept 由用户自己设置
    interceptors.addAll(client.interceptors());
    // 负责处理失败后的重试与重定向
    interceptors.add(retryAndFollowUpInterceptor);
    // 负责把用户构造的请求转换为发送到 服务器 的请求 、把服务器返回的响应转换为用户友好的响应 处理 配置请求头等信息 
    // 从应用程序代码到网络代码的桥梁。首先，它根据用户请求构建网络请求。然后它继续呼叫网络。最后，它根据网络响应构建用户响应。
    interceptors.add(new BridgeInterceptor(client.cookieJar()));
    // 处理 缓存配置 根据条件(存在响应缓存并被设置为不变的或者响应在有效期内)返回缓存响应 
    // 设置请求头(If-None-Match、If-Modified-Since等) 服务器可能返回304(未修改) 
    // 可配置用户自己设置的缓存拦截器
    interceptors.add(new CacheInterceptor(client.internalCache()));
    interceptors.add(new ConnectInterceptor(client));
    if (!forWebSocket) {
      interceptors.addAll(client.networkInterceptors());
    }
    // 执行流操作(写出请求体、获得响应数据) 负责向服务器发送请求数据、从服务器读取响应数据 
    // 进行http请求报文的封装与请求报文的解析
    interceptors.add(new CallServerInterceptor(forWebSocket));

    // 创建责任链
    Interceptor.Chain chain = new RealInterceptorChain(interceptors, null, null, null, 0,
        originalRequest, this, eventListener, client.connectTimeoutMillis(),
        client.readTimeoutMillis(), client.writeTimeoutMillis());

    // 执行责任链
    return chain.proceed(originalRequest);
  }

}
  
//6. 责任链实现(遍历拦截器集合，依次执行拦截器)
public final class RealInterceptorChain implements Interceptor.Chain {
	public Response proceed(Request request, StreamAllocation streamAllocation, HttpCodec httpCodec, RealConnection connection) throws IOException { 
    if (index >= interceptors.size()) throw new AssertionError(); 
    calls++; 
    // 创建新的拦截链，链中的拦截器集合index+1 
    RealInterceptorChain next = new RealInterceptorChain(interceptors, streamAllocation, httpCodec, connection, index + 1, request, call, eventListener, connectTimeout, readTimeout, writeTimeout); 
    // 执行当前的拦截器-如果在配置okhttpClient，时没有设置intercept默认是先执行：retryAndFollowUpInterceptor 拦截器 
    Interceptor interceptor = interceptors.get(index); 
    // 执行拦截器 
    Response response = interceptor.intercept(next); 
    return response; 
  }
}
```

### 3 拦截器的调用顺序

> 先顺序调用每个拦截器前半部分代码，都执行完毕，网络请求完毕；
>
> 倒序调用每个拦截器后半部分。

1. 自己的
2. retry
3. Bridge
4. Cache
5. ConnectInterceptor
6. CallServer

## 三、连接复用

> ConnectInterceptor拦截器负责Network连接；
>
> 每一个RealCall请求对应一个StreamAllocation；
>
> 真正的连接RealConnection复用；
>
> 连接池采用ArrayDeque双向队列数据结构；
>
> 连接清理任务。

**介绍(ConnectionPool):**

  在HTTP1.0中每次请求都需要重新建立连接，每个连接负责一个资源请求。创建一个TCP连接需要3次握手，而释放连接则需要2次或4次握手。重复的创建和释放连接极大地影响了网络效率，同时也增加了系统开销

为了有效地解决这一问题，HTTP/1.1提出了Keep-Alive机制，当一个HTTP请求的数据传输结束后，TCP连接不立即释放，如果此时有新的HTTP请求，且其请求的Host和上次请求相同，则可以直接复用未释放的连接，从而省去了创建和释放TCP连接的开销，减少了网络延时

HTTP/2主要解决了以下问题：

报头压缩：HTTP/2使用HPACK压缩格式压缩请求和响应报头数据，减少不必要流量开销

请求与响应复用：**HTTP/2通过引入新的二进制分帧层实现了完整的请求和响应复用，客户端和服务器可以将HTTP消息分解为互不依赖的帧，然后交错发送，最后再在另一端将其重新组装**

指定数据流优先级：将 HTTP 消息分解为很多独立的帧之后，我们就可以复用多个数据流中的帧，客户端和服务器交错发送和传输这些帧的顺序就成为关键的性能决定因素。为了做到这一点，HTTP/2 标准允许每个数据流都有一个关联的权重和依赖关系。

**连接清理：**

ConnectionPool连接池管理所有Socket连接，当有新的请求时，从池中分配一个链路。
 ArrayDeque双向队列，线性连续空间，双向开口，在头尾两端插入删除高效，同时具有队列和栈性质，缓存常用。
 **默认支持5个并发keepalive，链路生命为5分钟，**即链路数据传输完成，可保持5分钟的存活时间。
 自动清除线程，将查找超过5分钟的链路，关闭socket。



## 四、okio

**好处(数据缓冲器共享！！！)：**

1. 低的CPU和内存消耗。后面我们会分析到，okio采用了segment的机制进行内存共享和复用，尽可能少的去申请内存，同时也就降低了GC的频率。我们知道，过于频繁的GC会给应用程序带来性能问题。
2. 使用方便。在OKIO中，提供了ByteString来处理不变的byte序列，在内存上做了优化，不管是从byte[]到String或是从String到byte[]，操作都非常轻快，同时还提供了如hex字符，base64等工具。而Buffer是处理可变byte序列的利器，它可以根据使用情况自动增长，在使用过程中也不用去关心position等位置的处理。
3. N合一。Java的原生IO，InputStream/OutputStream, 如果你需要读取数据，如读取一个整数，一个布尔，或是一个浮点，你需要用DataInputStream来包装，如果你是作为缓存来使用，则为了高效，你需要使用BufferedOutputStream。在OKIO中BufferedSink/BufferedSource就具有以上基本所有的功能，不需要再串上一系列的装饰类。
4. 提供了一系列的方便工具，如GZip的透明处理，对数据计算md5、sha1等都提供了支持，对数据校验非常方便。

[参考](https://www.jianshu.com/p/2fff6fe403dd)



## 五. 面试题

### 1. 责任链模式的运用？

**好处:**

- 采用责任链的模式来使每个功能分开，每个Interceptor自行完成自己的任务，并且将不属于自己的任务交给下一个，**简化了各自的责任和逻辑**。

- 当责任链执行完毕，如果拦截器想要拿到最终的数据做其他的逻辑处理等，这样就不用在做其他的调用方法逻辑了，直接在当前的拦截器就可以拿到最终的数据(**请求前后的代码逻辑放在一个方法执行**)。

  ```java
  // 先执行请求前的代码
  Response response = chain.proceed(request);
  // 在执行请求后的代码
  
  执行 BridgeInterceptor 拦截器之前代码
  执行 RetryAndFollowInterceptor 拦截器之前代码 
  执行 CacheInterceptor 最后一个拦截器 返回最终数据 
  执行 RetryAndFollowInterceptor 拦截器之后代码 得到最终数据：success 
  执行 BridgeInterceptor 拦截器之后代码 得到最终数据：success
  ```

[参考](https://www.codercto.com/a/65790.html)

### 2. 应用拦截器和网络拦截器的区别？







- **引用知识点**

[1. Tcp三次握手四次挥手](https://www.cnblogs.com/Andya/p/7272462.html)

[2. okio](https://www.jianshu.com/p/3e0935bf2d45)

[3. 彻底理解OkHttp!!!](https://www.codercto.com/a/46818.html)

