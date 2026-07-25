# 为 Codex 与 OpenCode 配置全局 AGENTS.md — 三条强制规则的设计与实施

**时间**: 2026-07-24 10:48–15:05 +08:00
**平台**: Codex (无项目)
**源文件**: [2026-07-24_10-48-57_019f9206-a72b-76b3-9fc3-ffba7d7af2d1.md](../../L0/codex/2026-07-24_10-48-57_019f9206-a72b-76b3-9fc3-ffba7d7af2d1.md)

---

## 关键决策

1. **两条平台独立的全局 AGENTS.md**: Codex 用 `~/.codex/AGENTS.md`，OpenCode 用 `~/.config/opencode/AGENTS.md`。不修改含密钥的 `opencode.json`，不使用符号链接。
2. **归档规则**:
   - Codex 项目聊天 → `L0/<Codex 项目名>/`
   - Codex 无项目聊天 → `L0/codex/`
   - OpenCode 始终按项目名归档，不设无项目分支
3. **三条全局规则**:
   - 会话日志同步到 L0（每轮追加用户消息和助手回复，工具结果摘要记录，敏感信息脱敏）
   - 方案/分析必须附带对抗性审查
   - 实质任务后输出建设性建议（质量门控，无价值时省略）

## 技术要点

- 使用 `CODEX_THREAD_ID` 保证同一 session 追加到同一文件
- 文件命名: `YYYY-MM-DD_HH-mm-ss_<session-id>.md`
- 迁移策略: 无覆盖、迁移前后 SHA-256 校验
- OpenCode 项目名从 session 上下文中的项目根目录名或 worktree 解析

## 待办/行动项

- 分别新建 Codex 和 OpenCode 项目会话做对照测试，验证规则加载
- 建议轮换 `opencode.json` 中的明文 API 密钥