---
tags:
  - 操作系统
  - 文件系统
  - dentry
---
# 详细介绍

VFS 路径名解析的单元
文件名在dentry中
dentry和inode是多对一的关系
- 多个 dentry 可以指向同一个 inode：硬链接（hard link）是最典型的例子 — 同一个 inode 可以有多个文件名（dentry），分布在同一个或不同目录下。
- 一个 dentry 通常对应一个 inode，但也有负 dentry（negative dentry），它不关联任何 inode（用于缓存不存在的路径查找结果，加速后续失败查找）。

### Dentry（目录项缓存，dcache）的存在有以下几个核心原因：

#### 1. 性能：避免重复的磁盘/文件系统 IO
路径解析如 `/a/b/c` 需要逐级查找。如果没有 dcache，每次 open/stat 都需要调用底层文件系统的 `lookup()` 方法读取磁盘。dcache 将解析结果缓存到内存，后续访问直接命中。

#### 2. 路径查找的加速结构
dentry 构成一棵**路径树**，每个 dentry 维护 `d_parent` 指针。路径解析时 VFS 沿着这棵树遍历，将字符串路径名转换为 dentry → inode，复杂度从每次磁盘 IO 降到 O(1) 哈希查找（`__d_lookup` 在 dcache hash table 中）。

#### 3. 解耦文件名与 inode（硬链接的本质）
inode 只存元数据，**不存文件名**。一个 inode 可以有多个文件名（硬链接），每个对应一个 dentry。dentry 就是文件名→inode 的映射：
```
dentry "a" ──→ inode #123
dentry "b" ──→ inode #123 (硬链接，同一个 inode)
```

#### 4. 减少 inode 的引用压力
文件打开时持有 dentry 引用（`d_count`），通过 dentry 再指向 inode。当 dentry 被引用时，inode 自然不会被回收。这种间接引用使得 VFS 可以：
- **延迟写回**：dentry 可以缓存不用的 inode（通过 LRU 回收）
- **原子性 rename**：通过切换 dentry 的 `d_parent` 和 `d_name` 实现（`d_move()`/`d_exchange()`），无需操作 inode

#### 5. 负缓存（Negative dentry）
当查找一个不存在的文件名时，dcache 可以缓存一个**负 dentry**（`d_inode = NULL`）。后续对该路径的访问直接返回 -ENOENT，避免重复磁盘 IO。这正是 VFS 文档里说的 **"view into your entire filespace"**——不仅缓存存在，也缓存不存在。

#### 总结
dentry 本质上是**文件名查找的内存加速层**，解决了"字符串路径 → inode"这一高频操作的性能问题，同时天然支持了硬链接、负缓存和原子重命名等语义。如果没有 dentry 设计，每次路径操作都必须穿透到底层文件系统逐级 `lookup()`，性能无法接受。

## 小红书的图


图来自小红书博主 momo

![[Pasted image 20260621235510.png|767]]

## 关键成员详解

| 成员 | 说明 |
|------|------|
| **`d_seq`** | 序列锁 (seqlock)，使 RCU 路径遍历(`path_walk()`)可免锁读取，检测到写操作时重试 |
| **`d_parent`** | 指向父目录 dentry，根 dentry 的 `d_parent` 指向自身 |
| **`d_name`** | `struct qstr { hash, len, name }`；`hash` 用于 dcache 哈希查找，避免逐字节比较 |
| **`d_inode`** | 关联的 inode；`NULL` 表示 **negative dentry**（文件名存在但 inode 无效，用于缓存查找失败） |
| **`d_iname`** | 短文件名(≤40字节)直接嵌入结构体，避免内存分配；长文件名存于 `d_name.name` 指向的堆内存 |
| **`d_lockref`** | 组合了 `spinlock` + `refcount`，原子操作可同时获取锁并递增引用 |
| **`d_lru`** | **LRU 链表** — dcache 回收时，最近最少使用的 dentry 挂于此，供 `shrink_dcache()` 驱逐 |
| **`d_children`** | 子目录项链表头，维护目录树结构 |
| **`d_alias`** | 连接到 `inode->i_dentry` 链表；一个 inode 可对应多个 dentry（硬链接场景） |

---

## dentry 的三种状态

1. **used (正用)** — `d_inode != NULL`，引用计数 > 0，在 dcache 哈希表中
2. **unused (空闲)** — `d_inode != NULL`，引用计数 = 0，在 LRU 链表上，可被回收
3. **negative (负)** — `d_inode == NULL`，仍然在哈希表中，缓存"文件不存在"的结果，避免重复磁盘访问

---

## 核心算法

**路径名解析** (`path_walk()` / `walk_component()`):
1. 从路径分量取 `qstr`（hash + name）
2. 在当前目录的 dentry 的 dcache 哈希表中查找
3. 缓存命中 → RCU 快速路径（免锁通过 `d_seq` 验证）或 ref 路径
4. 缓存未命中 → 调用 `d_inode->i_op->lookup()` 从文件系统读取，创建新 dentry 插入 dcache

**dcache 收缩** (`shrink_dcache_parent()` → `prune_dcache_sb()`):
- 遍历 LRU 链表、释放引用计数为 0 的 dentry
- 逐级向上：父 dentry 的子项全部释放后才释放父 dentry（自底向上）

---

## dentry 操作表 (d_op)

```c
struct dentry_operations {
    int (*d_revalidate)(struct dentry *, unsigned int);
    int (*d_weak_revalidate)(struct dentry *, unsigned int);
    int (*d_hash)(const struct dentry *, struct qstr *);
    int (*d_compare)(const struct dentry *, unsigned int,
                     const char *, const struct qstr *);
    int (*d_delete)(const struct dentry *);
    int (*d_init)(struct dentry *);
    void (*d_release)(struct dentry *);
    void (*d_prune)(struct dentry *);
    void (*d_iput)(struct dentry *, struct inode *);
    char *(*d_dname)(struct dentry *, char *, int);
    struct vfsmount *(*d_automount)(struct path *);
    int (*d_manage)(const struct dentry *, bool);
    struct dentry *(*d_real)(struct dentry *, const struct inode *);
};
```

这些方法允许各文件系统定制 dentry 行为，例如 `d_revalidate` 用于 NFS 等网络文件系统验证缓存是否过期，`d_hash`/`d_compare` 用于大小写不敏感的文件系统。

---

## 设计哲学

- **dcache 是路径名查找的"热缓存"** — 将频繁访问的目录项缓存在内存中，避免重复的磁盘/网络 I/O
- **negative dentry** — 巧妙缓存"不存在"结果，减少对慢速存储的访问
- **RCU + seqlock** 双轨制：RCU 提供无锁读取性能，seqlock 保证写入的可见性
- **dentry + inode 分离** — 一个 inode 可对应多个 dentry（硬链接）, 符合 POSIX 语义
- **自平衡 LRU 回收** — unused dentry 在 LRU 上，按需回收，系统压力大时自动缩减 dcache 大小

## dentry 如何找到 inode

dentry 通过 **`d_inode` 指针**直接指向 inode，但找到这个指针的过程分为两条路径：

---

### 1. 建立连接：`d_add()` / `d_instantiate()`

文件系统在 `->lookup()` 中分配 dentry 和 inode 后调用 `d_add(dentry, inode)`，内部 `__d_add()` 做两件事：

```c
// fs/dcache.c:2634 — 将 dentry 加入 inode 的别名链表（反向链接）
hlist_add_head(&dentry->d_u.d_alias, &inode->i_dentry);

// fs/dcache.c:2636 — 设置 d_inode 指针（同时写 seqlock 保证一致性）
__d_set_inode_and_type(dentry, inode, add_flags);
// ↑ 本质就是: dentry->d_inode = inode;

// fs/dcache.c:2640 — 将 dentry 插入 dcache 哈希表，后续查找才能命中
__d_rehash(dentry);
```

建立的是 **双向关联**：

```
dentry->d_inode ────────────→ inode
                                  ↑
dentry->d_u.d_alias ←── i_dentry ─┘  (inode->i_dentry 链表)
```

---

### 2. 查找命中：dcache 哈希表

路径名解析时 `lookup_fast()` 调用 `__d_lookup()` 或 `__d_lookup_rcu()`：

```c
// fs/dcache.c:2323
hlist_bl_for_each_entry_rcu(dentry, node, b, d_hash) {
    // 1. hash 值匹配
    // 2. d_parent 匹配
    // 3. 未被 unhash
    // 4. 名字完全一致
    if (match) return dentry;  // ← 返回的 dentry 已自带 d_inode
}
```

找到 dentry 后直接读取 `dentry->d_inode` 即可：

```c
// include/linux/dcache.h:525
static inline struct inode *d_inode(const struct dentry *dentry)
{
    return dentry->d_inode;  // NULL 表示 negative dentry
}
```

---

### 3. Negative dentry（无 inode）

`d_inode == NULL` 时称为 **negative dentry**，缓存"文件不存在"的结果，避免重复 disk I/O：

```c
// dcache.h:90
struct inode *d_inode;  /* NULL is negative */
```

一旦真正创建文件，`d_instantiate()` 将其变为 positive：

```c
// fs/dcache.c:1867
__d_set_inode_and_type(dentry, inode, add_flags);  // d_inode = inode
```

---

### 完整数据流示例

```
open("/etc/passwd", O_RDONLY)
  ↓
path_openat() → walk_component()
  ↓
lookup_fast():
  ├─ RCU 路径: __d_lookup_rcu(parent, "passwd")
  │    ↓ 计算 hash, 定位 hash bucket, 遍历 hlist_bl
  │    ↓ 匹配 d_parent + d_name → 返回 dentry
  │    ↓ dentry->d_inode 已指向 cached inode
  │
  └─ Miss → lookup_slow():
       → dir->i_op->lookup(dir, dentry, flags)    # ext4 等文件系统实现
       → ext4_lookup():
           → 读磁盘目录项找到 inode number
           → ext4_iget(sb, ino) → 分配/找到 inode
           → d_add(dentry, inode)                  # 关键: 建立关联
               → dentry->d_inode = inode
               → hlist_add_head(&dentry->d_u.d_alias, &inode->i_dentry)
               → __d_rehash(dentry)                # 后续 lookup 可缓存命中
```

总结：**dentry 找 inode 就是直接读 `d_inode` 指针**。复杂性在于这个指针的**建立时机**（`d_add`/`d_instantiate`）和**查找路径**（dcache 哈希表 + RCU 无锁读取）。