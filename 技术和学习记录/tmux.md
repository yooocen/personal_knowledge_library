---
tags:
  - tmux
---
cheatsheet

[Tmux Cheat Sheet & Quick Reference | Session, window, pane and more](https://tmuxcheatsheet.com/)

关闭ctrl+b，改为ctrl+a
修改文件：.tmux.conf.local

```
# replace C-b by C-a instead of using both prefixes
set -gu prefix2 #!important
unbind C-a #!important
unbind C-b #!important
set -g prefix C-a #!important
bind C-a send-prefix #!important
bind -n C-b send-keys C-b #!important
```


2个pane进行合并
```
  1. 按你的 tmux 前缀键，默认是：

  Ctrl-b

  2. 松开后按：

  :

  3. 底部出现命令行后输入：

  join-pane -s :2 -t :1

  4. 回车。

  这会把窗口 2 合并到窗口 1。

  如果你想把“当前窗口”合并到窗口 1，可以先在当前窗口里执行：

  join-pane -t :1

  左右分屏：

  join-pane -h -t :1

  上下分屏：

  join-pane -v -t :1
```



 将上下分屏改左右分屏
 ```
   Ctrl-b

  松开后按：

  Space

  tmux 会在几种布局之间切换，通常能切到左右分屏。

  如果想直接切成左右布局：

  1. 按 Ctrl-b
  2. 按 :
  3. 输入：

  select-layout even-horizontal

  然后回车。

  常用布局：

  select-layout even-horizontal   # 左右分屏
  select-layout even-vertical     # 上下分屏
 ```

左右分屏和上下分屏调换一下位置
ctrl+b {
ctrl +b }


将一个pane临时放大是 ctrl+b z
将一个pane以window打开是 ctrl+b +

上下分屏 ctrl+b "
左右分屏 ctrl+b %