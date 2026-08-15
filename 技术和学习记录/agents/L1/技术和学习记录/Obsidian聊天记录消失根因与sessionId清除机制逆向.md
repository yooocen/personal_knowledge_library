# Obsidian 聊天记录消失根因与 sessionId 清除机制逆向

**源文件**: [2026-07-26_18-21-10_3ec0d275-6585-49fc-812d-bed1ed8f76f5.md](../../L0/技术和学习记录/2026-07-26_18-21-10_3ec0d275-6585-49fc-812d-bed1ed8f76f5.md)

- **会话时间**: 2026-07-26 18:03 ~ 18:21（3 轮，Turn1/2 回填）
- **项目**: 技术和学习记录
- **运行时**: claudian (glm-5.2) / OpenCode
- ⚠️ Turn 1/2 首次回复遗漏 L0 同步，Turn 3 补建回填。

## Turn 1：为什么聊天记录重新打开 obsidian 就会消失
系统性排查聊天记录持久化机制：
- L0 目录 11 个转录文件均在
- 读取 claudian-settings.json（opencode 提供商，glm-5.2）、opencode config.json（agent 配置）
- 读取 data.json（活跃会话 conv-1785060219169）、`.claudian/sessions` 目录 20 个 .meta.json
- 统计：20 个会话中 **16 个 sessionId 为空（EMPTY），4 个有值（HAS）**
- opencode.db 73MB 存在但被锁定

**根因（85% 置信度）**：OpenCode 会话是"进程绑定"的，不跨重启恢复。meta.json 只存 sessionId 作为"链接指针"，消息实际存储在 opencode.db。关闭 Obsidian 时 CLI 进程被杀，sessionId 失效；重开时新 CLI 进程无法恢复旧 session，插件清空 sessionId，面板显示空白。Claude 提供商无此问题（消息内嵌 meta.json，那个 29MB 文件即证明）。

## Turn 2：Claudian 插件把 sessionId 清空了，为什么有这一步
逆向分析 Claudian 插件 main.js（2.9MB 混淆代码）。发现两个清除机制：
1. **环境哈希不匹配（启动时主动清除）**：reconcileModelWithEnvironment 比较存储的 environmentHash 与计算的 m8e() 哈希，不匹配则 Dme() 清空所有 OpenCode 会话 sessionId。m8e 由 OPENCODE_CONFIG/OPENCODE_DB/OPENCODE_DISABLE_PROJECT_CONFIG/XDG_DATA_HOME 环境变量计算。
2. **缺失会话检测（使用时被动清除）**：handleMissingProviderSession 查询数据库检查 session 是否存在，缺失则 delete/reset。

**修正措辞**：清空不是"关闭时"发生，而是"重载时"检测到会话失效后主动清除。这是 **fail-safe 设计**：过期 sessionId 会导致错误，插件宁可清空重来。

**置信度从 85% 降至 75%**：无法确认环境哈希是否真的不匹配——存储值和计算值可能都是空字符串。

## ⚠️ 重要：本会话结论被后续会话部分推翻
参见 [[实测session未断并下调18-21调查置信度]]：18:26 会话实测发现 18:21 会话 sessionId 至今未清空、meta.json 无 environmentHash 字段、进程重启但 session 仍连续。**18:21 置信度从 75% 下调至 ~40%**，真正失效条件可能是 db session 记录生命周期而非进程内存。

## 学到
- Claudian/OpenCode 的 session 持久化依赖 meta.json（sessionId 指针）+ opencode.db（消息实体）双层结构。
- 插件 fail-safe 设计：宁可清空重来也不报错。
- 逆向混淆 JS 用 Select-String 搜关键词可定位逻辑（sessionId 49 处匹配）。

#obsidian #claudian #opencode #sessionId #main.js逆向 #聊天记录 #根因
