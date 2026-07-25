# Claudian 连接 opencode 根因确认与 L0 到 L1 总结维护

**时间**: 2026-07-24 16:07 +08:00
**平台**: OpenCode (项目: 7adiu-d2vq6)
**源文件**: [2026-07-24_16-07-01_a6e6a42b-521d-473b-8bfc-4abf5a26063b.md](../../L0/7adiu-d2vq6/2026-07-24_16-07-01_a6e6a42b-521d-473b-8bfc-4abf5a26063b.md)

---

## 问题描述

claudian（Obsidian 插件 realclaudian）报错 "Failed to start OpenCode. Check the CLI path and login state."，需定位原因。

## 根因（用户确认）

- claudian 启动 opencode 需 opencode 客户端在线并完成模型发现/注册初始化
- 等待 10–30 秒（打开 opencode 客户端后守护进程启动 + 模型发现完成）后即可连接
- CLI（v1.18.4）与登录态（Alibaba China 凭据）本身无问题

## 排查过程

- `where.exe opencode; opencode --version; opencode auth list` — CLI 在 `C:\Users\cc\AppData\Roaming\npm\opencode`，版本 1.18.4，已登录 — 成功
- 读取 claudian-settings.json — `cliPath=""`，`visibleModels=opencode/deepseek-v4-flash-free` — 成功
- 在压缩 main.js 中搜索 "Failed to start OpenCode" 字符串 — 命中 — 成功
- 用户在此期间自行找到运行时根因（需先打开 opencode 客户端并等待）

## 关键技术见解

- 同一报错文案 "Failed to start OpenCode" 可由多种根因触发：cliPath 空/PATH 继承、守护进程未启动/模型注册表空、版本不兼容等
- 诊断时应同时验证 CLI 版本/命令接口、登录状态、可见模型列表、守护进程是否在线、时间线
- 本会话排除了"cliPath 空/登录失效"误判，根因指向守护进程未启动（与技术和学习记录项目会话一致）

## L0→L1 总结维护（本会话附带完成）

- 检测 L0 变动：L1 缺 `技术和学习记录` 项目会话总结
- 创建 1 份新 L1 摘要（技术和学习记录/15-49-33 会话）
- 更新 1 份过时摘要（7adiu-d2vq6/15-13-38 会话，补充 Turn 3）
- 刷新 `.l0_snapshot.json`（写入 4 文件完整快照）

## 标签
#claudian #opencode #故障排查 #守护进程 #L0-L1总结维护 #model-registry
