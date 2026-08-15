# 演示 L0 跨会话恢复并解释 OpenCode 环境变量配置

**源文件**: [2026-07-26_17-51-18_b66dd376-7e0a-49bc-866d-6a4b369a120f.md](../../L0/技术和学习记录/2026-07-26_17-51-18_b66dd376-7e0a-49bc-866d-6a4b369a120f.md)

- **会话时间**: 2026-07-26 17:51:18 ~ 17:55（3 轮）
- **项目**: 技术和学习记录
- **运行时**: claudian (glm-5.2) / OpenCode

## Turn 1：？（单字符问候）
判断为询问/误触，主动列出 Claudian 能力范围（vault 笔记管理、知识组织、代码分析、联网调研、L0→L1 总结），询问实际需求。

## Turn 2：我尝试你能否恢复 session
- 说明无法在运行时层面真正"恢复"已关闭的 OpenCode session，但可通过读取 L0 转录文件恢复会话上下文记忆。
- 复用上一轮已读取的 4afa8651 转录（Adobe 手绘咨询），用表格复述前一会话三轮对话及关键结论、遗留待办。
- **演示 L0 机制核心价值**：会话可断开、可跨 session 续接。

## Turn 3：OPENCODE_ENABLE_EXA / OPENCODE_CONFIG 这两个配置是干嘛的
1. **OPENCODE_ENABLE_EXA=1** — 启用 Exa AI 的 websearch/codesearch 联网搜索工具（走 mcp.exa.ai，默认关闭，需此变量或 Zen 模型开启；无需 key 但免费层有速率限制，可设 EXA_API_KEY 提升额度）。本次 websearch 成功即间接验证已生效。=1 与 =true 均生效。
2. **OPENCODE_CONFIG** — 指定自定义配置文件路径。**发现用户问题中写的路径（opencode-user-overrides.json）与实际环境变量（config.json）不一致**：实际生效的是 `.claudian\opencode\config.json`（含完整 agent 配置：claudian-yolo 全放行/claudian-safe 编辑命令需确认/共指 system.md），user-overrides.json 是其严格子集（仅 mcp 部分，blender-mcp enabled:false）且当前未被引用，疑为早期/过时版本。

## 对抗性审查
- 未排除 OpenCode 内置覆盖层自动合并 user-overrides 的可能（文档未提 layering，可能性低但未读源码确认）。
- Exa 免费层高负载曾报 HTTP 402。

## 行动项
- 核实 user-overrides.json 是否应删除或与 config.json 合并，避免配置漂移。**用户未确认**。

#obsidian #claudian #opencode #L0恢复 #环境变量 #OPENCODE_CONFIG
