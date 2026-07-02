---
tags:
  - linux
---
[[Systemd 入门教程：命令篇 - 阮一峰的网络日志]]

systemd 是 Linux 系统的系统和服务管理器，作为系统的第一个进程（PID 1）运行，负责启动和管理所有其他进程与服务。它取代了传统的 System V init 系统，旨在并行启动服务、管理依赖关系，并提供统一的系统配置与日志管理。

🚀 核心功能

•   系统初始化：内核启动后，由 systemd 接管，负责挂载文件系统、启动网络、运行各类系统服务等，直至系统进入可操作状态。

•   服务管理：统一管理系统的各类服务（守护进程），支持启动、停止、重启、查看状态及设置开机自启。你之前使用的 journalctl --user -u ... 命令，正是通过 systemd 的日志功能来查询指定用户服务的日志。

•   并行启动：通过构建服务依赖图，尽可能并行地启动服务，从而显著加快系统启动速度。

•   依赖与生命周期管理：精确管理服务间的依赖关系（如 A 服务必须在 B 服务之后启动），并能自动重启崩溃的服务。

•   日志与状态追踪：内置 journald 组件统一收集日志，便于集中查询。同时利用 cgroups 技术追踪进程，防止其“逃逸”管理。

🧩 主要组件

•   systemd：核心进程（PID 1），即 init 系统本身。

•   systemctl：用于管理系统和服务的命令行工具，如 start、stop、status、enable 等。

•   journalctl：用于查询由 journald 收集的日志。

•   其他内置组件：

    ◦   logind：管理用户登录会话。

    ◦   networkd：管理网络连接。

    ◦   timedated：管理系统时间和时区。

    ◦   udev：管理设备节点（如 /dev 目录下的设备文件）。

💻 常见命令示例

•   启动/停止/重启服务

    bash
    sudo systemctl start openclaw-gateway.service
    sudo systemctl stop openclaw-gateway.service
    sudo systemctl restart openclaw-gateway.service
    
•   设置开机自启

    bash
    sudo systemctl enable openclaw-gateway.service
    
•   查看服务状态

    bash
    systemctl status openclaw-gateway.service
    
•   查看日志

    bash
    journalctl -u openclaw-gateway.service --since "2 min ago"