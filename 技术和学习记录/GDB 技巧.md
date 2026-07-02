---
tags:
  - linux
  - gdb
---
[[gdb.pdf]]

# 查看帮助文档
`man gdb`

# tui
在gdb运行中执行命令 `tui enable`

# 运行控制
## 进入函数

```
steps
```

例如：

```
foo();
```

执行：

```
s
```

进入 `foo()`。

---

## 执行到当前函数返回

```
finish
```

---

## 执行指定行

```
until 100
```

运行到第100行。

---

# 断点

## 查看断点

```
info break
```

---

## 按行打断点

```
b 100
```

第100行。

---

## 按函数打断点

```
b main
b do_fork
b copy_process
```

学习 Linux 内核时特别常用。

---

## 按文件+行

```
b fork.c:2500
```

---

## 条件断点

```
b 100 if i == 5
```

只有：

```
i == 5
```

才停下来。

---

## 删除断点

```
delete 1
```

删除编号1。

全部删除：

```
delete
```

---

## 禁用断点

```
disable 1
```

恢复：

```
enable 1
```

---

# 查看源码

查看当前位置：

```
list
l
```

---

查看指定函数：

```
list main
```

---

查看指定行：

```
list 100
```

---

查看前后源码：

```
l -
l +
```

---

# 查看调用栈

这是最重要的命令之一。

```
bt
```

即：

```
backtrace
```

输出：

```
#0 foo()
#1 bar()
#2 main()
```

表示：

```
main
 └─ bar     
	 └─ foo
```

当前停在 foo。

---

# 切换栈帧

查看所有栈帧：

```
info frame
```

---

切换：

```
frame 1frame 2
```

例如：

```
#0 foo
#1 bar
#2 main
```

```
frame 2
```

切回 main。

---

# 查看变量

## 打印变量

```
p x
```

---

打印结构体

```
p task
```

---

打印指针内容

```
p *task
```

---

十六进制

```
p/x x
```

---

二进制

```
p/t x
```

---

## 自动显示变量

```
display x
```

每次停下来自动打印。

取消：

```
undisplay 1
```

---

# 查看内存

## 查看地址

```
p &x
```

---

## 查看内存内容

[[gdb x命令]]

格式：

```
x/FMT ADDRESS
```

例如：

```
x/16xb ptr
```

含义：

```
16  个
x   十六进制
b   byte
```

---

查看字符串

```
x/s ptr
```

---

查看指令

```
x/10i $pc
```

查看当前 PC 附近10条汇编。

---

# 寄存器

查看全部寄存器：

```
info registers
```

---

查看单个寄存器：

```
p $ripp 
p $rspp 
p $rbp
```

x86-64 常看：

```
RIP
RSP
RBP
RAX
RBX
RCX
RDX
```

---

# 多线程

查看线程：

```
info threads
```

---

切换线程：

```
thread 2
```

---

查看所有线程栈：

```
thread apply all bt
```

排查死锁时非常有用。