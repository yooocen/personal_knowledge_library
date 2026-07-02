登录容器以后如何退出
输入exit

如何启动容器进行调试
sudo docker run --rm -it node:22-bookworm-slim

解析：
--rm 容器退出后自动删除
--it 

|参数|含义|
|---|---|
|`-i`|interactive，保持标准输入打开|
|`-t`|tty，分配一个伪终端|

✅ 合在一起的效果：你可以像在本地终端一样和容器交互

node:22-bookworm-slim

| name     | 含义                        |
| -------- | ------------------------- |
| node<br> | 官方 Node.js 镜像             |
| 22       | Node.js 主版本 22            |
| bookworm | 基于 Debian 12（代号 bookworm） |
| slim     | 精简版（体积更小，少工具）             |




