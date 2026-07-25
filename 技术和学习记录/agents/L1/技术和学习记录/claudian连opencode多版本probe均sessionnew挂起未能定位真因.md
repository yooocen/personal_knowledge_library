# claudian 连 opencode 多版本 probe 均 session/new 挂起未能定位真因

**源文件**: [2026-07-24_22-39-19_85956bf5-93b0-4942-bbd5-2c94c6442d14.md](../../L0/技术和学习记录/2026-07-24_22-39-19_85956bf5-93b0-4942-bbd5-2c94c6442d14.md)

- **会话时间**: 2026-07-24 22:39 ~ 23:47（6 turns）
- **项目**: 技术和学习记录
- **运行时**: opencode (glm-5.2)
- **主题**: claudian 无法扫描到/连接 opencode 的根因排查（接续早期 [[claudian无法连接opencode排查]]，下一会话由 Codex 真正定位，见 [[blender-mcp阻塞opencode ACP会话创建根因定位与Claudian配置修复]]）

## 背景

用户问“为什么 claudian 无法扫描到 opencode”。claudian 是 Obsidian 插件，通过 ACP（Agent Client Protocol）把 coding-agent CLI 嵌入 vault。本会话历经 6 轮，结论多次修正。

## 关键排查路径与结论演变

1. **初判（Turn 1，后被修正）**：PATH 顶层缺 `opencode.exe` + Windows 不支持 `.cmd/.ps1` wrapper + Node/npm 目录分离。建议手动填 opencode.exe 路径或官方原生安装。
2. **方法 1 失败后修正（Turn 2）**：读 claudian 源码发现 Windows 实际接受 `.exe/.cmd/裸名`（不含 `.ps1`），“拒 .cmd”判断错误。改用 node 脚本 probe 复现：opencode.exe v1.18.4 spawn 正常，`initialize`/`authenticate` 秒回，但 `session/new` 静默挂起 20s、stderr 空。根因转向 opencode ACP 服务端缺陷，多 issue 印证（opencode#31076/#25568/#17285/#24846、claudian#864）。
3. **配置与降级均无解（Turn 3）**：probe4 含 model 的自包含 config 仍 HANG；`opencode providers list` 显示 Alibaba(China) 已认证；npm 1.16.0→1.18.4 可降级但旧版同样 -32603。结论：opencode ACP `session/new` 硬 bug，配置与降级均无解。
4. **关键转折（Turn 4–5）**：用户透露“之前都能稳定用 claudian 调 opencode”+ 实际用桌面版 `@opencode-ai/desktop`（OpenCode.exe），升级桌面版后忽然不行。修正：之前 probe 测错对象（npm CLI 而非桌面版）。桌面版 OpenCode.exe probe 完全 TIMEOUT（initialize 都不回，纯 HTTP sidecar GUI 架构不支持 stdio acp）。
5. **blender-mcp 线索与否定（Turn 5 补充 2–3）**：读 1.16.2 acp 日志发现卡在 `blender-mcp` 连 Blender（localhost:9876）等 `get_telemetry_consent`——MCP 初始化被 blender-mcp 阻塞。但 `--pure`（跳过外部插件/MCP）和 `fresh-db`（全新临时 db）1.18.4 session/new 仍 HANG，否定 MCP 与 db 假设。
6. **probe 遇瓶颈（Turn 5 终）**：所有版本（1.15.7~1.18.4）+ --pure + fresh-db 均 HANG，与社区 claudian#682/#680 报告 1.15.7 能 discover models 矛盾，说明 probe 与 claudian 真实调用有未覆盖差异，本会话无法靠 probe 复现能用状态。
7. **最终建议（Turn 6）**：基于“升级桌面版后回归”事实，最直接恢复 = 降级桌面版到升级前版本，从 1.18.3 倒试。

## 有长期价值的技术见解

- **ACP probe 复现方法**：spawn `opencode acp --cwd=...`，按 JSON-RPC 顺序发 `initialize`→`authenticate`→`session/new`，是定位 claudian/opencode 集成故障的有效手段。
- **故障分层**：`opencode models` 成功 = 登录/配置/提供商 OK；ACP `initialize` 成功 = 进程/CLI/通信协议 OK；只有 `session/new` 卡住 → 问题在会话级组件（工具/agents/MCP）初始化。
- **blender-mcp 线索**：acp 日志中 `blender-mcp` 连接 Blender（localhost:9876）等待 `get_telemetry_consent` 是 session/new 挂起的强嫌疑——此线索在下一 Codex 会话被单变量对照证实为真因（本会话 `--pure` 否定属 probe 与真实调用差异干扰）。
- **桌面版 vs npm CLI**：桌面版 OpenCode.exe 是 Tauri GUI，不支持 stdio acp；claudian 用的是 npm CLI 的 `opencode acp`。

## 未来行动项

- 降级桌面版到升级前版本验证（会话末尾进行中）。
- 下一会话（Codex）已用单变量对照锁定 blender-mcp 为真因并修复。

## 重大学到的知识点

- probe 复现与真实调用存在差异时，“全量失败”不等于“真实失败”，需对照社区能用的版本/配置找未覆盖变量。
- 用户的关键事实锚点（“升级后回归”“之前能用”）比工具自检更能缩小方向。

#claudian #opencode #ACP #session-new #blender-mcp #probe #降级
