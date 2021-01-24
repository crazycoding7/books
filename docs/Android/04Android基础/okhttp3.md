### Okhttp

#### Introduction

OkHttp是Square开源的轻量级框架，是一款现代、高效、快速的Android版Http client。

#### 优势

它的设计和实现的首要目标便是高效，有如下特性：

• 支持[SPDY](https://www.cnblogs.com/bluestorm/p/7382091.html)(当初Google为了提高HTTP性能，做出了SPDY，它就是HTTP/2的前身，后来也发展成为HTTP/2的标准)、连接池、Gzip和Http缓存（记住第一条可直接推及记起下面四条，感觉萌萌哒^_^）;

• 支持SPDY，因此可以同一IP多个连接共享同一个socket（SPDY并不是一种用于替代HTTP的协议，而是对HTTP协议的增强，具体请自行百度）；

• 在Http/2不可用时, 连接池可极大减少延时；

• 支持Gzip压缩响应体，降低传输内容的大小；

• 支持Http缓存，避免重复请求；

• 服务器配置多IP情况下，当前IP请求失败，支持自动切换到其他IP；

• 使用Okio来简化数据的访问与存储，提高性能；

• OkHttp还处理了代理服务器问题和SSL握手失败问题；

#### 源码精读

- ConnectionPool  socket连接池，节省tcp的连接释放以及TLS协议的握手时间；
- Http2xStream 支持请求[多路复用](http://www.blogjava.net/yongboy/archive/2015/03/19/423611.aspx)，同一IP多个连接共享同一个socket;
- Dispatcher  线程分发执行，任务队里维护；
- HttpEngine  http请求处理类；

![classes](/images/ok_http_classes.png)

- **引用知识点**

[1. Tcp三次握手四次挥手](https://www.cnblogs.com/Andya/p/7272462.html)

[2. okio](https://www.jianshu.com/p/3e0935bf2d45)

