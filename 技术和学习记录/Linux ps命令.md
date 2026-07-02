```
ps -eLo pid,ppid,pgid,sid,lwp,tid,nlwp,ecomm
ps aux
```


- - 参数 = System V 风格（ps -ef）
- 无 - 参数 = BSD 风格（ps aux）


- UID: 用户 ID
- PID: 进程 ID
- PPID: 父进程 ID
- LWP: 轻量级进程/线程 ID
- C: CPU 使用率（整数百分比）
- NLWP: 线程数
- STIME: 进程启动时间
- TTY: 控制终端
- TIME: 累计 CPU 时间
- CMD: 命令名/命令行

| USER | PID | %CPU | %MEM | VSZ | RSS | TTY | STAT | START | TIME | COMMAND |
| ---- | --- | ---- | ---- | --- | --- | --- | ---- | ----- | ---- | ------- |
|      |     |      |      |     |     |     |      |       |      |         |
- USER: 进程所有者
- PID: 进程 ID
- %CPU: CPU 使用率百分比
- %MEM: 内存使用率百分比
- VSZ: 虚拟内存大小（KiB）
- RSS: 常驻物理内存大小（KiB）
- TTY: 控制终端
- STAT: 进程状态（R=运行，S=休眠，Z=僵尸等）
- START: 进程启动时间
- TIME: 累计占用 CPU 时间
- COMMAND: 命令名/命令行

