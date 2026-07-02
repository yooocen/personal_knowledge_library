# 交互命令

cc很常用的有三个
- / 交互命令
- ! 输入终端命令
- @ 选择文件
- ? 查看所有快捷键的解释

交互命令常用的是
/init 理解项目并且生成一个项目记忆CLAUDE.md
/resume 切换对话
/rename 对话重命名
/rewind 回到某次对话
/compact 压缩上下文以增加上下文长度，继续对话
/permission 设置cc执行命令的权限
/skills 展示当前可以使用的skill
/mcp 管理mcp服务器
/plan 启动计划模式

ctrl+o 展开执行命令的详细输出
ctrl+b 执行命令放在后台执行（暂停当前正在执行的复杂任务，等待新的指令）
ctrl+c 停止执行当前的复杂任务，继续执行下一个任务
ctrl+r 搜索历史输入的prompt

输入!会切换到命令执行模式
![[Pasted image 20260303193053.png|416]]

以上内容都可以在下面的官方文档中查询到
https://code.claude.com/docs/en/interactive-mode

放开执行权限
https://code.claude.com/docs/en/permissions

- Bash
- Read
- Edit
- WebSearch

扩展思考能力
https://code.claude.com/docs/en/common-workflows#use-extended-thinking-thinking-mode
![[Pasted image 20260304100047.png]]

# 安装MCP


# 安装Skill
https://code.claude.com/docs/en/skills#extend-claude-with-skills