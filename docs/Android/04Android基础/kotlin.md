# Kotlin

[TOC]

## 一、Kotlin

### 1. 简介

​		Kotlin是一个用于多平台应用的静态开发语言，由JetBrains开发。可以用于服务器端开发、Android开发、JavaScript开发、原生开发。其中kotlin源代码会被编译为.class文件，用于在JVM上运行。

### 2. 好处

- 代码更少、可读性强；
- 新语言特性：协程、扩展函数、lambdas、作用域、非空判断等。
- 与Java语言互通，支持多平台开发。

### 3. 问题

- 什么是内联函数？

  如果有一些函数被频繁调用，不断地入栈，会造成栈空间或**栈内存**的大量消耗。因此引入**inline修饰符**，即**内联函数**。

  ```c
  #include <stdio.h>  
   
  //函数定义为inline即:内联函数  
  inline char* dbtest(int a) 
  {  
  	return (i % 2 > 0) ? "奇" : "偶";  
  }   
    
  int main()  
  {  
  	int i = 0;  
  	for (i=1; i < 100; i++) 
  	{  
  		printf("i:%d    奇偶性:%s /n", i, dbtest(i));      
  	}  
  }  
  ```

     **上面的例子就是标准的内联函数的用法，使用inline修饰带来的好处我们表面看不出来，其实在内部的工作就是在每个for循环的内部任何调用dbtest(i)的地方都换成了(i%2>0)?"奇":"偶"这样就避免了频繁调用函数对栈内存重复开辟所带来的消耗。**

  **inline限制：**只适合函数体内代码简单的函数使用，不能包含循环不支持内部递归。

  **内联函数的工作原理**：Kotlin 编译器会将内联函数中的代码在编译时自动替换到调用它的地方，这样也就不存在运行时的开销了。

- Let/run/also/apply区别？

  Let、run都返回闭包执行结果，let有闭包参数；

  also、apply都返回调用者本身，also有闭包参数；

- Lambda语法

  匿名函数或闭包。

  ```java
  // java
  mName.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
      }
  });
  // kotlin 匿名函数
  mName.setOnClickListener { 
  }
  // kotlin 闭包
  val sum = { x:Int, y:Int -> 
      x + y
  } 
  ```

- 高阶函数

  **高阶函数**：接收另一个函数（函数类型）作为参数，或返回值的类型是另一个函数。

  ```kotlin
  // 基本定义规则
  // -> 左边部分是用来声明该函数接收什么参数，多个参数可用逗号隔开，若不接收参数则写空括号即可
  // -> 右边部分是用来声明该函数的返回值是什么类型，若没有返回值就使用 Unit (类似Java中的void)
  (String, Int) -> Unit
  
  // demo1
  fun example(func: (String, Int) -> Unit) {
      func("hello", 123) // 高阶函数允许让函数类型的参数来决定函数的执行逻辑。
  }
  // demo2
  // 这边第三个参数是一个接收两个整型参数并且返回值也是整型的函数类型参数
  fun num1AndNum2(num1: Int, num2: Int, operation: (Int, Int) -> Int): Int {
      val result = operation(num1, num2)
      return result
  }
  // 两数相加并返回
  fun plus(num1: Int, num2: Int): Int {
      return num1 + num2
  }
  
  // 两数相减并返回
  fun minus(num1: Int, num2: Int): Int {
      return num1 - num2
  }
  fun main() {
      val num1 = 100
      val num2 = 200
      val result1 = num1AndNum2(num1, num2, ::plus)  // ！！！
      val result2 = num1AndNum2(num1, num2, ::minus)
      println("result1 is $result1")
      println("result2 is $result2")
  }
  // 除了用上面的方式来调用高阶函数，Kotlin 也支持用 Lambda 表达式、匿名函数、成员引用等来调用高阶函数，如使用 Lambda 表达式来实现上述代码：
  fun main() {
      val num1 = 100
      val num2 = 200
      // !!!这样用 Lambda 表达式来调用就无需定义 plus() 和 minus() 函数了。
      val result1 = num1AndNum2(num1, num2) { n1, n2 ->
          n1 + n2
      }
      val result2 = num1AndNum2(num1, num2) { n1, n2 ->
          n1 - n2
      }
      println("result1 is $result1")
      println("result2 is $result2")
  }
  ```

- 扩展函数

  ```kotlin
  //扩展函数定义
  fun TextView.isBold() = this.apply { 
  	paint.isFakeBoldText = true
  }
  
  //扩展函数调用
  activity.find<TextView>(R.id.course_comment_tv_score).isBold()
  ```

  **原理：**扩展函数实际上就是一个对应Java中的静态函数，这个静态函数参数为接收者类型的对象，然后利用这个对象就可以访问这个类中的成员属性和方法了，并且最后返回一个这个接收者类型对象本身。这样在外部感觉和使用类的成员函数是一样的。

  ```kotlin
  public final class ExtendsionTextViewKt {//这个类名就是顶层文件名+“Kt”后缀，这个知识上篇博客有详细介绍
     @NotNull
     public static final TextView isBold(@NotNull TextView $receiver) {//扩展函数isBold对应实际上是Java中的静态函数，并且传入一个接收者类型对象作为参数
        Intrinsics.checkParameterIsNotNull($receiver, "$receiver");
        $receiver.getPaint().setFakeBoldText(true);//设置加粗
        return $receiver;//最后返回这个接收者对象自身，以致于我们在Kotlin中完全可以使用this替代接收者对象或者直接不写。
     }
  }
  ```

- 中缀表达式

  [参考](https://my.oschina.net/u/4135686/blog/3051463)



## 一 语法

### 1. Let also run apply

### 2. ?.

### 3. 闭包

## 二、扩展函数

### 1. 作用

​	对源代码或无法修改的第三方库进行扩展，可以添加方法和变量。

### 2. 原理

> 扩展函数实际上**就是一个对应Java中的静态函数**，这个静态函数参数为接收者类型的对象，然后利用这个对象就可以访问这个类中的成员属性和方法了，并且最后返回一个这个接收者类型对象本身。这样在外部感觉和使用类的成员函数是一样的。

```kotlin
// 1. 扩展函数
public fun File.readTextApp(charset:Charset = Charsets.UTF_8):String = readBytes().toString(charset)
// 2. 编译结果
public final class ExtendsionTextViewKt {//这个类名就是顶层文件名+“Kt”后缀，这个知识上篇博客有详细介绍
   @NotNull
   public static final TextView isBold(@NotNull TextView $receiver) {//扩展函数isBold对应实际上是Java中的静态函数，并且传入一个接收者类型对象作为参数
      Intrinsics.checkParameterIsNotNull($receiver, "$receiver");
      $receiver.getPaint().setFakeBoldText(true);//设置加粗
      return $receiver;//最后返回这个接收者对象自身，以致于我们在Kotlin中完全可以使用this替代接收者对象或者直接不写。
   }
}
```

### 三、内联函数

>    在Kotlin中每次声明一个Lambda表达式，就会在字节码中产生一个匿名类。该匿名类包含了一个invoke方法，作为Lambda的调用方法，每次调用的时候，还会创建一个新的对象。可想而知，Lambda虽然简洁，但是会增加额外的开销。**Kotlin 采用内联函数来优化Lambda带来的额外开销**。
>
>    invokedynamic虽然不错，但是Kotlin需要兼容Android最主流的Java版本SE6，这导致Kotlin无法使用invokedynamic来解决android平台Lambda开销的问题。所以Kotlin使用内联函数来解决这个问题，在Kotlin中使用inline关键字来修饰函数，这些函数就成了内联函数。它们的函数体在编译的时期被嵌入到每一个调用的地方，以减少额外生成的匿名类数，以及函数执行的时间开销。

[参考1](https://www.jianshu.com/p/be78824ce1c2)

[参考2](https://blog.csdn.net/zhangying1994/article/details/104712148)

## 四、协程



## 五、kotlinx-nio





