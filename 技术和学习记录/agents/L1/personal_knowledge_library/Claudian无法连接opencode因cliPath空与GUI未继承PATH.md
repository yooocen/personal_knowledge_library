# Claudian 无法连接 opencode — 因 cliPath 空与 GUI 未继承用户 PATH

**时间**: 2026-07-24 19:44–20:01 +08:00
**平台**: OpenCode (项目: personal_knowledge_library)
**源文件**: [2026-07-24_19-44-10_cd4932b5-7f49-4807-a10a-8b2994d01bd2.md](../../L0/personal_knowledge_library/2026-07-24_19-44-10_cd4932b5-7f49-4807-a10a-8b2994d01bd2.md)

---

## 问题描述

claudian（Obsidian 插件 realclaudian 2.0.40）报错 "Failed to start OpenCode. Check the CLI path and login state."。

## 根因（多层）

1. **直接层**：claudian-settings.json 中 opencode provider 的 `cliPath` 为空字符串 `""`，依赖 PATH 自动发现；Obsidian 作为 GUI 应用不继承用户 PATH（含 `C:\Users\cc\AppData\Roaming\npm`），导致 spawn 不到 opencode 二进制
2. **触发层**：Claudian 从 2.0.40 前的版本升级到 2.0.40，新增了运行时依赖——需要 opencode 守护进程/模型注册表已就绪、`visibleModels` 非空，否则启动时同步到空模型列表并禁用入口。此升级先于 opencode 1.18.4 升级约 40 秒，故为触发首因
3. **opencode 发行形态变化**：1.18.4 改用原生 173MB `opencode.exe` 二进制（而非 npm shim 脚本），若 cliPath 为空且 PATH 未继承，spawn 裸名 "opencode" 更易失败

## 排查验证

- `opencode --version` → v1.18.4，安装于 `C:\Users\cc\AppData\Roaming\npm\opencode.cmd`，正常
- `opencode auth list` → 1 个凭据 (Alibaba China)，登录态正常
- claudian 配置 `cliPath=""`，`environmentVariables: OPENCODE_ENABLE_EXA=1`，选中模型 `opencode/deepseek-v4-flash-free`
- Claudian 2.0.40 main.js 定位到 `ensureReady` 逻辑：`getResolvedProviderCliPath("opencode") ?? "opencode"` → `startProcess({command:a,...})`，走 JSON-RPC stdio

## 解决方案

在 claudian-settings.json 中显式填写 opencode provider 的 `cliPath`：
`C:\Users\cc\AppData\Roaming\npm\node_modules\opencode-ai\bin\opencode.exe`

已备份原配置为 claudian-settings.json.bak，编辑后 JSON 校验通过。

## 关键技术见解

- **Windows GUI 应用 PATH 继承问题**：开始菜单/桌面启动的 GUI 应用不继承登录后添加的用户 PATH 项
- **Claudian 2.0.40 门控机制**：新增 opencode 守护进程就绪依赖——模型注册表 `visibleModels` 须非空，否则同步到空列表并禁用入口
- **opencode 原生 exe**：1.18.4 改用 173MB 原生二进制，不再使用 npm shim（`opencode.cmd`），spawn 行为变化
- 两份不同的 L1 总结定位了相同错误文案的不同根因：本总结定位 spawn 路径问题，另一份（技术和学习记录项目）定位守护进程未启动致 visibleModels 为空

## 对抗性审查要点

- 关键假设：错误由 spawn 找不到二进制引起（非 opencode 启动后非零退出）
- 反例/替代：Claudian 2.0.40 门控与 spawn 路径问题可能叠加，须先开 OpenCode 客户端等 10–30s 再试以区分
- 升级时间线（Claudian 先于 opencode 约 40s）为此前 L1 自述，非独立复核
- 置信度：路径/PATH 继承问题——高；填路径即可完全修复——中（需实测验证）

## 行动项 / 待办

- ✅ 已修改 cliPath 指向 opencode.exe 原生二进制
- 在 Obsidian 重载 Claudian 插件，打开 OpenCode 客户端等 10–30s 后测试
- 若仍失败：查 Obsidian 开发者控制台报错堆栈，区分 ENOENT/spawn EINVAL 与 opencode 退出码非零
- 备选方案：改指 `opencode.cmd`（经 cmd shim 转发）再试
- 长期：升级 opencode/Claudian 后先开 OpenCode 客户端让守护进程就绪

## 标签

#claudian #opencode #obsidian-plugin #故障排查 #PATH继承 #cliPath #守护进程依赖 #WindowsGUI
