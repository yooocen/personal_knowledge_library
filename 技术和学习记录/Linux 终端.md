---
tags:
  - linux
---
 request_threaded_irq是干啥的

```

• request_threaded_irq() 是 Linux 驱动用来 注册中断处理函数 的接口，比
  request_irq() 更完整。

  它做的事可以概括成：

  给某个 irq 注册：
  1. 一个硬中断处理函数 handler
  2. 可选的线程化中断处理函数 thread_fn
  3. 中断 flags、名字、设备标识 dev_id

  函数原型在 include/linux/interrupt.h:150：

  int request_threaded_irq(unsigned int irq,
                           irq_handler_t handler,
                           irq_handler_t thread_fn,
                           unsigned long flags,
                           const char *name,
                           void *dev);

  参数含义：

  irq        要注册的 Linux 中断号
  handler    硬中断上下文里的处理函数，执行要很快
  thread_fn  线程上下文里的处理函数，可以做较慢的工作
  flags      IRQF_SHARED 等标志
  name       /proc/interrupts 里显示的名字
  dev        传给 handler/thread_fn 的设备私有指针

  它的实现入口在 kernel/irq/manage.c:2148。

  核心流程是：

  request_threaded_irq()
    -> 检查参数
    -> desc = irq_to_desc(irq)
    -> 分配 struct irqaction
    -> action->handler = handler
    -> action->thread_fn = thread_fn
    -> action->flags = flags
    -> action->name = name
    -> action->dev_id = dev
    -> __setup_irq(irq, desc, action)
    -> 把 action 挂到 desc->action 链表

  request_irq() 其实只是它的简化包装，在 include/linux/
  interrupt.h:168：

  static inline int request_irq(unsigned int irq, irq_handler_t
  handler,
                                unsigned long flags, const char *name,
  void *dev)
  {
      return request_threaded_irq(irq, handler, NULL,
                                  flags | IRQF_COND_ONESHOT, name,
  dev);
  }

  所以：

  request_irq()

  等价于：

  只注册硬中断 handler，不注册 thread_fn

  而 request_threaded_irq() 可以注册“上半部 + 线程化下半部”。

  典型用法：

  request_threaded_irq(irq,
                       my_irq_handler,
                       my_irq_thread,
                       IRQF_SHARED,
                       "mydev",
                       dev);

  中断来了以后大概是：

  CPU 进入中断
    -> 调 my_irq_handler()
    -> 如果返回 IRQ_WAKE_THREAD
    -> 唤醒 my_irq_thread()
    -> 在线程上下文继续处理

  简单说：

  request_threaded_irq() = 给 irq 安装中断处理动作，并支持把耗时工作放
  到内核线程里做。

```

› 入参的irq就是vector吗
```

• 不是。request_threaded_irq() 入参里的 irq 不是 vector，而是 Linux 内
  核的软件中断号。

  request_threaded_irq(unsigned int irq, ...)

  这里的 irq 对应的是：

  Linux IRQ number

  不是：

  CPU interrupt vector

  关系是：

  设备/中断控制器
          ↓
  Linux 分配 irq
          ↓
  驱动调用 request_threaded_irq(irq, ...)
          ↓
  内核把 handler 挂到 irq_desc[irq]

  而中断真正发生时，在 x86 上大概是另一条路径：

  CPU 收到 vector
          ↓
  vector_irq[vector]
          ↓
  找到 struct irq_desc
          ↓
  desc->irq_data.irq 里面才是 Linux irq
          ↓
  调用这个 irq 上注册的 handler

  所以二者关系是：

  vector -> irq_desc -> irq

  不是：

  irq == vector

  举个例子，可能是：

  vector = 0x51
  irq    = 34

  CPU 收到的是 0x51 这个 vector，但 Linux 驱动注册处理函数时用的是 irq
  34。

  为什么要分开？

  因为 vector 是 CPU/APIC 层面的入口编号，范围有限，x86 上通常是
  0~255；而 irq 是 Linux 的抽象中断号，要适配不同硬件、中断控制器、
  MSI/MSI-X、GPIO 中断、虚拟中断等。Linux 不想让驱动直接关心 CPU 的
  vector。

  驱动一般看到的是：

  pdev->irq

  或者从设备树/ACPI/MSI 分配得到的 irq，然后调用：

  request_threaded_irq(pdev->irq, handler, thread_fn, flags, name,
  dev);

  驱动通常不直接处理 vector。
```