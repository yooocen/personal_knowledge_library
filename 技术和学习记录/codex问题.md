安装118版本的codex
```
npm install -g @openai/codex --registry=https://registry.npmmirror.com
```
可以用上面的淘宝源

安装完打开报以下的错误
Error: account/read failed during TUI bootstrap
.codex/config.toml里面，要改下面的配置
```
requires_openai_auth = false
```


```
 对话时间：2026-04-02
 问题
 启动 codex 时报错：Error: account/read failed during TUI bootstrap
 排查过程
 1. 检查环境变量 - OPENAI_API_KEY 没有设置
 2. 你的配置方式 - 使用自定义模型提供商：
 model_provider = "crs"
 model = "gpt-5.3-codex"
 env_key = "CRS_OAI_KEY"
 3. 检查 CRS_OAI_KEY - 已设置(长度:67)
 4. 修改配置 - 将 requires_openai_auth = true 改为 requires_openai_auth = false
 5. 遇到新错误 - Error loading config.toml: invalid transport in mcp_servers.codex_apps
 6. 尝试修复 MCP 配置 - 添加 transport = "stdio" 但仍然报错
 7. 最终解决 - 删除了 [mcp_servers.codex_apps] 和 [notice.model_migrations] 配置块
 8. 后续问题 - codex 启动后报了一堆 GSD agent role definition 格式错误的警告（这些是你 ~/.codex/agents/ 目录下的文件）
```


resume的记录，codex使用的是sqllite
 sudo apt-get install -y sqlite3
安装以上命令
聊天记录和项目路径、model、provider有关系

$才是codex执行命令的方式