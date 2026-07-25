# blender-mcp 阻塞 opencode ACP 会话创建根因定位与 Claudian 配置修复

**源文件**: [2026-07-25_00-27-34_019f94f3-ae44-7e10-9cac-83e960c9c4ad.md](../../L0/技术和学习记录/2026-07-25_00-27-34_019f94f3-ae44-7e10-9cac-83e960c9c4ad.md)

- **会话时间**: 2026-07-25 00:27 ~ 01:11（4 turns）
- **项目**: 技术和学习记录
- **运行时**: Codex
- **主题**: 定位并修复 claudian 连不上 opencode 的真因（接续 [[claudian连opencode多版本probe均sessionnew挂起未能定位真因]]）

## 背景

接续上一会话（probe 多版本均 HANG、未能定位真因）。Codex 按 `using-superpowers` + `systematic-debugging` + `test-driven-development` + `verification-before-completion` 流程，真正锁定根因并完成最小修复。

## 根因定位（单变量对照）

故障分层排除：
1. **CLI 路径**：`opencode.cmd --version` 正常，claudian 源码与 OpenCode 日志证明已找到可执行文件并启动 `opencode acp`。排除。
2. **登录/提供商**：`opencode models` 独立返回完整模型目录（Alibaba Cloud、OpenCode Zen 等）。排除。
3. **卡点定位**：写临时 JSON-RPC 诊断脚本复现 claudian 的 ACP 流程——`initialize` 成功，`session/new` 持续超时、stderr 空。故障范围 = ACP 新建会话阶段（会话级组件初始化）。

单变量 A/B 对照实验：

| 实验配置 | session/new 结果 |
|---|---|
| claudian 原始配置 | 超时 |
| 只补默认模型 | 仍超时 |
| 禁用全部 MCP | 约 4 秒成功 |
| 只禁用 blender-mcp、保留 Pencil | 约 4 秒成功 |

**根因**：全局启用、当前不可用的 `blender-mcp` 阻塞了 OpenCode 1.18.4 ACP 的 `session/new`；claudian 2.0.40 随后只显示笼统的“Could not load model catalog”。

## 修复方案（窄范围，不动全局）

- 在 Claudian 设置 `.claudian/claudian-settings.json` 加入 Claudian 专用的 `OPENCODE_CONFIG` 环境变量。
- 新建 `.claudian/opencode-user-overrides.json`，只对 Claudian 禁用 `blender-mcp`；全局 OpenCode 配置未改，普通 OpenCode 中 Blender 与 Pencil MCP 仍启用。

## 回归验证

用 claudian 自动生成的最终配置（含 `blender-mcp: enabled=false` + 保留的 agents）跑真实 ACP：`initialize` 与 `session/new` 均约 4 秒成功，返回会话 ID 和完整模型目录，退出码 0。

## 有长期价值的技术见解

- **MCP 阻塞会话创建**：失败的 MCP 不只是“少一个工具”，它会阻塞整个 `session/new`，导致模型发现也卡死。重型/不稳定 MCP 应放客户端级配置，避免阻塞模型发现。
- **单变量对照定论**：日志警告（`server unavailable key=blender-mcp`）只提供方向；“完整配置失败 → 禁用全部 MCP 成功 → 只禁用 Blender 仍成功”的对照实验才是定论。
- **为什么想到 MCP**：故障发生在 `session/new`（会话级组件初始化阶段）而非模型/认证层；MCP 是会话创建新增的典型外部组件，与卡点高度吻合。
- **绕过 UI 复现底层协议**：集成工具把异常吞成通用提示时，直接复现最底层 JSON-RPC 比反复重装/改路径快。

## 未来行动项

- 若 Claudian 内也需要 Blender 工具，单独修复 `uvx blender-mcp` 启动问题，确认可用后再移除覆盖（而非长期全局禁用）。
- 重型/不稳定 MCP 保持客户端级配置。

## 重大学到的知识点

- 故障“阶段边界”定位法：哪一步卡住决定嫌疑范围（会话级组件 vs 认证/CLI 层）。
- 配置覆盖优于全局修改：用 `OPENCODE_CONFIG` 给特定客户端单独配置，保留全局默认。

#claudian #opencode #ACP #blender-mcp #MCP #单变量对照 #配置修复
