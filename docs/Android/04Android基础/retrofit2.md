### Retrofit

#### Introduction

一个**简洁高效拓展性强**的网络框架

#### 优势

######流程角度

1. 通过简单的几个注解就可以构造Request；

2. 支持配置多种数据转换器 `json` `xml` `string`;

3. 支持多种适配器 Call、RxJava2CallAdapterFactory;

   **code demo: **

   ```java
   // use Call 
   public interface GitHub {
       @GET("/repos/{owner}/{repo}/contributors")
       Call<List<Contributor>> contributors(
           @Path("owner") String owner,
           @Path("repo") String repo);
     }
   
     public static void main(String... args) throws IOException {
       // Create a very simple REST adapter which points the GitHub API.
       Retrofit retrofit = new Retrofit.Builder()
           .baseUrl(API_URL)
           .addConverterFactory(GsonConverterFactory.create())
           .build();
   
       // Create an instance of our GitHub API interface.
       GitHub github = retrofit.create(GitHub.class);
   
       // Create a call instance for looking up Retrofit contributors.
       Call<List<Contributor>> call = github.contributors("square", "retrofit");
   
       // Fetch and print a list of the contributors to the library.
       List<Contributor> contributors = call.execute().body();
       for (Contributor contributor : contributors) {
         System.out.println(contributor.login + " (" + contributor.contributions + ")");
       }
     }
   
   // use rxjava2
   public interface Request {
       @POST("?service=sser.getList")
       Observable<Response<List<javaBean>>> getList(@Query("id") String id);
   }
   
   public static void main(String... args) throws IOException {
       Retrofit retrofit = new Retrofit.Builder()
           .baseUrl(API_URL)
           .addConverterFactory(GsonConverterFactory.create())
         	.addCallAdapterFactory(RxJava2CallAdapterFactory.create())  // 重要!
           .build();
     
       GitHub github = retrofit.create(Request.class);
   		
     model.getCarList("xxxxx")
                   .compose(schedulerProvider.applySchedulers())
                   .subscribe(new Consumer<Response<List<JavaBean>>>() {
                       @Override
                       public void accept(Response<List<JavaBean>> listResponse) throws Exception {
                           if(listResponse.getCode() == 200){
                               List<JavaBean> javaBeans = listResponse.getData();
                           }else{
                               // 异常处理
                           }
                       }
                   }, new Consumer<Throwable>() {
                       @Override
                       public void accept(Throwable throwable) throws Exception {
                               // 异常处理
                       }
                   });
     }
   ```

###### 架构角度

它巧妙运用多种设计模式把其它几个框架整合在一起，在实现解耦的同时也提供了高拓展性。它不做网络请求，而是利用`okhttp3`做网络请求；利用`Gson`等做数据解析；利用`rxjava`做异步任务。

1. 组合多种设计模式

   **外观模式，动态代理，策略模式，观察者模式。还有Builder模式，工厂等这些简单的我就没标。**

   ![retrofit_design_patterns](images/retrofit_design_patterns.png)

   **Builder模式：**

   ```java
   Retrofit retrofit = new Retrofit.Builder()
           .baseUrl(API_URL)
           .addConverterFactory(GsonConverterFactory.create())
           .build();
   ```

   **动态代理：**

   - 代理对象,不需要实现接口

   - 代理对象的生成,是利用JDK的API,动态的在内存中构建代理对象(需要我们指定创建代理对象/目标对象实现的接口的类型)

   ```java
     public <T> T create(final Class<T> service) {
       Utils.validateServiceInterface(service);
       if (validateEagerly) {
         eagerlyValidateMethods(service);
       }
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
               // 利用注解封装Method. code lib version: retrofit:2.3.0
               ServiceMethod<Object, Object> serviceMethod =
                   (ServiceMethod<Object, Object>) loadServiceMethod(method);
               OkHttpCall<Object> okHttpCall = new OkHttpCall<>(serviceMethod, args);
               return serviceMethod.callAdapter.adapt(okHttpCall);
             }
           });
     }
   ```

   **适配器模式**

   > 适配器模式就是，已经存在的`OkHttpCall`，要被不同的标准，平台来调用。设计了一个接口`CallAdapter`，让其他平台都是做不同的实现来转换，这样不花很大的代价就能再兼容一个平台。

   ![](images/retrofit_adapters.png)

   **抽象工厂模式**

   >  Retrofit的Converter和Adapter都是由抽象工厂模式来生成的。

2. 单一职责原则/分层思想/解耦

> ​	比如说`OkHttpCall`就负责网络调用；`ServiceMethod`就负责方法解析，构建Request；扩展方面就通过`Retrofit`的建造者模式去实现；内部做了大量默认的实现，用户可以选择简单的配置调用，也可以自定义；
> ​	比如说`okhttp3`中的`Call`对象，而`Retrofit`中用依赖倒置原则定义了自己的`retrofit.call`接口和实现类`OkHttpCall`;针对网络变量，通过动态代理、反射和具体的`ServiceMethod`去动态获取，也可以在`okhttpclient`中做一些变量设置;针对业务层面的变量，提供了`CallAdapterFactory`和`Convert`来扩展。

#### 源码精读

Retrofit.java 

ServiceMethod.java

ExecutorCallAdapterFactory.java

OkHttpCall.java

okhttp3.Call.enqueue(new okhttp3.Callback() {}

Handelr.post(runnble)