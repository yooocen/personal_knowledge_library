---
tags:
  - aiagent
  - ai控制浏览器
  - browser
  - playwright
  - ai
---
很多人第一次接触这两个项目都会混淆，因为它们都来自 Browser Use 生态，但定位其实不一样。

| 对比项  | Browser Use          | Browser Harness                |
| ---- | -------------------- | ------------------------------ |
| 定位   | AI Agent 浏览器自动化框架    | 给 AI Agent 直接控制真实浏览器的超薄层       |
| 抽象层级 | 高                    | 极低                             |
| 底层   | Playwright + Agent框架 | Chrome DevTools Protocol (CDP) |
| 使用方式 | 写任务 → Agent执行        | Agent直接操作浏览器                   |
| 目标用户 | 应用开发者                | Agent开发者、研究者                   |
| 稳定性  | 更高                   | 更灵活                            |
| 可扩展性 | 受框架限制                | 几乎无限制                          |
| 学习成本 | 低                    | 高                              |

---

## Browser Use 是什么

[Browser Use Github](https://github.com/browser-use/browser-use?utm_source=chatgpt.com)

Browser Use 更像：

```text
LLM
 ↓
Browser Use
 ↓
Playwright
 ↓
Chrome
```

你给它一个任务：

```python
agent = Agent(
    task="登录 Github 并查看我的 PR"
)
```

它会：

* 理解页面
* 找按钮
* 点击
* 输入内容
* 自动规划步骤

你基本不用关心浏览器细节。

适合：

* Agent项目
* 自动化办公
* 数据采集
* 网站测试

---

## Browser Harness 是什么

[Browser Harness Github](https://github.com/browser-use/browser-harness?utm_source=chatgpt.com)

Browser Harness 的理念非常激进：

```text
LLM
 ↓
Browser Harness
 ↓
CDP
 ↓
Chrome
```

几乎没有中间层。

官方甚至描述为：

> One websocket to Chrome, nothing between. ([GitHub][1])

意思是：

* 直接连接 Chrome
* 不包裹 Playwright
* 不提供大量封装
* Agent缺什么能力自己写

例如：

```text
Agent想上传文件
↓
发现没有upload函数
↓
自己修改agent_helpers.py
↓
新增upload能力
↓
继续执行任务
```

这就是它宣传的：

> self-healing（自修复）能力。 ([GitHub][1])

---

## 核心区别：谁在写代码

### Browser Use

开发者写代码：

```python
agent.run()
```

框架负责：

* 重试
* 页面解析
* 浏览器控制
* 工具调用

Agent只是使用工具。

---

### Browser Harness

Agent自己扩展工具：

```text
任务需要能力A
↓
没有
↓
Agent写能力A
↓
继续任务
```

工具本身是可编辑的。 ([DeepWiki][2])

这更接近：

```text
Claude Code
Codex
OpenCode
```

这种 Coding Agent 的工作模式。

---

## 对 Claude Code / Codex 用户来说

如果你在玩：

* Claude Code
* Codex CLI
* OpenCode
* OMO

那么 Browser Harness 最近特别火。

因为它的设计目标其实是：

> 让 Claude Code 或 Codex 直接拥有浏览器能力。 ([GitHub][1])

典型流程：

```text
Claude Code
 ↓
Browser Harness
 ↓
真实Chrome
```

然后你直接说：

```text
登录 Jira
查看我负责的 Bug
导出 Excel
```

Agent 自己完成。

---

## 什么时候选哪个

### 选 Browser Use

如果你：

* 做业务项目
* 做自动化脚本
* 做爬虫
* 希望稳定

选 Browser Use。

---

### 选 Browser Harness

如果你：

* 研究 AI Agent
* 使用 Claude Code
* 使用 Codex
* 想让 Agent 直接操控浏览器
* 想体验 Self-Healing Agent

选 Browser Harness。

---

结合你最近一直在研究：

* MCP
* AI Agent
* Claude Code
* OpenCode

我会建议你先玩 Browser Harness。

因为它现在基本已经成为 Claude Code 社区里最热门的浏览器方案之一，很多人把它当成“浏览器版的 MCP 工具”，让 Agent 直接接管 Chrome。 ([GitHub][1])

如果你愿意，我还可以进一步解释：

**Browser Harness、Playwright MCP、Chrome DevTools MCP、Browser Use 三者的架构区别，以及在 Claude Code 中应该选哪个。**

[1]: https://github.com/browser-use/browser-harness?utm_source=chatgpt.com "GitHub - browser-use/browser-harness: Browser Harness | Self-healing harness that enables LLMs to complete any task. · GitHub"
[2]: https://deepwiki.com/browser-use/browser-harness?utm_source=chatgpt.com "browser-use/browser-harness | DeepWiki"
