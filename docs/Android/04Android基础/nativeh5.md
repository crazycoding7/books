# Native和H5交互协议

### 简介

>三端易用的现代跨平台 Javascript bridge， 通过它，你可以在Javascript和原生之间同步或异步的调用彼此的函数.

目前github上也有一些开源的，其中使用最广的非WebViewJavascriptBridge、JsBridge莫属，然而，最近刚开源了一个新项目[DSBridge](https://github.com/wendux/DSBridge-Android)，号称最好用的javascript bridge。笔者仔细对比了一下，DSBridge分分钟秒杀所有啊。

####特性

1. Android、IOS、Javascript 三端易用，轻量且强大、安全且健壮。
2. 同时支持同步调用和异步调用
3. 支持以类的方式集中统一管理API
4. 支持API命名空间
5. 支持调试模式
6. 支持API存在性检测
7. 支持进度回调：一次调用，多次返回
8. 支持Javascript关闭页面事件回调
9. 支持Javascript 模态/非模态对话框
10. 支持腾讯X5内核

###使用

1. Implement APIs in a Java class

   ```java
   public class JsApi{
       //for synchronous invocation
       @JavascriptInterface
       public String testSyn(Object msg)  {
           return msg + "［syn call］";
       }
   
       //for asynchronous invocation
       @JavascriptInterface
       public void testAsyn(Object msg, CompletionHandler handler) {
           handler.complete(msg+" [ asyn call]");
       }
   }
   ```

   For security reason, Java APIs must be with "@JavascriptInterface" annotation .

2. Add API object to DWebView .

   ```java
   import wendu.dsbridge.DWebView
   ...
   DWebView dwebView= (DWebView) findViewById(R.id.dwebview);
   dwebView.addJavascriptObject(new JsApi(), null);
   ```

3. Call Native (Java/Object-c/swift) API in Javascript, and register javascript API.

   - Init dsBridge

     ```javascript
     //cdn
     //<script src="https://unpkg.com/dsbridge@3.1.3/dist/dsbridge.js"> </script>
     //npm
     //npm install dsbridge@3.1.3
     var dsBridge=require("dsbridge")
     ```

   - Call Native API and register a javascript API for Native invocation.

     ```javascript
     //Call synchronously 
     var str=dsBridge.call("testSyn","testSyn");
     
     //Call asynchronously
     dsBridge.call("testAsyn","testAsyn", function (v) {
       alert(v);
     })
     
     //Register javascript API for Native
      dsBridge.register('addValue',function(l,r){
          return l+r;
      })
     
     ```

4. Call Javascript API in java

   ```java
   dwebView.callHandler("addValue",new Object[]{3,4},new OnReturnValue<Integer>(){
        @Override
        public void onValue(Integer retValue) {
           Log.d("jsbridge","call succeed,return value is "+retValue);
        }
   });
   ```

### 原理

#### Java call JavaScript

封装为webview.callHandler()方法，最终调用：

```java
private void _evaluateJavascript(String script) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            DWebView.super.evaluateJavascript(script, null);
        } else {
            loadUrl("javascript:" + script);
        }
    }
```

#### JavaScript call Java

使用webView.addJavascriptObject(new JsApi(), null)提供java对象到js上下文环境。

### 协议

#### 外部唤起APP

在对应清单文件配置，使用scheme协议；

格式如：`scheme:[//authority][/path][?query][#fragment]`

- scheme − 对于 URL, 是访问资源的协议名称；对其他URI,是分配标识符的规范的名称(协议名称)
- authority − 可选的组成用户授权信息部分，主机及端口（可选）(主机名称)
- path − 用于在scheme和authority内标识资源(路径)
- query − 与路径一起的附加数据用于标识资源。对于url是查询字符串
- fragment − 资源特定部分的可选标识符

```
hxdapp://message:8888/page1?msgId=10011002
hxdapp://hexindai.com
标准格式：
hxdapp://hexindai.com:2048/路由地址?userId=1000&username=张三
```

####内部通讯

使用自定义的DSBridge，交互方式使用json.

#####js调用java方法

统一调用单个java方法：

````java
@JavascriptInterface
        fun callJavaExec(jsonParams: Any): String {
            Log.e(tag, "jsonParams = $jsonParams")
            return handlerBusiness(jsonParams.toString())
        }
````

json格式：

```json
{
    "scheme":"hxdapp",         // 固定参数
    "target":"路由或方法名称",   // 默认先匹配路由列表，不存在调用方法；使用android@ios符号区分
    "params":{
        "phone":"18600588854"
    }
}
```

##### java调用js方法

```kotlin
// 正式使用
dwv_web_view.callHandler("methodName", arrayOf("param1", "param2", "param3"), OnReturnValue<String> { jsonValue ->
            Log.e(tag, " json result = $jsonValue")
 })
```

返回json格式

```json
{
		"code":1
		"message":""
		"data":{
        "phone":"18600588854"
    }
}
```