# C 盘容量下降根因为 Win11 ISO 并清理临时文件

**源文件**: [2026-07-14_10-10-02_019f5e63-5c2a-73f0-92cf-04c5befbc249.md](../../L0/codex/2026-07-14_10-10-02_019f5e63-5c2a-73f0-92cf-04c5befbc249.md)

- **会话时间**: 2026-07-14 10:10:02（session start）/ 2026-07-25 10:00:05~10:38:54（实际转录 4 轮）
- **项目**: Projectless Chat（codex 运行时）
- **运行时**: codex
- 注：session ID 时间戳为 07-14，但转录于 07-25 补录。

## Turn 1：分析目前 C 盘容量再次下降的原因
系统化只读诊断流程，对比 07-14 清理后基线（65.80 GB 可用）与当前（51.62 GB 可用，下降 14.18 GB）。

**容量账目闭合**：`7.9569 + 3.384 + 4.825 − 2.000 ≈ 14.166 GB`

| 原因 | 容量影响 | 证据 |
|---|---:|---|
| `C:\tmp\Win11_25H2_Chinese_Simplified_x64_v2.iso` | +7.9569 GB | 07-19 创建；C:\tmp 从接近 0 增至 7.96 GB |
| 用户目录净增长 | +3.384 GB | 可比基线 135.409 GB → 当前 138.793 GB |
| Windows/系统级净增长 | 约 +4.825 GB | 07-15 安装 KB5101650、KB5100998；新组件逻辑量 9.368 GB（含硬链接重复）|
| pagefile 缩小 | −2.000 GB | 14 GB → 12 GB |

**主因**：7.96 GB 的 Windows 11 25H2 中文 ISO（高置信度第一主因）；Windows 更新（中高置信度第二主因）。

用户目录净增长主要项：OpenCode 临时运行环境 1.814 GB（4 份副本，进程未从 Temp 运行）、npm 缓存 1.036 GB、临时 swap.vhdx 0.410 GB、VS Code 扩展包缓存新增 0.43 GB。

## Turn 2：删除 ISO，清除 OpenCode 临时运行环境，清除 npm 缓存，临时 vhdx
清理结果：4 项中 3 项完成，ISO 因文件锁未删。
- ✅ OpenCode 临时运行环境：已清除（约 1.814 GB）
- ✅ npm 缓存：从约 1.036 GB 降至 19.45 MB（未卸载 npm 包）
- ✅ 临时 swap.vhdx：已删除（约 0.410 GB）
- ❌ Windows 11 ISO：仍存在（7.9569 GB）
- C 盘可用空间：51.63 GB → 54.26 GB，实际增加约 2.628 GB。

## Turn 3-4：ISO 锁定排查（未完结）
- 用 Windows Restart Manager 定位 ISO 锁定者为 **PID 4 (System)**。
- `Get-DiskImage` 状态 Attached=false（非普通虚拟光驱挂载）。
- 存在运行中的 Hyper-V 工作进程（vmwp/vmmem/vmcompute），但用户否认打开 Hyper-V——这些后台进程也可能来自 WSL、Windows Sandbox、Codex 环境或系统虚拟化服务。
- **不能断言具体虚拟机就是原因**，System 锁也可能来自其他底层过滤驱动。
- "重启时删除"登记（MoveFileEx）失败：错误码 5（权限不足），当前 codex 会话无真正本机管理员令牌。
- 系统无 CD-ROM 卷，无 Windows Setup 进程。SMB 打开文件查询因权限不足被拒绝。

## 对抗性审查
- 直接观察：ISO 仍存在、Restart Manager 报告 PID 4、Hyper-V 进程运行、磁盘映像未挂载。
- 推断但未证实：ISO 可能被 Hyper-V 虚拟 DVD 持有。System 锁也可能来自其他底层过滤驱动。
- 约 4.825 GB 的"系统级增长"是容量差额推算，非逐文件精确测量（管理员 DISM/VSS 查询被拒）。
- Windows 新文件 9.368 GB 是逻辑大小，含 2~4 个硬链接重复计数。

## 行动项
- **释放 ISO 锁**：关闭可能使用该镜像的虚拟化程序（Hyper-V/Windows Sandbox/WSL），或重启 Windows 后、启动虚拟机之前删除（届时再释放约 7.96 GB）。
- Windows 更新清理用"设置→系统→存储→临时文件→Windows 更新清理"，**不要手动删除 WinSxS**。
- 精确查看系统还原占用需真正管理员终端运行 `DISM /Online /Cleanup-Image /AnalyzeComponentStore` 和 `vssadmin list shadowstorage`。

## 学到
- Windows 文件锁定位用 Restart Manager P/Invoke（非管理员可查 PID）。
- Windows Update 新组件大量使用硬链接（WinSxS），逻辑大小 ≠ 物理占用。
- codex 会话即使获批准也无真正本机管理员令牌（MoveFileEx 报 Access denied）。

#C盘容量 #Win11-ISO #Windows-Update #文件锁 #Restart-Manager #Hyper-V #清理
