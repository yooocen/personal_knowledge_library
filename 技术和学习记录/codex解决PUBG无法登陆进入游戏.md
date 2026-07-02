# 查明 PUBG 外部验证失败

> 我想知道我的pubg为什么报无法从外部提供程序进行验证

<details><summary>3 previous messages</summary>

> <details><summary>Ran <code>'Get-Content -Path C:\Users\cc\.codex\skills\using-superpowers\SKILL.md -TotalCount 120'</code></summary>
>
> ```bash
> $ 'Get-Content -Path C:\Users\cc\.codex\skills\using-superpowers\SKILL.md -TotalCount 120'
> ```
>
> ````text
> ---
> name: using-superpowers
> description: Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions
> ---
>
> <SUBAGENT-STOP>
> If you were dispatched as a subagent to execute a specific task, skip this skill.
> </SUBAGENT-STOP>
>
> <EXTREMELY-IMPORTANT>
> If you think there is even a 1% chance a skill might apply to what you are doing, you ABSOLUTELY MUST invoke the skill.
>
> IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE. YOU MUST USE IT.
>
> This is not negotiable. This is not optional. You cannot rationalize your way out of this.
> </EXTREMELY-IMPORTANT>
>
> ## Instruction Priority
>
> Superpowers skills override default system prompt behavior, but **user instructions always take precedence**:
>
> 1. **User's explicit instructions** (CLAUDE.md, GEMINI.md, AGENTS.md, direct requests) 鈥?highest priority
> 2. **Superpowers skills** 鈥?override default system behavior where they conflict
> 3. **Default system prompt** 鈥?lowest priority
>
> If CLAUDE.md, GEMINI.md, or AGENTS.md says "don't use TDD" and a skill says "always use TDD," follow the user's instructions. The user is in control.
>
> ## How to Access Skills
>
> **In Claude Code:** Use the `Skill` tool. When you invoke a skill, its content is loaded and presented to you鈥攆ollow it directly. Never use the Read tool on skill files.
>
> **In Copilot CLI:** Use the `skill` tool. Skills are auto-discovered from installed plugins. The `skill` tool works the same as Claude Code's `Skill` tool.
>
> **In Gemini CLI:** Skills activate via the `activate_skill` tool. Gemini loads skill metadata at session start and activates the full content on demand.
>
> **In other environments:** Check your platform's documentation for how skills are loaded.
>
> ## Platform Adaptation
>
> Skills use Claude Code tool names. Non-CC platforms: see `references/copilot-tools.md` (Copilot CLI), `references/codex-tools.md` (Codex) for tool equivalents. Gemini CLI users get the tool mapping loaded automatically via GEMINI.md.
>
> # Using Skills
>
> ## The Rule
>
> **Invoke relevant or requested skills BEFORE any response or action.** Even a 1% chance a skill might apply means that you should invoke the skill to check. If an invoked skill turns out to be wrong for the situation, you don't need to use it.
>
> ```dot
> digraph skill_flow {
>     "User message received" [shape=doublecircle];
>     "About to EnterPlanMode?" [shape=doublecircle];
>     "Already brainstormed?" [shape=diamond];
>     "Invoke brainstorming skill" [shape=box];
>     "Might any skill apply?" [shape=diamond];
>     "Invoke Skill tool" [shape=box];
>     "Announce: 'Using [skill] to [purpose]'" [shape=box];
>     "Has checklist?" [shape=diamond];
>     "Create TodoWrite todo per item" [shape=box];
>     "Follow skill exactly" [shape=box];
>     "Respond (including clarifications)" [shape=doublecircle];
>
>     "About to EnterPlanMode?" -> "Already brainstormed?";
>     "Already brainstormed?" -> "Invoke brainstorming skill" [label="no"];
>     "Already brainstormed?" -> "Might any skill apply?" [label="yes"];
>     "Invoke brainstorming skill" -> "Might any skill apply?";
>
>     "User message received" -> "Might any skill apply?";
>     "Might any skill apply?" -> "Invoke Skill tool" [label="yes, even 1%"];
>     "Might any skill apply?" -> "Respond (including clarifications)" [label="definitely not"];
>     "Invoke Skill tool" -> "Announce: 'Using [skill] to [purpose]'";
>     "Announce: 'Using [skill] to [purpose]'" -> "Has checklist?";
>     "Has checklist?" -> "Create TodoWrite todo per item" [label="yes"];
>     "Has checklist?" -> "Follow skill exactly" [label="no"];
>     "Create TodoWrite todo per item" -> "Follow skill exactly";
> }
> ```
>
> ## Red Flags
>
> These thoughts mean STOP鈥攜ou're rationalizing:
>
> | Thought | Reality |
> |---------|---------|
> | "This is just a simple question" | Questions are tasks. Check for skills. |
> | "I need more context first" | Skill check comes BEFORE clarifying questions. |
> | "Let me explore the codebase first" | Skills tell you HOW to explore. Check first. |
> | "I can check git/files quickly" | Files lack conversation context. Check for skills. |
> | "Let me gather information first" | Skills tell you HOW to gather information. |
> | "This doesn't need a formal skill" | If a skill exists, use it. |
> | "I remember this skill" | Skills evolve. Read current version. |
> | "This doesn't count as a task" | Action = task. Check for skills. |
> | "The skill is overkill" | Simple things become complex. Use it. |
> | "I'll just do this one thing first" | Check BEFORE doing anything. |
> | "This feels productive" | Undisciplined action wastes time. Skills prevent this. |
> | "I know what that means" | Knowing the concept 鈮?using the skill. Invoke it. |
>
> ## Skill Priority
>
> When multiple skills could apply, use this order:
>
> 4. **Process skills first** (brainstorming, debugging) - these determine HOW to approach the task
> 5. **Implementation skills second** (frontend-design, mcp-builder) - these guide execution
>
> "Let's build X" 鈫?brainstorming first, then implementation skills.
> "Fix this bug" 鈫?debugging first, then domain-specific skills.
>
> ## Skill Types
>
> **Rigid** (TDD, debugging): Follow exactly. Don't adapt away discipline.
>
> **Flexible** (patterns): Adapt principles to context.
>
> The skill itself tells you which.
>
> ## User Instructions
>
> Instructions say WHAT, not HOW. "Add X" or "Fix Y" doesn't mean skip workflows.
> ````
>
> Success
>
> </details>
>
> 我先按本轮需要加载了 `using-superpowers`，接下来我会直接帮你定位这个 PUBG 验证报错的常见原因和排查顺序。这个错误名字很像账号/平台鉴权链路出了问题，不一定是游戏文件本身坏了。
>
> <details><summary>Ran 1 command, searched web 2 times</summary>
>
> - Ran `Get-Content -Path C:\Users\cc\.codex\skills\systematic-debugging\SKILL.md -TotalCount 180`
>
> <details><summary>Searched web 2 times</summary>
>
> - Searched web for `PUBG unable to verify from external provider error Steam 2026`
> - Searched web for `PUBG support failed authenticate external provider Steam status`
>
> </details>
>
> </details>
</details>

这个提示一般不是“账号密码错”，而是 PUBG 没能通过外部平台完成身份验证，PC 端最常见就是 Steam / KRAFTON ID / 网络链路 其中一环没回传成功。

最可能的原因按概率排：

1. **Steam 或 PUBG 服务器临时波动**
   如果很多人同时进不去，基本只能等。PUBG 官方连接指南也建议先看服务器状态：[PUBG Support](https://support.pubg.com/hc/en-us/articles/900002205766-GENERAL-CONNECTIVITY-GUIDE)。

2. **Steam 登录状态卡住**
   退出 PUBG，任务管理器里结束 Steam 相关进程，然后重新打开 Steam，再启动 PUBG。

3. **网络 / 加速器 / VPN / 代理问题**
   鉴权请求可能被断流、绕路、延迟过高或被代理干扰。可以换加速节点，或反过来先关闭 VPN/代理试一次。

4. **防火墙或杀毒软件拦截**
   把 `Steam.exe`、`TslGame.exe`、PUBG/BattlEye 相关程序加入防火墙白名单。

5. **游戏文件或启动参数异常**
   Steam 库里右键 PUBG → 属性 → 已安装文件 → 验证游戏文件完整性。PUBG 官方也有验证文件说明：[How to verify the integrity of game files](https://support.pubg.com/hc/en-us/articles/18408669229465-How-to-verify-the-integrity-of-game-files)。

建议你按这个顺序试：**重启 Steam → 重启电脑和路由器 → 换/关加速器节点 → 验证游戏完整性 → 检查防火墙 → 等 10-30 分钟看是不是服务器波动**。

如果你是今天突然所有账号都这样，大概率是服务器/Steam 鉴权波动；如果只有你这样，优先查网络、加速器节点和防火墙。

> 你能检查一下日志之类的确定原因吗，我一直因为这个无法进入游戏

<details><summary>15 previous messages</summary>

> <details><summary>Ran <code>'Get-Content -Path C:\Users\cc\.codex\skills\using-superpowers\SKILL.md -TotalCount 80'</code></summary>
>
> ```bash
> $ 'Get-Content -Path C:\Users\cc\.codex\skills\using-superpowers\SKILL.md -TotalCount 80'
> ```
>
> ````text
> ---
> name: using-superpowers
> description: Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions
> ---
>
> <SUBAGENT-STOP>
> If you were dispatched as a subagent to execute a specific task, skip this skill.
> </SUBAGENT-STOP>
>
> <EXTREMELY-IMPORTANT>
> If you think there is even a 1% chance a skill might apply to what you are doing, you ABSOLUTELY MUST invoke the skill.
>
> IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE. YOU MUST USE IT.
>
> This is not negotiable. This is not optional. You cannot rationalize your way out of this.
> </EXTREMELY-IMPORTANT>
>
> ## Instruction Priority
>
> Superpowers skills override default system prompt behavior, but **user instructions always take precedence**:
>
> 1. **User's explicit instructions** (CLAUDE.md, GEMINI.md, AGENTS.md, direct requests) 鈥?highest priority
> 2. **Superpowers skills** 鈥?override default system behavior where they conflict
> 3. **Default system prompt** 鈥?lowest priority
>
> If CLAUDE.md, GEMINI.md, or AGENTS.md says "don't use TDD" and a skill says "always use TDD," follow the user's instructions. The user is in control.
>
> ## How to Access Skills
>
> **In Claude Code:** Use the `Skill` tool. When you invoke a skill, its content is loaded and presented to you鈥攆ollow it directly. Never use the Read tool on skill files.
>
> **In Copilot CLI:** Use the `skill` tool. Skills are auto-discovered from installed plugins. The `skill` tool works the same as Claude Code's `Skill` tool.
>
> **In Gemini CLI:** Skills activate via the `activate_skill` tool. Gemini loads skill metadata at session start and activates the full content on demand.
>
> **In other environments:** Check your platform's documentation for how skills are loaded.
>
> ## Platform Adaptation
>
> Skills use Claude Code tool names. Non-CC platforms: see `references/copilot-tools.md` (Copilot CLI), `references/codex-tools.md` (Codex) for tool equivalents. Gemini CLI users get the tool mapping loaded automatically via GEMINI.md.
>
> # Using Skills
>
> ## The Rule
>
> **Invoke relevant or requested skills BEFORE any response or action.** Even a 1% chance a skill might apply means that you should invoke the skill to check. If an invoked skill turns out to be wrong for the situation, you don't need to use it.
>
> ```dot
> digraph skill_flow {
>     "User message received" [shape=doublecircle];
>     "About to EnterPlanMode?" [shape=doublecircle];
>     "Already brainstormed?" [shape=diamond];
>     "Invoke brainstorming skill" [shape=box];
>     "Might any skill apply?" [shape=diamond];
>     "Invoke Skill tool" [shape=box];
>     "Announce: 'Using [skill] to [purpose]'" [shape=box];
>     "Has checklist?" [shape=diamond];
>     "Create TodoWrite todo per item" [shape=box];
>     "Follow skill exactly" [shape=box];
>     "Respond (including clarifications)" [shape=doublecircle];
>
>     "About to EnterPlanMode?" -> "Already brainstormed?";
>     "Already brainstormed?" -> "Invoke brainstorming skill" [label="no"];
>     "Already brainstormed?" -> "Might any skill apply?" [label="yes"];
>     "Invoke brainstorming skill" -> "Might any skill apply?";
>
>     "User message received" -> "Might any skill apply?";
>     "Might any skill apply?" -> "Invoke Skill tool" [label="yes, even 1%"];
>     "Might any skill apply?" -> "Respond (including clarifications)" [label="definitely not"];
>     "Invoke Skill tool" -> "Announce: 'Using [skill] to [purpose]'";
>     "Announce: 'Using [skill] to [purpose]'" -> "Has checklist?";
>     "Has checklist?" -> "Create TodoWrite todo per item" [label="yes"];
>     "Has checklist?" -> "Follow skill exactly" [label="no"];
>     "Create TodoWrite todo per item" -> "Follow skill exactly";
> }
> ```
>
> ## Red Flags
>
> These thoughts mean STOP鈥攜ou're rationalizing:
> ````
>
> Success
>
> </details>
>
> 可以，我来按日志排查，不靠猜。我要先找 PUBG、Steam、BattlEye/Easy Anti-Cheat 相关日志和最近的 Windows 事件，重点看鉴权、网络、反作弊启动、TLS/连接失败这些线索。
>
> <details><summary>Ran 1 command</summary>
>
> - Ran `Get-Content -Path C:\Users\cc\.codex\skills\systematic-debugging\SKILL.md -TotalCount 120`
>
> </details>
>
> 我会先做只读扫描：找最近修改的日志文件，不改任何配置。因为 PUBG 的日志位置可能随 Steam 库位置变化，我会同时查常见用户目录和 Steam 安装目录。
>
> <details><summary>Ran 3 commands</summary>
>
> - Ran `Get-ChildItem -Path $env:LOCALAPPDATA -Recurse -ErrorAction SilentlyContinue -Include *.log,*.txt | Where-Object { $_.FullName -match 'TslGame|PUBG|BattlEye|EasyAntiCheat|EAC' -or $_.Name -match 'TslGame|PUBG|BattlEye|EasyAntiCheat|EAC' } | Sort-Object LastWriteTime -Descending | Select-Object -First 40 FullName,LastWriteTime,Length`
> - Ran `Get-ChildItem -Path 'C:\Program Files (x86)\Steam' -Recurse -ErrorAction SilentlyContinue -Include *.log,*.txt | Where-Object { $_.FullName -match 'TslGame|PUBG|BattlEye|EasyAntiCheat|EAC|steam' } | Sort-Object LastWriteTime -Descending | Select-Object -First 50 FullName,LastWriteTime,Length`
> - Ran `Get-WinEvent -FilterHashtable @{LogName='Application'; StartTime=(Get-Date).AddDays(-3)} -ErrorAction SilentlyContinue | Where-Object { $_.ProviderName -match 'Application Error|Windows Error Reporting|BattlEye|EasyAntiCheat|Steam|TslGame|PUBG' -or $_.Message -match 'TslGame|PUBG|BattlEye|EasyAntiCheat|Steam' } | Select-Object -First 30 TimeCreated,ProviderName,Id,LevelDisplayName,Message`
>
> </details>
>
> 已经找到核心日志：`C:\Users\cc\AppData\Local\TslGame\Saved\Logs\TslGame.log`，而且最近有多次备份日志。Windows 事件里只看到一次 `TslGame.exe` 内存预泄漏记录，不像是直接崩溃；真正原因更可能藏在游戏自己的登录/网络日志里。
>
> <details><summary>Ran 3 commands</summary>
>
> - Ran `Select-String -Path 'C:\Users\cc\AppData\Local\TslGame\Saved\Logs\TslGame.log' -Pattern 'external|provider|verify|auth|login|steam|token|fail|error|timeout|denied|network|connection|TLS|SSL|EOS|KRAFTON|BattlEye|BE' -CaseSensitive:$false | Select-Object -First 200 LineNumber,Line`
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Local\TslGame\Saved\Logs\TslGame.log' -Tail 220`
> - Ran `Get-ChildItem -Path 'C:\Users\cc\AppData\Local\TslGame\Saved\Logs' -Filter '*.log' | Sort-Object LastWriteTime -Descending | Select-Object FullName,LastWriteTime,Length`
>
> </details>
>
> 游戏主日志大部分被 PUBG 加密/编码了，能看到的明文只有正常关闭，里面没有直接露出“external provider”。我现在改查 Steam 的登录/连接日志和 PUBG 安装目录里的反作弊日志，这两类通常更“讲人话”。
>
> <details><summary>Ran 6 commands</summary>
>
> - Ran `Get-ItemProperty -Path 'HKCU:\Software\Valve\Steam' -ErrorAction SilentlyContinue | Select-Object SteamPath,SteamExe,AutoLoginUser`
> - Ran `Get-ItemProperty -Path 'HKLM:\SOFTWARE\WOW6432Node\Valve\Steam' -ErrorAction SilentlyContinue | Select-Object InstallPath`
> - Ran `Get-ChildItem -Path 'C:\Users\cc\AppData\Local\TslGame' -Recurse -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 80 FullName,LastWriteTime,Length`
> - Ran `Get-ChildItem -Path 'E:\Program Files (x86)\Steam\logs' -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 60 FullName,LastWriteTime,Length`
> - Ran `Select-String -Path 'E:\Program Files (x86)\Steam\logs\*.txt','E:\Program Files (x86)\Steam\logs\*.log' -Pattern '578080|TslGame|PUBG|auth|authenticate|ticket|token|error|failed|connection|timeout|external|provider|Logon|webapi|license' -CaseSensitive:$false -ErrorAction SilentlyContinue | Sort-Object Path,LineNumber | Select-Object -First 250 Path,LineNumber,Line`
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Local\TslGame\Saved\IntegrityCheck\IntegrityCheckHistory.csv' -Tail 80`
>
> </details>
>
> 这里有一个明显线索：PUBG 的完整性检查历史在 2026-05-
>
> Stream error
>
> Reconnecting... 1/5
> stream disconnected before completion: Transport error: network error: error decoding response body
>
> Steam 路径确认在 `E:\Program Files (x86)\Steam`，PUBG 安装在 `F:\SteamLibrary\steamapps\common\PUBG`。完整性检查记录里出现大量 PUBG 文件条目，但它看起来像 PUBG 自己的校验历史，不等同于“文件已损坏”；下一步我会把 11:01-11:02 这次失败附近的 Steam 进程/连接日志拉出来。
>
> <details><summary>Ran 6 commands</summary>
>
> - Ran `Select-String -Path 'E:\Program Files (x86)\Steam\logs\gameprocess_log.txt' -Pattern '578080|PUBG|TslGame|failed|error|start|exit|AppID|process|launcher|BattlEye|BE' -CaseSensitive:$false | Select-Object -First 200 LineNumber,Line`
> - Ran `Select-String -Path 'E:\Program Files (x86)\Steam\logs\connection_log.txt','E:\Program Files (x86)\Steam\logs\connection_log_7777.txt' -Pattern '2026-05-04 10:5|2026-05-04 11:0|auth|ticket|token|Logon|CM|timeout|disconnected|failed|error|NoConnection|WebSocket|api|steam' -CaseSensitive:$false | Select-Object -First 300 Path,LineNumber,Line`
> - Ran `Get-ChildItem -Path 'F:\SteamLibrary\steamapps\common\PUBG' -Recurse -ErrorAction SilentlyContinue -Include *.log,*.txt | Where-Object { $_.FullName -match 'BattlEye|EasyAntiCheat|EAC|Logs|TslGame|BroCrash|Crash|Launcher' -or $_.Name -match 'BattlEye|EasyAntiCheat|EAC|launcher|log' } | Sort-Object LastWriteTime -Descending | Select-Object -First 80 FullName,LastWriteTime,Length`
> - Ran `Get-Content -Path 'E:\Program Files (x86)\Steam\logs\connection_log.txt' -Tail 180`
> - Ran `Get-Content -Path 'E:\Program Files (x86)\Steam\logs\connection_log_7777.txt' -Tail 120`
> - Ran `Get-Content -Path 'E:\Program Files (x86)\Steam\logs\runprocess_log.txt' -Tail 120`
>
> </details>
>
> 这里已经有很强的证据了：Steam 在连接鉴权服务器时走了本机代理 `127.0.0.1:7897`，并反复出现 `Bad Gateway`，随后 Steam 会话被远端断开。这个和“无法从外部提供程序进行验证”高度吻合，说明 PUBG 拿 Steam 鉴权/票据时链路不稳定。我要再确认 7897 是哪个代理程序占用，以及系统代理设置。
>
> <details><summary>Ran 7 commands</summary>
>
> - Ran `Get-NetTCPConnection -LocalPort 7897 -ErrorAction SilentlyContinue | Select-Object LocalAddress,LocalPort,State,OwningProcess`
> - Ran `Get-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings' | Select-Object ProxyEnable,ProxyServer,AutoConfigURL`
> - Ran `Get-Process -ErrorAction SilentlyContinue | Where-Object { $_.ProcessName -match 'clash|verge|mihomo|v2ray|sing|proxy|steam|TslGame|PUBG|BattleEye|BEService' } | Select-Object Id,ProcessName,Path`
> - Ran `netstat -ano | Select-String ':7897|:7890|:7899|:7895'`
> - Ran `Get-Process -Id 20000,38120,27968 -ErrorAction SilentlyContinue | Select-Object Id,ProcessName,Path`
> - Ran `Get-ChildItem -Path $env:APPDATA,$env:LOCALAPPDATA -Recurse -ErrorAction SilentlyContinue -Include *.log,*.txt | Where-Object { $_.FullName -match 'clash|verge|mihomo' -or $_.Name -match 'clash|verge|mihomo' } | Sort-Object LastWriteTime -Descending | Select-Object -First 60 FullName,LastWriteTime,Length`
> - Ran `Get-ChildItem Env: | Where-Object { $_.Name -match 'proxy|http|https|all_proxy' -or $_.Value -match '7897|7890|proxy' } | Select-Object Name,Value`
>
> </details>
</details>

> 7897 是我的clash在使用

对，日志基本能确定主因就在 **Clash 代理链路** 上。

我看到 Steam 连接日志里多次出现：

```text
ConnectionDisconnected('Disconnected By Remote Host') ... (127.0.0.1:7897, WebSocket)
IPv6 HTTP connectivity test ... (127.0.0.1:7897) - FAILURE (Bad Gateway)
No Connect Tokens left available
```

而 `127.0.0.1:7897` 正是你的 Clash / Mihomo 端口。也就是说：Steam 本身能登录成功，但 PUBG 需要向 Steam/PUBG 鉴权服务拿票据时，流量被 Clash 接管后返回了 **Bad Gateway** 或被远端断开，于是游戏报“无法从外部提供程序进行验证”。

最建议你先这样试：

1. Clash 里把 Steam/PUBG 相关走 **DIRECT**
   关键域名可以先加：
   ```text
   DOMAIN-SUFFIX,steamserver.net,DIRECT
   DOMAIN-SUFFIX,steampowered.com,DIRECT
   DOMAIN-SUFFIX,steamcommunity.com,DIRECT
   DOMAIN-SUFFIX,steamstatic.com,DIRECT
   DOMAIN-SUFFIX,pubg.com,DIRECT
   DOMAIN-SUFFIX,krafton.com,DIRECT
   DOMAIN-SUFFIX,battlegrounds.pubg.com,DIRECT
   ```

2. 或者最简单验证：**完全退出 Clash Verge / Mihomo 后重启 Steam，再进 PUBG**
   不是只关系统代理，最好把 Clash 核心也退出，因为日志显示 Steam webhelper 仍在连 `7897`。

3. 如果你必须开加速/代理，换一个 Clash 节点，优先选香港/日本/新加坡中稳定的节点，并避免“全局代理 Steam”。

结论：目前不像是 PUBG 文件损坏，也不像 BattlEye 直接拦截；是 **Steam/PUBG 鉴权流量经过 Clash 的 7897 代理后失败**。这也解释了你为什么一直卡在外部提供程序验证。

> 你帮我处理

<details><summary>25 previous messages</summary>

> <details><summary>Ran <code>'Get-Content -Path C:\Users\cc\.codex\skills\using-superpowers\SKILL.md -TotalCount 60'</code></summary>
>
> ```bash
> $ 'Get-Content -Path C:\Users\cc\.codex\skills\using-superpowers\SKILL.md -TotalCount 60'
> ```
>
> ````text
> ---
> name: using-superpowers
> description: Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions
> ---
>
> <SUBAGENT-STOP>
> If you were dispatched as a subagent to execute a specific task, skip this skill.
> </SUBAGENT-STOP>
>
> <EXTREMELY-IMPORTANT>
> If you think there is even a 1% chance a skill might apply to what you are doing, you ABSOLUTELY MUST invoke the skill.
>
> IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE. YOU MUST USE IT.
>
> This is not negotiable. This is not optional. You cannot rationalize your way out of this.
> </EXTREMELY-IMPORTANT>
>
> ## Instruction Priority
>
> Superpowers skills override default system prompt behavior, but **user instructions always take precedence**:
>
> 1. **User's explicit instructions** (CLAUDE.md, GEMINI.md, AGENTS.md, direct requests) 鈥?highest priority
> 2. **Superpowers skills** 鈥?override default system behavior where they conflict
> 3. **Default system prompt** 鈥?lowest priority
>
> If CLAUDE.md, GEMINI.md, or AGENTS.md says "don't use TDD" and a skill says "always use TDD," follow the user's instructions. The user is in control.
>
> ## How to Access Skills
>
> **In Claude Code:** Use the `Skill` tool. When you invoke a skill, its content is loaded and presented to you鈥攆ollow it directly. Never use the Read tool on skill files.
>
> **In Copilot CLI:** Use the `skill` tool. Skills are auto-discovered from installed plugins. The `skill` tool works the same as Claude Code's `Skill` tool.
>
> **In Gemini CLI:** Skills activate via the `activate_skill` tool. Gemini loads skill metadata at session start and activates the full content on demand.
>
> **In other environments:** Check your platform's documentation for how skills are loaded.
>
> ## Platform Adaptation
>
> Skills use Claude Code tool names. Non-CC platforms: see `references/copilot-tools.md` (Copilot CLI), `references/codex-tools.md` (Codex) for tool equivalents. Gemini CLI users get the tool mapping loaded automatically via GEMINI.md.
>
> # Using Skills
>
> ## The Rule
>
> **Invoke relevant or requested skills BEFORE any response or action.** Even a 1% chance a skill might apply means that you should invoke the skill to check. If an invoked skill turns out to be wrong for the situation, you don't need to use it.
>
> ```dot
> digraph skill_flow {
>     "User message received" [shape=doublecircle];
>     "About to EnterPlanMode?" [shape=doublecircle];
>     "Already brainstormed?" [shape=diamond];
>     "Invoke brainstorming skill" [shape=box];
>     "Might any skill apply?" [shape=diamond];
>     "Invoke Skill tool" [shape=box];
>     "Announce: 'Using [skill] to [purpose]'" [shape=box];
>     "Has checklist?" [shape=diamond];
>     "Create TodoWrite todo per item" [shape=box];
>     "Follow skill exactly" [shape=box];
>     "Respond (including clarifications)" [shape=doublecircle];
> ````
>
> Success
>
> </details>
>
> 可以，我来处理。先不碰你的节点和订阅，只定位 Clash Verge 的实际配置目录，然后给 Steam/PUBG 加一组直连规则；如果配置文件在工作区外需要写入权限，我会走授权，不会硬改。
>
> <details><summary>Ran 1 command</summary>
>
> - Ran `Get-Content -Path C:\Users\cc\.codex\skills\systematic-debugging\SKILL.md -TotalCount 80`
>
> </details>
>
> 根因已经有证据了，所以现在进入修复阶段：我会优先找 Clash Verge 的 `profiles`、`merge`、`rules` 或 `override` 配置。最稳的是加到 Verge 的覆写/全局规则里，这样订阅更新也不容易把修复冲掉。
>
> <details><summary>Ran 6 commands</summary>
>
> - Ran `Get-ChildItem -Path $env:APPDATA -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -match 'clash|verge|mihomo' } | Select-Object FullName,LastWriteTime`
> - Ran `Get-ChildItem -Path $env:LOCALAPPDATA -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -match 'clash|verge|mihomo' } | Select-Object FullName,LastWriteTime`
> - Ran `Get-ChildItem -Path 'g:\Program Files\Clash Verge' -Force -ErrorAction SilentlyContinue | Select-Object FullName,LastWriteTime,Length`
> - Ran `Get-ChildItem -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev' -Force -Recurse -ErrorAction SilentlyContinue | Select-Object FullName,LastWriteTime,Length | Sort-Object LastWriteTime -Descending | Select-Object -First 120`
> - Ran `Get-ChildItem -Path 'C:\Users\cc\AppData\Local\io.github.clash-verge-rev.clash-verge-rev' -Force -Recurse -ErrorAction SilentlyContinue | Select-Object FullName,LastWriteTime,Length | Sort-Object LastWriteTime -Descending | Select-Object -First 80`
> - Ran `Select-String -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\*' -Pattern 'merge|profile|rule|script|tun|7897|DIRECT|steam' -CaseSensitive:$false -ErrorAction SilentlyContinue | Select-Object -First 120 Path,LineNumber,Line`
>
> </details>
>
> 我找到了 Clash Verge Rev 的配置目录，里面已经有 `profiles\\Merge.yaml` 和 `profiles\\Script.js`，这通常就是“订阅合并/覆写”的位置。现在我会读这两个文件，判断应该补规则到哪里最不影响你现有配置。
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles.yaml' -TotalCount 220`
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles\Script.js' -TotalCount 220`
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles\Merge.yaml' -TotalCount 220`
> - Ran `Select-String -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\verge.yaml' -Pattern 'merge|script|profile|chain|current|selected|valid|enable|enhanced|prepend|rule' -CaseSensitive:$false | Select-Object -First 160 LineNumber,Line`
>
> </details>
>
> 当前生效的订阅是 `RKruVhs56qRY`，它不是用默认 `Merge.yaml`，而是挂了专属覆写文件：`mG7leAl2qcOs.yaml`、`sJKYor9bS3y0.js`、`rqTA0o4nhLRh.yaml` 等。我要改当前订阅绑定的文件，而不是改闲置模板。
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles\mG7leAl2qcOs.yaml' -TotalCount 240`
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles\sJKYor9bS3y0.js' -TotalCount 240`
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles\rqTA0o4nhLRh.yaml' -TotalCount 260`
> - Ran `Select-String -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml' -Pattern 'steam|pubg|krafton|steamserver|rules|MATCH|7897|DIRECT' -CaseSensitive:$false | Select-Object -First 120 LineNumber,Line`
>
> </details>
>
> 我准备把这些规则加入当前订阅的 `rules` 覆写文件 `rqTA0o4nhLRh.yaml` 的 `prepend` 段，让它们排在订阅规则最前面优先生效。会先生成 `.bak` 备份，再写入规则。
>
> <details><summary>Ran 1 command</summary>
>
> - Ran `$path = 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles\rqTA0o4nhLRh.yaml'
> $backup = "$path.bak-pubg-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
> Copy-Item -LiteralPath $path -Destination $backup
> $text = Get-Content -LiteralPath $path -Raw
> $rules = @'
> prepend:
> - DOMAIN-SUFFIX,steamserver.net,DIRECT
> - DOMAIN-SUFFIX,steampowered.com,DIRECT
> - DOMAIN-SUFFIX,steamcommunity.com,DIRECT
> - DOMAIN-SUFFIX,steamstatic.com,DIRECT
> - DOMAIN-SUFFIX,steamcontent.com,DIRECT
> - DOMAIN-SUFFIX,steamusercontent.com,DIRECT
> - DOMAIN-SUFFIX,steamgames.com,DIRECT
> - DOMAIN-SUFFIX,valvesoftware.com,DIRECT
> - DOMAIN-SUFFIX,pubg.com,DIRECT
> - DOMAIN-SUFFIX,krafton.com,DIRECT
> - DOMAIN-SUFFIX,battlegrounds.pubg.com,DIRECT
> - DOMAIN-SUFFIX,playbattlegrounds.com,DIRECT
> - PROCESS-NAME,steam.exe,DIRECT
> - PROCESS-NAME,steamwebhelper.exe,DIRECT
> - PROCESS-NAME,TslGame.exe,DIRECT
> - PROCESS-NAME,TslGame_BE.exe,DIRECT
> - PROCESS-NAME,ExecPubg.exe,DIRECT
> '@
> if ($text -match 'steamserver\.net|TslGame\.exe|ExecPubg\.exe') { Write-Output "PUBG/Steam rules already present in $path" } else {
>   $text = $text -replace '(?m)^prepend:\s*\[\]\s*$', $rules.TrimEnd()
>   Set-Content -LiteralPath $path -Value $text -Encoding UTF8
>   Write-Output "Updated $path"
> }
> Write-Output "Backup: $backup"`
>
> </details>
>
> 规则已经写进去了，并且有备份。接下来我会确认文件内容，再让 Clash 重新加载这份配置；如果它没有自动加载，我会用重启核心的方式刷新。
>
> <details><summary>Ran 3 commands</summary>
>
> - Ran `Get-Content -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\profiles\rqTA0o4nhLRh.yaml' -TotalCount 80`
> - Ran `Select-String -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\logs\service\service_latest.log','C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\logs\latest.log' -Pattern 'reload|config|error|rules|rqTA0o4nhLRh|updated|profile' -CaseSensitive:$false -ErrorAction SilentlyContinue | Select-Object -Last 80 Path,LineNumber,Line`
> - Ran `Get-Process -ErrorAction SilentlyContinue | Where-Object { $_.ProcessName -match 'clash-verge|verge-mihomo|clash-core-service|clash-verge-service' } | Select-Object Id,ProcessName,Path`
>
> </details>
>
> 当前只看到 Clash 的后台服务进程，UI 似乎不在进程列表里；所以我会同时把当前已生成的 `clash-verge.yaml` 活跃配置也补上规则，避免只改覆写文件但核心还没重新生成。然后再重启 Clash 核心让它立刻吃到新配置。
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `$path = 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml'
> $backup = "$path.bak-pubg-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
> Copy-Item -LiteralPath $path -Destination $backup
> $text = Get-Content -LiteralPath $path -Raw
> if ($text -match 'steamserver\.net|TslGame\.exe|ExecPubg\.exe') {
>   Write-Output "PUBG/Steam rules already present in active config: $path"
> } else {
>   $insert = @'
> rules:
> - DOMAIN-SUFFIX,steamserver.net,DIRECT
> - DOMAIN-SUFFIX,steampowered.com,DIRECT
> - DOMAIN-SUFFIX,steamcommunity.com,DIRECT
> - DOMAIN-SUFFIX,steamstatic.com,DIRECT
> - DOMAIN-SUFFIX,steamcontent.com,DIRECT
> - DOMAIN-SUFFIX,steamusercontent.com,DIRECT
> - DOMAIN-SUFFIX,steamgames.com,DIRECT
> - DOMAIN-SUFFIX,valvesoftware.com,DIRECT
> - DOMAIN-SUFFIX,pubg.com,DIRECT
> - DOMAIN-SUFFIX,krafton.com,DIRECT
> - DOMAIN-SUFFIX,battlegrounds.pubg.com,DIRECT
> - DOMAIN-SUFFIX,playbattlegrounds.com,DIRECT
> - PROCESS-NAME,steam.exe,DIRECT
> - PROCESS-NAME,steamwebhelper.exe,DIRECT
> - PROCESS-NAME,TslGame.exe,DIRECT
> - PROCESS-NAME,TslGame_BE.exe,DIRECT
> - PROCESS-NAME,ExecPubg.exe,DIRECT
> '@
>   $text = $text -replace '(?m)^rules:\s*$', $insert.TrimEnd()
>   Set-Content -LiteralPath $path -Value $text -Encoding UTF8
>   Write-Output "Updated active config: $path"
> }
> Write-Output "Backup: $backup"`
> - Ran `Get-Service | Where-Object { $_.Name -match 'clash|verge|mihomo' -or $_.DisplayName -match 'clash|verge|mihomo' } | Select-Object Name,DisplayName,Status,StartType`
> - Ran `netstat -ano | Select-String ':7897'`
> - Ran `Select-String -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml' -Pattern 'steamserver|steampowered|TslGame|ExecPubg|^rules:' -CaseSensitive:$false | Select-Object -First 50 LineNumber,Line`
>
> </details>
>
> 活跃配置里规则已确认排在 `rules:` 开头。现在 7897 暂时没有监听，说明核心可能刚好不在运行或服务处在异常状态；我会重启 Clash Core Service 和 Clash Verge Service，让 7897 重新起来并加载新规则。
>
> <details><summary>Ran 1 command</summary>
>
> - Ran `Restart-Service -Name 'Clash Core Service','clash_verge_service' -Force
> Start-Sleep -Seconds 3
> Get-Service -Name 'Clash Core Service','clash_verge_service' | Select-Object Name,Status
> netstat -ano | Select-String ':7897'`
>
> </details>
>
> 服务状态显示 Running，但 Windows 不让我直接重启服务；目前 7897 没有监听，这反而说明 Steam 不会再被 7897 代理拦住。为了让 Clash 本身恢复可用，我会启动 Clash Verge，让它自己拉起核心并加载刚写好的配置。
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `Start-Process -FilePath 'G:\Program Files\Clash Verge\clash-verge.exe' -WindowStyle Hidden
> Start-Sleep -Seconds 5
> Get-Process -ErrorAction SilentlyContinue | Where-Object { $_.ProcessName -match 'clash-verge|verge-mihomo|clash-core-service|clash-verge-service' } | Select-Object Id,ProcessName,Path
> netstat -ano | Select-String ':7897'`
> - Ran `netstat -ano | Select-String ':7897'`
> - Ran `Select-String -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\logs\service\service_latest.log','C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\logs\latest.log' -Pattern 'error|failed|panic|listen|7897|start|config|parse|rules' -CaseSensitive:$false -ErrorAction SilentlyContinue | Select-Object -Last 100 Path,LineNumber,Line`
> - Ran `Get-Process -Id 36100,37184 -ErrorAction SilentlyContinue | Select-Object Id,ProcessName,Path,StartTime`
>
> </details>
>
> 7897 已经重新监听，`verge-mihomo` 也起来了。最后一步我会重启 Steam/PUBG 相关进程，让它们重新走新规则拿鉴权票据；这会关闭当前 PUBG/Steam 会话，然后重新打开 Steam。
>
> <details><summary>Ran 1 command</summary>
>
> - Ran `$names = 'TslGame','TslGame_BE','ExecPubg','steam','steamwebhelper'
> Get-Process -ErrorAction SilentlyContinue | Where-Object { $names -contains $_.ProcessName } | Stop-Process -Force
> Start-Sleep -Seconds 3
> Start-Process -FilePath 'E:\Program Files (x86)\Steam\steam.exe' -WindowStyle Hidden
> Start-Sleep -Seconds 8
> Get-Process -ErrorAction SilentlyContinue | Where-Object { $_.ProcessName -match 'steam|TslGame|ExecPubg|verge-mihomo|clash-verge' } | Select-Object Id,ProcessName,Path`
>
> </details>
>
> Steam 已重启，PUBG 进程也清掉了。现在我再看一下新的 Steam 连接日志，看 7897 是否还在 Bad Gateway/断线循环。
>
> <details><summary>Ran 3 commands</summary>
>
> - Ran `Get-Content -Path 'E:\Program Files (x86)\Steam\logs\connection_log.txt' -Tail 80`
> - Ran `Select-String -Path 'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\logs\latest.log','C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\logs\service\service_latest.log' -Pattern 'steamserver|steampowered|steamcommunity|TslGame|DIRECT|Bad Gateway|error|failed' -CaseSensitive:$false -ErrorAction SilentlyContinue | Select-Object -Last 80 Path,LineNumber,Line`
> - Ran `netstat -ano | Select-String ':7897' | Select-Object -First 40`
>
> </details>
>
> 新的日志有个好信号：Steam 重启后 11:44:45 的 IPv6 HTTP 测试已经不再显示 `127.0.0.1:7897`，而是直接连外部地址并成功了。说明新规则开始生效；我再等几秒确认 Steam 登录完成。
>
> <details><summary>Ran 2 commands</summary>
>
> - Ran `Start-Sleep -Seconds 10
> Get-Content -Path 'E:\Program Files (x86)\Steam\logs\connection_log.txt' -Tail 80`
> - Ran `Start-Sleep -Seconds 20
> Select-String -Path 'E:\Program Files (x86)\Steam\logs\connection_log.txt' -Pattern '2026-05-04 11:44|2026-05-04 11:45|2026-05-04 11:46|Bad Gateway|RecvMsgClientLogOnResponse|Logged On|ConnectionDisconnected|Connectivity test' | Select-Object -Last 80 Line`
>
> </details>
</details>

处理好了。 我给 Clash Verge 当前订阅和当前活跃配置都加了 Steam/PUBG 直连规则，并重启了 Clash Verge 和 Steam。

关键验证结果：重启 Steam 后日志里已经变成直连成功了：

```text
IPv6 HTTP connectivity test ... SUCCESS
Connectivity test ... OK
RecvMsgClientLogOnResponse() ... 'OK'
```

之前的 `127.0.0.1:7897 ... Bad Gateway` 断线已经不再出现在新登录这一段里。现在你可以直接从 Steam 启动 PUBG 试一下。

我也留了备份：

```text
rqTA0o4nhLRh.yaml.bak-pubg-20260504-114108
clash-verge.yaml.bak-pubg-20260504-114224
```

如果 PUBG 还报同样错误，我下一步就看这次新启动后的 `TslGame.log`，但目前 Steam 鉴权链路已经明显修好了。
