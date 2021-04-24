## Retrofit

[TOC]

### 一、介绍

​	Retrofit 通过 java 接口以及注解来描述网络请求，并用动态代理的方式生成网络请求的 request，然后通过 client 调用相应的网络框架（默认 okhttp）去发起网络请求，并将返回的 response 通过 converterFactorty 转换成相应的数据 model，最后通过 calladapter 转换成其他数据方式（如 rxjava Observable）。

通过 Retrofit. create( ciass)方法创建出 Service interface 的实例，从而使得 Service 中
配置的方法变得可用，这是 Retrofit 代码结构的核心；
Retrofit.create()方法内部，使用的是 Proxy.newProxylnstancef)方法来创建
Service 实例。这个方法会为参数中的多个 interface (具体到 Retrofit 来说，是固定传入一个
interface)创建一个对象，这个对象实现了所有 interface 的每个方法，并且每个方法的实现都
是雷同的：调用对象实例内部的一个工 nvocationHandler 成员变量的 invoke()方法，并
把自己的方法信息传递进去。这样就在实质上实现了代理逻辑：interface 中的方法全部由一个
另外设定的 InvocatioriHandler 对象来进行代理操作。并且，这些方法的具体实现是在运行
时生成 interface 实例时才确定的，而不是在编译时（虽然在编译时就已经可以通过代码逻辑推
断出来）。这就是网上所说的「动态代理机制」的具体含义。

**流程：**

1. 通过解析网络请求接口的注解，配置网络请求参数
2. 通过动态代理生成网络请求对象
3. 通过网络请求适配器将网络请求对象进行平台适配
4. 通过网络请求执行器发送网络请求
5. 通过数据转换器解析服务器返回的数据
6. 通过回调执行器切换线程（子线程 ->>主线程）
7. 用户在主线程处理返回结果

**优点：**

1. 可以配置不同 HTTP client 来实现网络请求，如 okhttp、httpclient 等；
2. 请求的方法参数注解都可以定制；
3. 支持同步、异步和 RxJava；
4. 超级解耦；
5. 可以配置不同的反序列化工具来解析数据，如 json、xml 等
6. 框架使用了很多设计模式

### 二、机制理解

#### 1. 动态代理生成service实例

​	这样就在实质上实现了代理逻辑：`interface` 中的方法全部由一个
另外设定的 `InvocatioriHandler` 对象来进行代理操作。并且，这些方法的具体实现是在运行
时生成 `interface` 实例时才确定的，而不是在编译时（虽然在编译时就已经可以通过代码逻辑推
断出来）。这就是网上所说的「动态代理机制」的具体含义。

```java
// 使用
Retrofit retrofit = new Retrofit.Builder().baseUrl(BASE_URL).client(okHttpClient)
                //.addCallAdapterFactory(RxJavaCallAdapterFactory.create()) //添加Rxjava
                .addConverterFactory(GsonConverterFactory.create()).build();
ApiService  api = retrofit.create(ApiService.class); // 生成API Service

public interface ApiService {
    @GET("top250")
    Call<MovieEntity> getTopMovie(@Query("start") int start, @Query("count") int count);
}

// 代理源代码
public <T> T create(final Class<T> service) {
 
  return (T) Proxy.newProxyInstance(service.getClassLoader(), new Class<?>[] { service },
      new InvocationHandler() {
        private final Platform platform = Platform.get();

        @Override public Object invoke(Object proxy, Method method, @Nullable Object[] args)
            throws Throwable {
          // If the method is a method from Object then defer to normal invocation.
          if (method.getDeclaringClass() == Object.class) {
            return method.invoke(this, args);
          }
          if (platform.isDefaultMethod(method)) {
            return platform.invokeDefaultMethod(method, service, proxy, args);
          }
          ServiceMethod<Object, Object> serviceMethod =
              (ServiceMethod<Object, Object>) loadServiceMethod(method);
          OkHttpCall<Object> okHttpCall = new OkHttpCall<>(serviceMethod, args);
          return serviceMethod.callAdapter.adapt(okHttpCall);
        }
      });
}

// 缓存Method信息
  private final Map<Method, ServiceMethod<?>> serviceMethodCache = new ConcurrentHashMap<>();

```

#### 2. 动态代理和静态代理区别？

1. 静态代理类由程序员创建或工具生成代理类的源码，再编译代理类。所谓静态也就是在程序运行前就已经存在代理类的字节码文件，代理类和委托类的关系在运行前就确定了。
2. 动态代理类是在程序运行期间由 JVM 根据反射等机制动态的生成，所以不存在代理类的字节码文件。代理类和委托类的关系是在程序运行时确定。

**静态代理**

静态代理业务类只需要关注业务逻辑本身，保证了业务类的重用性。代理对象的一个接口只服务于一种类型的对象，如果要代理的方法很多，需要为每一种方法都进行代理，静态代理在程序规模稍大时就无法胜任。如果接口增加一个方法，除了所有实现类需要实现这个方法外，所有代理类也需要实现此方法，增加了代码维护的复杂度。

**动态代理**

动态代理与静态代理相比较，最大的好处是接口中声明的所有方法都被转移到调用处理器一个集中的方法中处理（InvocationHandler invoke）。这样，在接口方法数量比较多的时候，可以进行灵活处理，而不需要像静态代理那样每一个方法进行中转。而且动态代理的应用使类职责更加单一，复用性更强。



- 参考

[参考1](https://blog.csdn.net/jaynm/article/details/108614788)