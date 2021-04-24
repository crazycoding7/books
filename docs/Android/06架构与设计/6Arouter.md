# Arouter

[TOC]

## 一、介绍

**使用：**

```java
//服务module中的FragmentService
@Route(path = "/service/fragmentService")
public class FragmentService{}

//服务module中的TestActivity
@Route(path = "/service/test")
public class TestActivity extends BaseActivity{}

//主APP中获取FragmentService实例
Fragment serviceFragment = (Fragment) ARouter.getInstance().build("/service/fragmentService").navigation();

//主APP中跳转服务module中的TestActivity
ARouter.getInstance().build("/service/test").navigation();

//!!!获取组件之间通信服务
ARouter.getInstance().navigation(TestProvider.class).test();

@Route(path = "/provider/testP")
public class TestProvider implements IProvider {
    @Override
    public void init(Context context) {
    }
    public String test(){
       return ("Hello Provider!");
    }
}

```







通过APT(注解处理器)生成路由java文件，例如：

```java
public class MyRouters{
    //项目编译后通过apt生成如下方法
    public static HashMap<String, ClassBean> getRouteInfo(HashMap<String, ClassBean> routes) {
        route.put("/main/main", MainActivity.class);
        route.put("/module1/module1main", Module1MainActivity.class);
        route.put("/login/login", LoginActivity.class);
    }
}
```









- 参考

[原理1](https://www.jianshu.com/p/857aea5b54a8)

