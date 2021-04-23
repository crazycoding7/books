# Arouter

[TOC]

## 一、原理

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

