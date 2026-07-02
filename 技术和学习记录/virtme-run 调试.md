---
tags:
  - 操作系统
  - 文件系统
  - gdb
---
```
virtme-run --pwd \
  --kdir ~/linux-6.12.85/ \
  --disable-kvm \
  --mods=auto \
  --disk sda=$HOME/kernel/ext2/ext4.img \
  --rw \
  --rwdir . \
  --memory 4096 \
  --cpus 8 \
  --name debug \
  -a nokaslr \
  --qemu-opts -s -echr 0x17
```

# --pwd
会导致可以guest可以共享host的所有目录
guest 的根目录 / 本身就是 9p 共享（host 的 /），所以根目录下所有东西都是 host 的，没有 "guest 自己的"。唯一的本地磁盘是 /dev/sda。
用 mount 看最清楚：
mount
输出里所有 type 9p 的都是 host 共享过来的。而 /dev/sda（type ext4）才是 guest 内核自己掌控的块设备。

# lost+found
lost+found 是 mkfs.ext4 自动创建的目录，用于存放 fsck 恢复的碎片文件。如果文件系统损坏，fsck 会把找不到父目录的孤立文件/目录放进这里。每个 ext2/3/4 文件系统都有