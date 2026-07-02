• 检查并修复 Codex 在“当前项目”下因切换 provider 导致历史聊天不可见的问题。

  直接操作本地 Codex 数据：
  - sqlite：`~/.codex/state_5.sqlite`
  - 会话文件：`~/.codex/sessions/**/*.jsonl`

  执行要求：
  1. 只处理 `cwd=<当前项目绝对路径>` 的会话。
  2. 只处理用户主会话：`source='cli'`。
  3. 先查明根因，再改数据。
  4. 修改前先备份到 `/tmp`。
  5. 修改后必须做校验并输出统计。

  步骤：
  6. 在 `threads` 表中筛选 `cwd=<当前项目>`，统计 `source`、`model_provider`、`archived`。
  7. 判断是否是“历史记录仍在，但挂在旧 `model_provider` 下”导致当前 provider 看不到。
  8. 抽样检查这些线程的 `rollout_path` 文件首行 `session_meta.payload.model_provider` 是否也是旧值。
  9. 备份：
     - `~/.codex/state_5.sqlite` 到 `/tmp/state_5.sqlite.backup.<timestamp>`
     - 当前项目相关 rollout 文件到 `/tmp/codex-provider-migration-<timestamp>/`
  10. 取“当前项目最新一条 `source='cli'` 会话”的 `model_provider` 作为目标 provider。
  11. 执行迁移：
     - 更新 `state_5.sqlite` 中当前项目、`source='cli'` 的 `threads.model_provider` 为目标 provider
     - 更新对应 `rollout_path` 文件首行 `session_meta.payload.model_provider` 为目标 provider
  12. 校验：
     - 当前项目下 `source='cli'` 的线程是否全部归到目标 provider
     - 旧 provider 残留数量是否为 0
     - rollout 文件首行是否全部同步完成
  13. 最后只输出：
     - 根因
     - 修改了哪些本地数据
     - 迁移结果统计
     - 备份路径
     - 如界面未刷新，提示重启 Codex 或重新进入项目

  限制：
  - 不要动其他项目 cwd 的会话
  - 不要动 subagent / worker / explorer / exec 线程
  - 不要删除记录
  - 不要修改 archived，除非确认 archived 是唯一问题
  - 如果没找到当前项目会话，停止并给出证据
