# claudian 无法连接 opencode 排查 — 守护进程未启动致 visibleModels 为空

**时间**: 2026-07-24 15:49–16:05 +08:00
**平台**: OpenCode (项目: 技术和学习记录)
**源文件**: [2026-07-24_15-49-33_019f9319-2ea8-73d2-8736-8dc630da4c5f.md](../../L0/技术和学习记录/2026-07-24_15-49-33_019f9319-2ea8-73d2-8736-8dc630da4c5f.md)

## 问题描述
claudian（Obsidian 插件 realclaudian 2.0.40）无法使用 opencode provider，报错"Failed to start OpenCode. Check the CLI path and login state."。

## 完整根因链路
1. Claudian 2.0.40 与 OpenCode CLI 1.17.18→1.18.4 在短时间内先后升级（间隔约 40s）
2. 升级后 OpenCode 后台守护进程尚未启动，模型注册表（model registry）未初始化，`opencode models` 返回空列表
3. Claudian 同步配置时获取到空模型列表，将 `visibleModels` 写为 `[]`
4. 插件校验逻辑"无可见模型"即禁用 OpenCode 聊天入口（运行时返回 "No OpenCode model is selected"）
5. 手动打开 OpenCode 客户端 → 守护进程启动 → 模型发现和注册完成 → 模型列表恢复 → Claudian 可用

## 关键技术见解
- **被排除的首要假设**：OpenCode 1.18.4 删除 `acp` 命令/`--cwd` 参数 —— 已验证 1.18.4 仍支持 `opencode acp --cwd=...`，否定此假设
- **被排除的次生假设**：1.18.4 并发启动争用 `opencode.log`（`FileSystem.open`）—— 实为诊断沙箱账户无写权限现象，非用户本机故障证据
- **时间线反证**：首次失败发生在 OpenCode 1.18.4 安装前约 40 秒，Claudian 2.0.40 已先升级；故"仅由 OpenCode 客户端升级造成"不成立
- **直接阻断点**：Claudian 2.0.40 的 `visibleModels: []` 是显式禁用全部 OpenCode 模型；运行时校验要求在设置中启用已发现的模型
- Claudian 集成本地路径：通过本机 OpenCode CLI + `.claudian/opencode/config.json` + `%APPDATA%/opencode/opencode.db` 工作

## 长期价值
- 运行时依赖未就绪（守护进程/模型注册表）是 GUI 插件调用 CLI agent 的常见陷阱，区别于配置损坏
- 排查这类"启动失败"需同时验证：CLI 版本/命令接口、登录状态、可见模型列表、守护进程是否在线、时间线（区分相关与因果）
- `gh` 未登录且无 `GH_TOKEN` 时无法用 GitHub CLI 查插件发布记录

## 行动项 / 待办
- 遇到同样情况：先打开 OpenCode 客户端，等待 10–30 秒（守护进程启动 + 模型发现完成）再使用 Claudian
- 可选：在 Claudian 设置中手动确认 OpenCode provider 的 visibleModels 包含目标模型，避免空数组再次禁用入口

## 标签
#claudian #opencode #obsidian-plugin #故障排查 #运行时依赖 #model-registry
