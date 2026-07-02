---
tags:
  - 寄存器
  - 汇编
---
在 x86-64 架构中，`RSP` 和 `RBP` 都与栈（Stack）有关，但职责不同。

|寄存器|全称|作用|
|---|---|---|
|`RSP`|Stack Pointer|指向当前栈顶|
|`RBP`|Base Pointer（Frame Pointer）|指向当前函数栈帧的基址|

---

## 1. RSP：栈顶指针

`RSP` 始终指向当前栈顶。

例如：

```asm
push rax  将rax的值放到栈顶
```

CPU 实际做了：

```asm
sub rsp, 8
mov [rsp], rax
```

此时：

```text
高地址
│
│
├─────────┐
│         │
├─────────┤
│   rax   │ ← rsp
└─────────┘
低地址
```

再执行：

```asm
pop rax  将栈顶的值放到rax
```

相当于：

```asm
mov rax, [rsp]
add rsp, 8
```

因此：

> RSP 会随着 push/pop、函数调用、局部变量分配不断变化。

---

## 2. RBP：栈帧基址
前置知识：
==返回地址：call func 执行时，CPU 把 下一条指令的地址（即 call 之后那条指令的地址）压入栈，然后跳转到 func。ret 时再从栈顶弹出这个地址并跳转回去。==

RBP 通常用于固定当前位置，方便访问参数和局部变量。

典型函数：

```c
int add(int a, int b)
{
    int c = a + b;
    return c;
}
```

编译后的经典函数序言（prologue）：

```asm
push rbp
mov rbp, rsp
sub rsp, 16
```

执行过程：（以下演示有些是低高地址（为了显示出逻辑上的栈的样子），有些是高低地址（正常栈是往低地址扩展的））

### 调用前

```text
      rsp
       ↓
┌─────────────┐
│ return addr │  ← call 压入
└─────────────┘

```

---

### push rbp

```text
      rsp
       ↓
┌─────────────┐
│   old rbp   │  ← 刚压入
├─────────────┤
│ return addr │
└─────────────┘

```

这么做的原因：
为了函数返回后 caller 能恢复它自己的 rbp。
每个函数都有自己的栈帧。push rbp 保存 caller 的 rbp 值，函数返回前 pop rbp 恢复它，caller 继续用自己原来的 rbp 找自己的局部变量。
如果不保存，当前函数把 rbp 改了，返回后 caller 的 rbp 就丢了，它再也找不到自己的局部变量了。

---

### mov rbp,rsp

```text
      rbp
       ↓
      rsp
       ↓
┌─────────────┐
│   old rbp   │
├─────────────┤
│ return addr │
└─────────────┘

```

---

### sub rsp,16

为局部变量腾空间：

```text
高HIGH ADDR
┌─────────────┐
│    args     │  ← rbp+16（超过 6 个的参数）
├─────────────┤
│ return addr │  ← rbp+8
├─────────────┤
│   old rbp   │  ← rbp （栈帧基址）
├─────────────┤
│  local var  │  ← rbp-8
├─────────────┤
│  local var  │  ← rbp-16, rsp
└─────────────┘
LOW ADDR
```

此时：

- `RBP` 不变
- `RSP` 会继续变化

所以访问局部变量时：

```asm
mov eax, [rbp-4]
```

访问参数时：

```asm
mov eax, [rbp+16]
```

不需要关心 `RSP` 当前在哪里。

---

## 3. 为什么需要 RBP

因为 `RSP` 经常变化。

例如：

```asm
sub rsp, 32

push rax
push rbx
push rcx
```

此时：

```text
rsp
```

已经移动了很多次。

如果用 `rsp` 找局部变量：

```asm
mov eax, [rsp+?]
```

偏移量会不断变化。

而：

```asm
rbp
```

固定不动。

所以：

```asm
mov eax, [rbp-8]
```

永远是同一个局部变量。

---

## 4. 现代编译器经常省略 RBP

你可能看到：

```asm
sub rsp, 32
```

没有：

```asm
push rbp
mov rbp, rsp
```

这是因为现代编译器默认开启：

```text
-fomit-frame-pointer
```

直接把 `RBP` 当普通寄存器使用。

例如：

```asm
foo:
    sub rsp, 32
    ...
    add rsp, 32
    ret
```

此时：

- `RBP` 不再是 Frame Pointer
- 只有 `RSP` 管理栈

这样能多出一个通用寄存器，提高性能。

---

## 5. GDB 中观察

查看：

```gdb
info registers rsp rbp
```

例如：

```text
rsp 0x7fffffffdc80
rbp 0x7fffffffdca0
```

查看栈：

```gdb
x/20gx $rsp
```

查看当前栈帧：

```gdb
info frame
```

查看调用链：

```gdb
bt
```

当编译时保留 Frame Pointer：

```bash
gcc -g -O0 -fno-omit-frame-pointer test.c
```

你会更容易看懂函数调用和栈帧结构。

---

一句话概括：

- **RSP = 当前栈顶，时刻变化。**
- **RBP = 当前函数栈帧基准点，通常固定不变。**
- **RSP 负责管理栈；RBP 负责定位局部变量和参数。**
- **现代优化编译中，RBP 往往被省略，调试时才常保留。**