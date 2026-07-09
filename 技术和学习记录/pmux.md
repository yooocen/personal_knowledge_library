# 配置文件
window版本的tmux
配置文件在用户/用户名/.psmux.config

如果遇到没法滚动的问题（在opencode或者lazygit滚动不了），就升级到3.3.6

# 搭配lazygit使用遇到的问题

使用hjkl，进行上下左右，会连续跳2次
根因：psmux使用ConPTY， ConPTY自动启用Win32 Input Mode，导致每次按键同时发送KeyDown + KeyRelease两个事件，lazygit的gocui库把2个事件都当按键处理，所以跳2次

解决方案：启动lazygit前发送`\x1b[?9001l` 禁用Win32 Input Mode
写一个sh
```
#!/bin/bash
printf '\x1b[?9001l'
lazygit "$@"
```


# 如何直接滚动到页尾
如果你已经在滚动模式里，也可以直接按：
G：到页尾
g：到页首
q 或 Esc：退出滚动模式

# 安装插件

winget install marlocarlo.tmuxpanel