## C++编译原理

[TOC]

### 一、编译过程

```c++
// 测试例子main.cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```



#### 1. 预编译

**作用：**

- 处理 “#define”、“#include”、“#if”、等指令；
- 删除注释；
- 添加行号和文件名标识，以便于产生调试信息。

```java
// 1. 预处理命令 
g++ -E main.cpp -o hello.i 

// 2. hello.i 源代码1.3MB
# 1 "main.cpp"
# 1 "<built-in>" 1
# 1 "<built-in>" 3
# 373 "<built-in>" 3
# 1 "<command line>" 1
# 1 "<built-in>" 2
# 1 "main.cpp" 2
# 1 "/Library/Developer/CommandLineTools/usr/include/c++/v1/iostream" 1 3
# 37 "/Library/Developer/CommandLineTools/usr/include/c++/v1/iostream" 3
# 1 "/Library/Developer/CommandLineTools/usr/include/c++/v1/__config" 1 3
# 22 "/Library/Developer/CommandLineTools/usr/include/c++/v1/__config" 3
# 327 "/Library/Developer/CommandLineTools/usr/include/c++/v1/__config" 3
typedef __char16_t char16_t;
typedef __char32_t char32_t;
# 449 "/Library/Developer/CommandLineTools/usr/include/c++/v1/__config" 3
namespace std {
  inline namespace __1 {
  }
}
# 38 "/Library/Developer/CommandLineTools/usr/include/c++/v1/iostream" 2 3
# 1 "/Library/Developer/CommandLineTools/usr/include/c++/v1/ios" 1 3
# 215 "/Library/Developer/CommandLineTools/usr/include/c++/v1/ios" 3
# 1 "/Library/Developer/CommandLineTools/usr/include/c++/v1/iosfwd" 1 3
# 90 "/Library/Developer/CommandLineTools/usr/include/c++/v1/iosfwd" 3
# 1 "/Library/Developer/CommandLineTools/usr/include/c++/v1/wchar.h" 1 3
# 113 "/Library/Developer/CommandLineTools/usr/include/c++/v1/wchar.h" 3
。。。
# 41 "/Library/Developer/CommandLineTools/usr/include/c++/v1/iostream" 2 3
# 45 "/Library/Developer/CommandLineTools/usr/include/c++/v1/iostream" 3

namespace std {inline namespace __1 {

extern __attribute__ ((__visibility__("default"))) istream cin;
extern __attribute__ ((__visibility__("default"))) wistream wcin;

extern __attribute__ ((__visibility__("default"))) ostream cout;
extern __attribute__ ((__visibility__("default"))) wostream wcout;

extern __attribute__ ((__visibility__("default"))) ostream cerr;
extern __attribute__ ((__visibility__("default"))) wostream wcerr;
extern __attribute__ ((__visibility__("default"))) ostream clog;
extern __attribute__ ((__visibility__("default"))) wostream wclog;

} }
# 2 "main.cpp" 2

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}  
```

#### 2. 编译

**作用：**

- 将预处理文件进行语法、语义分析和优化后生成汇编代码文件。

```java
// 1. 预处理命令 
g++ -S main.cpp -o hello.s

// 2. hello.s 源代码31KB
  	.section	__TEXT,__text,regular,pure_instructions
	.macosx_version_min 10, 13
	.globl	_main                   ## -- Begin function main
	.p2align	4, 0x90
_main:                                  ## @main
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	subq	$32, %rsp
	movq	__ZNSt3__14coutE@GOTPCREL(%rip), %rdi
	leaq	L_.str(%rip), %rsi
	movl	$0, -20(%rbp)
	callq	__ZNSt3__1lsINS_11char_traitsIcEEEERNS_13basic_ostreamIcT_EES6_PKc
	leaq	__ZNSt3__14endlIcNS_11char_traitsIcEEEERNS_13basic_ostreamIT_T0_EES7_(%rip), %rsi
	movq	%rax, -8(%rbp)
	movq	%rsi, -16(%rbp)
	movq	-8(%rbp), %rdi
	callq	*-16(%rbp)
	xorl	%ecx, %ecx
	movq	%rax, -32(%rbp)         ## 8-byte Spill
	movl	%ecx, %eax
	addq	$32, %rsp
	popq	%rbp
	retq
	.cfi_endproc
                                        ## -- End function
	.globl	__ZNSt3__1lsINS_11char_traitsIcEEEERNS_13basic_ostreamIcT_EES6_PKc ## -- Begin function _ZNSt3__1lsINS_11char_traitsIcEEEERNS_13basic_ostreamIcT_EES6_PKc
	.weak_definition	__ZNSt3__1lsINS_11char_traitsIcEEEERNS_13basic_ostreamIcT_EES6_PKc
	.p2align	4, 0x90
__ZNSt3__1lsINS_11char_traitsIcEEEERNS_13basic_ostreamIcT_EES6_PKc: ## @_ZNSt3__1lsINS_11char_traitsIcEEEERNS_13basic_ostreamIcT_EES6_PKc
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	subq	$32, %rsp
	movq	%rdi, -8(%rbp)
	movq	%rsi, -16(%rbp)
  。。。
  	.cfi_endproc
                                        ## -- End function
	.globl	__ZNSt3__111char_traitsIcE3eofEv ## -- Begin function _ZNSt3__111char_traitsIcE3eofEv
	.weak_definition	__ZNSt3__111char_traitsIcE3eofEv
	.p2align	4, 0x90
__ZNSt3__111char_traitsIcE3eofEv:       ## @_ZNSt3__111char_traitsIcE3eofEv
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	movl	$4294967295, %eax       ## imm = 0xFFFFFFFF
	popq	%rbp
	retq
	.cfi_endproc
                                        ## -- End function
	.section	__TEXT,__cstring,cstring_literals
L_.str:                                 ## @.str
	.asciz	"Hello, World!"


.subsections_via_symbols  
```

#### 3. 汇编

**作用：**

- 将汇编代码转换为机器指令(查找汇编指令和机器指令对照表即可)。

```java
 // 1. 预处理命令 
 g++ -c main.cpp  -o hello.o
 // 2. hello.o 源代码8KB
cffa edfe 0700 0001 0300 0000 0100 0000
0400 0000 5002 0000 0020 0000 0000 0000
1900 0000 d801 0000 0000 0000 0000 0000
0000 0000 0000 0000 0000 0000 0000 0000
3011 0000 0000 0000 7002 0000 0000 0000
3011 0000 0000 0000 0700 0000 0700 0000
0500 0000 0000 0000 5f5f 7465 7874 0000
0000 0000 0000 0000 5f5f 5445 5854 0000
0000 0000 0000 0000 0000 0000 0000 0000
5b0d 0000 0000 0000 7002 0000 0400 0000
a013 0000 2b00 0000 0004 0080 0000 0000
0000 0000 0000 0000 5f5f 6763 635f 6578
6365 7074 5f74 6162 5f5f 5445 5854 0000
0000 0000 0000 0000 5c0d 0000 0000 0000
3001 0000 0000 0000 cc0f 0000 0200 0000
0000 0000 0000 0000 0000 0000 0000 0000
0000 0000 0000 0000 5f5f 6373 7472 696e
6700 0000 0000 0000 5f5f 5445 5854 0000
0000 0000 0000 0000 8c0e 0000 0000 0000
0e00 0000 0000 0000 fc10 0000 0000 0000  
...   
```

#### 4. 链接

**作用：**

- 稍后学习。

```java
 // 1. 预处理命令 
 g++ main.cpp
 // 2. hello.o 源代码16KB
cffa edfe 0700 0001 0300 0080 0200 0000
1000 0000 8005 0000 8580 2100 0000 0000
1900 0000 4800 0000 5f5f 5041 4745 5a45
524f 0000 0000 0000 0000 0000 0000 0000
0000 0000 0100 0000 0000 0000 0000 0000
0000 0000 0000 0000 0000 0000 0000 0000
0000 0000 0000 0000 1900 0000 2802 0000
5f5f 5445 5854 0000 0000 0000 0000 0000
0000 0000 0100 0000 0020 0000 0000 0000
0000 0000 0000 0000 0020 0000 0000 0000
0700 0000 0500 0000 0600 0000 0000 0000
5f5f 7465 7874 0000 0000 0000 0000 0000
5f5f 5445 5854 0000 0000 0000 0000 0000
a00f 0000 0100 0000 5b0d 0000 0000 0000  
```

