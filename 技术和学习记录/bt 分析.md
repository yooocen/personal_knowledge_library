---
tags:
  - gdb
tag:
---
![[Pasted image 20260629224445.png]]


这是一次 **Linux 内核调用栈（backtrace，`bt`）**，而且是一次非常典型的 **`stat()` 查询文件属性** 的路径解析流程。

先给出整体结论：

> **用户态程序调用了 `stat()`，内核为了找到目标文件，一路经过 VFS 路径解析（`path_lookupat`）→ ext4 查目录项（`ext4_lookup`）→ 返回 inode → 再执行 `vfs_stat`。**

整个调用链几乎就是 Linux VFS 的标准流程。

---

# 一、先从最下面开始看

GDB 的 bt 一定要**倒着读**。

最底下：

```text
#14 entry_SYSCALL_64
#13 do_syscall_64
#12 do_syscall_x64
```

说明：

程序执行了

```asm
syscall
```

CPU进入内核：

```
用户态
    │
syscall
    │
entry_SYSCALL_64
```

这里就是：

```
arch/x86/entry/entry_64.S
```

里面的入口。

---

然后：

```
#13 do_syscall_64
```

这里开始：

Linux 根据

```
rax = syscall number
```

去查 syscall table。

假设：

```
stat()
```

那么会找到：

```
__x64_sys_stat
```

---

## 所以：

```
entry_SYSCALL_64
      ↓
do_syscall_64
      ↓
__x64_sys_stat
```

---

# 二、真正进入 stat

下面几层：

```
#11 __x64_sys_stat
#10 __se_sys_stat
#9  __do_sys_statx
#8  do_statx
#7  vfs_statx
```

这就是：

```
SYSCALL_DEFINE(stat)
```

展开后的调用。

Linux syscall 宏一般都是：

```
__x64_sys_xxx
      ↓
__se_sys_xxx
      ↓
__do_sys_xxx
```

真正逻辑一般在：

```
__do_sys_statx()
```

里面。

---

这里可以理解成：

```
用户
↓

stat()

↓

__x64_sys_stat()

↓

do_statx()
```

---

# 三、开始路径解析（重点）

然后：

```
#6 filename_lookup
#5 path_lookupat
#4 lookup_last
#3 walk_component
```

这一段就是 Linux VFS 最经典的一套路径解析。

假设：

程序：

```c
stat("/home/test/a.txt")
```

Linux 会：

```
/
 ↓
home
 ↓
test
 ↓
a.txt
```

一级一级找。

Linux 把这个过程叫：

```
path walk
```

源码：

```
fs/namei.c
```

---

整个流程：

```
filename_lookup()

↓

path_lookupat()

↓

walk_component()

↓

lookup_last()
```

意思分别是：

---

## filename_lookup()

把：

```
"/home/test/a.txt"
```

包装成：

```
struct filename
```

然后准备开始解析。

---

## path_lookupat()

真正开始：

```
/home/test/a.txt
```

一路往下找。

例如：

```
/

↓

home

↓

test

↓

a.txt
```

---

## walk_component()

处理每一级目录。

例如：

第一次：

```
home
```

第二次：

```
test
```

第三次：

```
a.txt
```

每一级都会进入：

```
walk_component()
```

---

## lookup_last()

最后一级：

```
a.txt
```

特殊处理。

为什么？

因为：

最后一级可能：

```
open(O_CREAT)
```

需要创建。

也可能：

```
rename
unlink
mkdir
```

所以：

最后一级逻辑比中间目录复杂。

---

# 四、进入 ext4

然后：

```
#2 lookup_slow
#1 __lookup_slow
#0 ext4_lookup
```

终于进入具体文件系统。

VFS 已经不知道：

```
目录里面到底有什么。
```

于是：

调用：

```
inode_operations.lookup
```

对于 ext4：

就是：

```
ext4_lookup()
```

所以：

```
walk_component()

↓

lookup_slow()

↓

inode->i_op->lookup()

↓

ext4_lookup()
```

这就是：

```
VFS

↓

ext4
```

的分界点。

---

# 五、为什么调用 ext4_lookup？

举个例子。

目录：

```
/home/test/
```

里面：

```
a.txt
b.txt
c.txt
```

Linux 要找：

```
a.txt
```

VFS 自己不知道：

```
目录里面有哪些文件
```

于是：

调用：

```
ext4_lookup(dir, dentry)
```

让 ext4：

去目录 block 里面查：

```
"a.txt"
```

找到：

```
inode = xxxx
```

然后返回。

---

# 六、为什么不是 ext4_read_inode？

很多人第一次看都会问：

为什么直接：

```
ext4_lookup
```

而不是：

```
read inode
```

其实：

lookup 做了很多工作：

包括：

```
目录项查找

↓

inode number

↓

iget()

↓

inode cache

↓

返回 inode
```

所以：

```
lookup
```

里面最后也会得到 inode。

---

# 七、你的调用说明了什么？

你的 bt 说明：

程序正在：

```
stat()

↓

解析路径

↓

最后一级目录项

↓

进入 ext4

↓

正在查目录项
```

也就是说：

**当前 CPU 停在了 ext4 的目录查找函数 `ext4_lookup()` 中。**

还没有开始读取文件内容，因为 `stat()` 只需要拿到 inode 元数据，不会读取文件数据块。

---

# 八、完整流程图

```text
用户程序
    │
    │ stat("/tmp/a.txt")
    ▼
entry_SYSCALL_64
    ▼
do_syscall_64
    ▼
__x64_sys_stat
    ▼
__do_sys_statx
    ▼
vfs_statx
    ▼
filename_lookup
    ▼
path_lookupat
    ▼
lookup_last
    ▼
walk_component
    ▼
lookup_slow
    ▼
__lookup_slow
    ▼
ext4_lookup   ← 当前停在这里
    ▼
ext4 查目录项
    ▼
得到 inode
    ▼
返回 VFS
    ▼
填充 struct stat
    ▼
copy_to_user()
    ▼
返回用户态
```

---

## 关于调用栈中的一些细节

你还能从参数里看出一些有用的信息：

- `dfd=-100`：这是 `AT_FDCWD`，表示路径是相对于**当前工作目录**解析的，而不是相对于某个目录文件描述符。
    
- `request_mask=606`：这是 `statx` 内部请求的属性掩码，表示需要获取一组文件元数据。
    
- `flags=2304`：这是 `stat` 转换为 `statx` 时使用的一些内部标志。
    
- `flags=<optimized out>`：因为内核是开启优化（`-O2`）编译的，GDB 无法恢复这些局部变量的值，这是正常现象。
    

如果你正在学习 Linux VFS，这张调用栈实际上覆盖了 **"用户态 `stat()` → 系统调用入口 → VFS 路径解析 → ext4 查找目录项"** 的完整主干流程，是理解 `fs/namei.c` 和 VFS 工作机制的一个非常好的切入点。