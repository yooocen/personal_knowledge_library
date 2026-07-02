---
tags:
  - linux
  - gdb
---
# 使用 QEMU + GDB 调试 Linux 内核进程创建过程

## 环境要求

- Linux 内核源码（本文以 `linux-6.12.85` 为例）
- `qemu-system-x86_64`
- `gdb`（支持多架构）
- `gcc`、`cpio`

---

## 1. 配置内核（开启调试符号）

```bash
cd /path/to/linux-6.12.85

# 开启 DEBUG_INFO 和 GDB 脚本支持
scripts/config --file .config \
  --disable DEBUG_INFO_NONE \
  --enable DEBUG_INFO_DWARF_TOOLCHAIN_DEFAULT \
  --enable DEBUG_INFO \
  --enable GDB_SCRIPTS

# （可选）避免证书问题
scripts/config --file .config \
  --set-str CONFIG_SYSTEM_TRUSTED_KEYS "" \
  --set-str CONFIG_SYSTEM_REVOCATION_KEYS ""
```

验证配置是否生效：

```bash
grep -E 'CONFIG_DEBUG_INFO|CONFIG_GDB_SCRIPTS' .config
```

输出应包含：

```
CONFIG_DEBUG_INFO_DWARF_TOOLCHAIN_DEFAULT=y
CONFIG_DEBUG_INFO=y
CONFIG_GDB_SCRIPTS=y
```

---

## 2. 编译内核

```bash
make -j$(nproc)
```

编译成功后会生成：

- `vmlinux` — 带调试符号的 ELF（约 300~400 MB）
- `arch/x86/boot/bzImage` — 压缩后的内核镜像

---

## 3. 创建最小 initramfs

创建一个简单的 C 程序作为 init 进程，它会调用 `fork()` 创建子进程，方便我们观察进程创建过程。

```bash
mkdir -p /tmp/rootfs
```

**编写 init 程序** `/tmp/rootfs/init.c`：

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <sys/mount.h>

int main(void)
{
    mount("none", "/proc", "proc", 0, NULL);
    printf("init: starting...\n");

    for (int i = 0; i < 3; i++) {
        pid_t pid = fork();
        if (pid == 0) {
            printf("child[%d]: pid=%d ppid=%d\n", i, getpid(), getppid());
            _exit(0);
        }
    }

    while (wait(NULL) > 0)
        ;
    printf("init: all children done, looping...\n");
    for (;;) pause();
    return 0;
}
```

**编译并打包 initramfs**：

```bash
gcc -static -o /tmp/rootfs/init /tmp/rootfs/init.c
mkdir -p /tmp/rootfs/proc /tmp/rootfs/sys /tmp/rootfs/dev
cd /tmp/rootfs
find . | cpio -H newc -o > /tmp/initramfs.cpio
```

---

## 4. 启动 QEMU（等待 GDB 连接）

```bash
cd /path/to/linux-6.12.85

qemu-system-x86_64 \
  -kernel arch/x86/boot/bzImage \
  -initrd /tmp/initramfs.cpio \
  -append "console=ttyS0 nokaslr" \
  -s -S \
  -nographic
```

参数说明：

| 参数 | 作用 |
|------|------|
| `-kernel` | 指定内核镜像 |
| `-initrd` | 指定 initramfs |
| `-append "console=ttyS0 nokaslr"` | 串口输出 + 关闭 KASLR（否则 GDB 无法匹配符号地址） |
| `-s` | 等价于 `-gdb tcp::1234`，开启 GDB 服务端 |
| `-S` | 启动时暂停 CPU，等待 GDB 发继续指令 |
| `-nographic` | 纯命令行模式（无图形窗口） |

此时 QEMU 会暂停在第一条指令，等待 GDB 连接。

---

## 5. 连接 GDB 并设置断点

**在新终端中执行**：

```bash
cd /path/to/linux-6.12.85
gdb vmlinux
```

在 GDB 中：

```gdb
(gdb) target remote :1234
(gdb) source scripts/gdb/vmlinux-gdb.py   # 加载内核 GDB 辅助脚本（可选）
```

### 关键断点

```gdb
# fork/clone 统一入口
b kernel_clone

# 复制进程结构体
b copy_process

# 分配并复制 task_struct
b dup_task_struct

# 调度实体初始化
b sched_fork

# 新进程加入就绪队列
b wake_up_new_task

# 用户态 fork 系统调用
b __do_sys_clone
```

### 带自动打印的断点（更高效）

```gdb
b kernel_clone
commands
  silent
  printf "=== kernel_clone === flags=0x%lx\n", args->flags
  bt 10
  continue
end

b wake_up_new_task
commands
  silent
  printf "=== wake_up_new_task === child PID=%d\n", p->pid
  bt 6
  continue
end
```

设置完断点后，让内核继续执行：

```gdb
(gdb) continue
```

---

## 6. 观察输出

内核会全速运行，每次命中断点时会打印信息。你会看到以下流程：

### 第一步：创建 init 进程（PID 1）

```
=== kernel_clone === flags=0x800300
#0  kernel_clone (args=...) at kernel/fork.c:2781
#1  user_mode_thread (fn=kernel_init, ...) at kernel/fork.c:2899
#2  rest_init () at init/main.c:724
#3  start_kernel () at init/main.c:1117
#4  x86_64_start_reservations () at arch/x86/kernel/head64.c:507
```

说明：`start_kernel()` → `rest_init()` → `user_mode_thread(kernel_init)` → 创建 PID 1。

### 第二步：kthreadd 批量创建内核线程

```
=== kernel_clone === flags=0x800700
#0  kernel_clone at kernel/fork.c:2781
#1  kernel_thread (fn=kthread, ...) at kernel/fork.c:2883
#2  create_kthread () at kernel/kthread.c:412
#3  kthreadd () at kernel/kthread.c:767
```

说明：`kthreadd`（PID 2）调用 `create_kthread` 创建各类内核工作线程（workqueue、kworker 等），flags `0x800700` = `CLONE_VM | CLONE_FS | CLONE_FILES | CLONE_SIGHAND`。

### 第三步：用户态 fork 调用

```
=== kernel_clone === flags=0x1200000
#0  kernel_clone at kernel/fork.c:2781
#1  __do_sys_clone (...) at kernel/fork.c:2964
#2  do_syscall_x64 () at arch/x86/entry/common.c:47
#3  do_syscall_64 () at arch/x86/entry/common.c:78
#4  entry_SYSCALL_64 () at arch/x86/entry/entry_64.S:121
```

说明：我们的 init 程序调用 `fork()` 触发系统调用，经 `entry_SYSCALL_64` 进入内核。flags `0x1200000` = `CLONE_CHILD_SETTID | CLONE_CHILD_CLEARTID`。

### 第四步：新进程被调度

```
=== wake_up_new_task === child PID=54
```

`wake_up_new_task` 将新进程放入运行队列，等待调度执行。

---

## 7. 关键源码位置汇总

| 函数 | 文件 | 行号 | 作用 |
|------|------|------|------|
| `start_kernel` | `init/main.c` | 915 | 内核 C 入口 |
| `rest_init` | `init/main.c` | 724 | 创建 init 线程 |
| `user_mode_thread` | `kernel/fork.c` | 2899 | 创建用户态辅助线程 |
| `kernel_clone` | `kernel/fork.c` | 2781 | **所有 fork/clone 的统一入口** |
| `copy_process` | `kernel/fork.c` | 2158 | 深拷贝进程结构体 |
| `dup_task_struct` | `kernel/fork.c` | 1123 | 分配并复制 `task_struct` |
| `sched_fork` | `kernel/sched/core.c` | 4683 | 初始化调度实体 |
| `wake_up_new_task` | `kernel/sched/core.c` | 4821 | 新进程加入就绪队列 |
| `__do_sys_clone` | `kernel/fork.c` | 2964 | `clone` 系统调用实现 |
| `do_syscall_64` | `arch/x86/entry/common.c` | 78 | x86-64 系统调用分发 |
| `entry_SYSCALL_64` | `arch/x86/entry/entry_64.S` | 121 | 系统调用汇编入口 |

---

## 8. 进程创建完整调用链

```
用户态 fork()
  │
  ▼
entry_SYSCALL_64            arch/x86/entry/entry_64.S:121   ← 汇编入口
  │
  ▼
do_syscall_64()             arch/x86/entry/common.c:78
  │
  ▼
__do_sys_clone()            kernel/fork.c:2964
  │
  ▼
kernel_clone()              kernel/fork.c:2781   ← 统一入口
  │
  ├── copy_process()        kernel/fork.c:2158   ← 复制进程
  │     ├── dup_task_struct()                    ← 分配 task_struct
  │     ├── copy_mm()                            ← 复制地址空间
  │     ├── copy_fs()                            ← 复制文件系统
  │     ├── copy_files()                         ← 复制文件描述符
  │     ├── copy_sighand()                       ← 复制信号处理
  │     └── sched_fork()     kernel/sched/core.c:4683
  │
  └── wake_up_new_task()    kernel/sched/core.c:4821  ← 激活新进程
```

---

## 9. 进阶技巧

### 查看当前进程信息

```gdb
(gdb) p current->pid
(gdb) p current->comm
(gdb) p current->parent->pid
```

### 查看 fork flags 含义

```gdb
(gdb) p/x args->flags
```

常见 flags：

| flags | 含义 |
|-------|------|
| `0x800300` | CLONE_VM \| CLONE_VFORK（内核线程） |
| `0x800700` | CLONE_VM \| CLONE_FS \| CLONE_FILES \| CLONE_SIGHAND（内核线程） |
| `0x1200000` | CLONE_CHILD_SETTID \| CLONE_CHILD_CLEARTID（用户态线程） |

### 单步跟踪 copy_process

```gdb
b copy_process
c               # 等到断点命中
n               # 或 s，一步步跟进子函数
```

### 使用内核 GDB 脚本（可选）

```bash
# 添加安全路径
echo "add-auto-load-safe-path /path/to/linux-6.12.85/scripts/gdb/vmlinux-gdb.py" \
  >> ~/.config/gdb/gdbinit
```

然后可在 GDB 中使用 `lx-dmesg`、`lx-task` 等辅助命令。


# 我执行的一些问题总结
(gdb) p current->pid
No symbol "current" in current context.

说明我当前不在内核态