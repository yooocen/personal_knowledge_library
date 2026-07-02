---
tags:
  - gdb
---
这个layout专门服务于TUI模式

快捷键：
- `Ctrl+X Ctrl+A`— 进入/退出 TUI 模式
- `Ctrl+L`— 刷新屏幕（画面乱了时用）

|**<br><br>命令<br><br>**|**<br><br>说明<br><br>**|
|---|---|
|`layout src`|源码 + 命令窗口|
|`layout asm`|汇编 + 命令窗口|
|`layout split`|源码 + 汇编 + 命令窗口|
|`layout regs`|寄存器 + 源码 + 命令窗口|
|`layout next`|循环切换到下一个 layout|
|`layout prev`|循环切换到上一个 layout|

```
# 设置源码窗口占 70% 高度
winheight src 70

# 相对调整（±N）
winheight src +5
winheight src -5

# 设置寄存器窗口高度
winheight regs 10
```