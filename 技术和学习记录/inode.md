---
tags:
  - 操作系统
  - linux
  - 文件系统
---
## inode — 文件系统对象的元数据

`struct inode`（`include/linux/fs.h:632`）代表**一个文件系统对象的持久化元数据**，无论这个文件当前是否被打开。

### 三层对比

```
文件描述符 (FD 3)     struct file              struct inode
  一次打开                打开状态                 文件本身
  ┌─────┐              ┌──────────┐             ┌─────────────┐
  │  3  │ ──索引→      │ f_count  │             │ i_ino  (inode号)  │
  └─────┘              │ f_pos    │ 瞬时状态     │ i_mode (权限)     │
                       │ f_flags  │             │ i_uid / i_gid     │
                       │ f_inode ─┤ ───→        │ i_size (文件大小) │
                       │ f_path   │             │ i_atime/mtime/ctime│
                       └──────────┘             │ i_nlink (硬链接数) │
                                                │ i_blocks (磁盘块数)│
                                                │ i_op (inode操作)   │
                                                │ i_sb (所属超级块)  │
                                                │ i_mapping (页缓存) │
                                                └─────────────┘
                                                 存在磁盘上，开机缓存到内存
```

### 核心字段含义

| 字段 | 含义 |
|------|------|
| `i_ino` | **inode 编号**，文件系统内的唯一 ID（`ls -i` 看到的就是它） |
| `i_mode` | 文件类型 + 权限（`S_IFREG` / `S_IFDIR` / `S_IFSOCK`，rwx） |
| `i_nlink` | **硬链接计数**，归零时文件被真正删除 |
| `i_size` | 文件大小（字节） |
| `i_uid / i_gid` | 所有者和组 |
| `i_atime / i_mtime / i_ctime` | 访问/修改/变更时间 |
| `i_blocks` | 占用的磁盘块数 |
| `i_op` | **inode 操作函数表**（`create`、`lookup`、`link`、`unlink`、`mkdir`、`symlink` 等） |
| `i_fop` | 此 inode 被打开时的默认 `file_operations`（`include/linux/fs.h:718`） |
| `i_mapping` | **页缓存**（address_space），读写的 page cache 挂在这里 |
| `i_sb` | 所属超级块（即属于哪个文件系统实例） |
| `i_count` | 内存中引用计数 |
| `i_writecount` | 当前有多少个 FD 以写模式打开此文件 |
| `i_hash` | 在 VFS inode 缓存哈希表中的节点（加速路径查找） |

### inode 是「文件」还是「磁盘块号」？

**都不是**。它是文件系统对象的所有元数据的集合。举个例子：

```bash
$ stat /tmp/test.txt
  File: /tmp/test.txt
  Size: 1024        Blocks: 8          IO Block: 4096   regular file
Device: 801h/2049d  Inode: 262195      Links: 1
Access: 0644       Uid: ( 1000/   cyd)   Gid: ( 1000/   cyd)
```

`stat` 输出的**所有信息**几乎都来自 `struct inode`。磁盘块号不在 inode 里——它在具体文件系统（如 ext4）的 inode 扩展结构中，通过 `i_sb` 找到文件系统驱动，再由驱动把 `i_ino` 翻译成磁盘块号。

### inode 与文件名的关系：硬链接

```
文件名       目录项 (dentry)          inode
/tmp/a.txt ──→ dentry("a.txt") ──→ inode 262195
/tmp/b.txt ──→ dentry("b.txt") ──→ inode 262195 (同一个！硬链接)
                                       i_nlink = 2
```

多个文件名可以指向同一个 inode。`i_nlink` 记录有多少个名字指向它。只有 `i_nlink == 0` 时，文件的数据才会被回收。

### 一句话

**inode 就是文件系统对象的"身份证"**：记录所有不随打开/关闭而改变的持久化属性。`struct file` 是打开时附加的可变状态，而 inode 代表文件本身，文件删了（unlink）但 inode 还在内存里直到所有打开的 FD 关掉。****


# inode的大小
256B