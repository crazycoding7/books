## Retrofit

[TOC]

### 一、介绍

> Retrofit就是一个网络请求框架的封装，底层的网络请求默认使用的Okhttp，本身只是简化了用户网络请求的参数配置等，还能与Rxjava相结合，使用起来更加简洁方便。

#### 1. 使用Retrofit的七步骤

- 添加Retrofit依赖，网络权限
- 定义接收服务器返回数据的Bean
- 创建网络请求的接口，使用注解(动态代理，核心)
- builder模式创建Retrofit实例，converter，calladapter...
- 创建接口实例，调用具体的网络请求
- call同步/异步网络请求
- 处理服务器返回的数据

#### 2. Retrofit网络通信八步骤

1. 创建Retrofit实例
2. 定义网络请求接口，并为接口中的方法添加注解
3. 通过动态代理生成网络请求对象
4. 通过网络请求适配器将网络请求对象进行平台适配
5. 通过网络请求执行器，发送网络请求(call)
6. 通过数据解析器解析数据
7. 通过回调执行器，切换线程
8. 用户在主线程处理返回结果

#### 3. 使用到的设计模式

代理模式，外观模式，构建者模式，工厂模式，适配器模式，策略模式，观察者模式

#### 4. 优点

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