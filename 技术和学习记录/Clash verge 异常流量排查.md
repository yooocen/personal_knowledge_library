# Clash 流量异常排查与处理攻略

更新时间：2026-04-15

## 一句话结论

这次问题更像是 `Clash` 开启后代理口对外暴露，导致异常请求持续打到代理上，而不是典型的 `TUN` 自环。

## 我已经修改了什么

我实际落地的修改只有两处，都是收紧本地 `Clash Verge Rev` 配置：

1. 把 [`C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\config.yaml`](C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\config.yaml) 里的
   `allow-lan: true`
   改成了
   `allow-lan: false`

2. 把 [`C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml`](C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml) 里的   
   `allow-lan: true`
   改成了
   `allow-lan: false`

## 我额外做了什么

1. 创建了两个备份文件：
   [`C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\config.yaml.bak-20260414-1`](C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\config.yaml.bak-20260414-1)
   [`C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml.bak-20260414-1`](C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml.bak-20260414-1)

2. 核实了当前监听状态：
   `verge-mihomo` 进程监听 `127.0.0.1:7897`
   `verge-mihomo` 进程监听 `::53`
   旧的 `clash-core-service` 仍存在，监听 `127.0.0.1:53000`

3. 核实了当前防火墙和旧服务残留：
   旧的 `Clash for Windows` / `clash-win64` 入站规则仍然启用
   `Clash Core Service` 仍然是 `Running + Automatic`

## 我没有改成的东西

下面这些我尝试过，但因为系统权限不够，没有真正执行成功：

1. 禁用旧版 `Clash for Windows` / `clash-win64` 的入站防火墙规则
2. 停止并禁用旧的 `Clash Core Service`
3. 重启 `clash_verge_service` 来强制刷新全部系统级状态

系统返回的是 `Access is denied`，所以这部分需要你用管理员权限再跑一次。

## 为什么这样改

核心原因是你原来的配置里同时满足了下面几个条件：

1. 代理端口开启：
   `mixed-port: 7897`
   `socks-port: 7898`
   `port: 7899`

2. 开了局域网监听：
   `allow-lan: true`

3. 机器存在公网可达的 IPv6 地址

4. 系统里还残留了旧版 `Clash for Windows` 的防火墙放行规则

这几个条件叠在一起，风险就是：
`Clash` 开启时，代理口可能不仅对本机开放，还可能被局域网甚至公网侧访问。

## 当前验证结果

截至这份文档生成时，已经确认：

1. `allow-lan` 已经是 `false`
2. `7897` 现在只监听在 `127.0.0.1`
3. 没有看到 `7897/7898/7899` 监听在 `0.0.0.0`
4. 旧版防火墙规则还在
5. 旧版 `Clash Core Service` 还在

这意味着：
本次我做的配置改动已经缩小了暴露面，但系统里仍有旧版残留需要清理。

## 你下一步该怎么做

请用“管理员 PowerShell”执行下面这段：

```powershell
Get-NetFirewallRule -DisplayName 'clash-win64','Clash for Windows' -ErrorAction SilentlyContinue |
  Disable-NetFirewallRule

Stop-Service 'Clash Core Service' -Force -ErrorAction SilentlyContinue
Set-Service 'Clash Core Service' -StartupType Disabled

Restart-Service 'clash_verge_service' -Force
```

## 执行后怎么验证

执行完管理员命令后，再用普通 PowerShell 检查：

```powershell
Get-NetFirewallRule -DisplayName 'clash-win64','Clash for Windows' -ErrorAction SilentlyContinue |
  Select-Object DisplayName, Enabled, Direction, Action, Profile

Get-Service 'Clash Core Service','clash_verge_service' -ErrorAction SilentlyContinue |
  Select-Object Name, Status, StartType

Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -in 7897,7898,7899,53,9097,53000 } |
  Select-Object LocalAddress, LocalPort, OwningProcess
```

你想看到的结果是：

1. `Clash for Windows` / `clash-win64` 规则变成 `Enabled = False`
2. `Clash Core Service` 变成 `Stopped + Disabled`
3. `7897` 只监听在 `127.0.0.1`
4. 不再出现旧版 Clash 的额外监听行为

## 如果还异常升高，再查哪里

如果做完上面的收紧后，流量还是会在开启 `Clash` 后异常升高，就继续查这三块：

1. 浏览器扩展
   重点查 Chrome / Edge 里具备 `all_urls`、`notifications`、`webRequest` 权限的扩展

2. PUA / 广告软件残留
   你机器上有过 `PUAAdvertising` 类命中记录，这条线不能忽略

3. 旧代理残留组件
   包括 `Clash for Windows`、旧 TAP 网卡、旧服务、旧计划任务

## 回滚方法

如果你想回滚我改过的配置，直接用备份覆盖回去：

```powershell
Copy-Item `
  'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\config.yaml.bak-20260414-1' `
  'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\config.yaml' `
  -Force

Copy-Item `
  'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml.bak-20260414-1' `
  'C:\Users\cc\AppData\Roaming\io.github.clash-verge-rev.clash-verge-rev\clash-verge.yaml' `
  -Force
```

然后重启 `Clash Verge`。

## 补充说明

这次我故意没有直接关闭 DNS 模块，也没有直接改 `:53` 监听策略，原因是你的系统上 `53` 端口同时还有其他服务参与，贸然一起动，容易把正常解析链路一起打断。当前更优先的处理顺序是：

1. 先关 `allow-lan`
2. 再清旧版防火墙和旧服务
3. 还不行，再继续收紧 DNS 和浏览器侧

---



• 根因不是“allow-lan 会自己产流量”，而是“allow-lan 把你的 Clash 从本机代理，变成了一个网络上可访问的代理服务”。

  链路是这样的：

  1. allow-lan: false 时，AppData/Roaming/io.github.clash-verge-rev.clash-verge-rev/config.yaml:7 里的代理端口基本只给本机用。
  2. allow-lan: true 时，7897/7898/7899 不再只服务 127.0.0.1，而是会对局域网接口，甚至可能对公网可达接口开放。
  3. 你这台机器又同时具备几个放大条件：旧版 Clash for Windows 入站防火墙规则还在、旧 Clash Core Service 还在、机器还有公网
     IPv6，另外还有 natpierce 这类穿透环境。
  4. 于是外部请求就能“借你的 Clash 出网”。这时异常流量不是 Clash 自己发的，而是别人打进来后，Clash 代转发的。

  为什么我判断是“外部在用你的 Clash”，不是“你本机软件在跑”？

  因为我们前面看到的日志格式是这种：

  \[TCP\] 来源IP:端口 --> 目标域名:443

  而日志里的“来源 IP”是 162.251.*、204.76.*、207.32.* 这种公网地址，不是 127.0.0.1，也不是你局域网里常见的 192.168.* / 10.*。
  如果是你自己电脑上的浏览器或应用在走 Clash，来源通常应该是本机或内网地址，不会是一串公网客户端地址。

  所以更准确的说法是：

  - allow-lan 不是根因本身
  - 它是“把门打开”的开关
  - 真正导致异常流量暴涨的根因是：
    “门一打开，外部流量就能进来，并把你的 Clash 当成开放代理使用”

  关闭 Clash 后流量恢复正常，也正好符合这个模型：不是异常请求消失了，而是“代理入口没了”。