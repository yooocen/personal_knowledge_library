---
tags:
  - vim
---
明白了，你是在 **Windows Terminal**​ 里运行的 Ubuntu（WSL）环境，并且用它在 Ubuntu 中启动 Neovim（LazyVim）。

那么图标不显示的原因和之前一样：**Windows Terminal 本身需要安装并选择 Nerd Font，否则即使 Ubuntu 里装了字体，终端渲染的还是普通字体，导致图标显示为方块/问号**。

---

## 一、原理说明

- WSL 里的 Ubuntu 系统有自己的字体，但 Windows Terminal 作为前端，它负责最终渲染文字。
    
- 如果 Windows Terminal 的字体不是 Nerd Font，它会 fallback 到普通字体，而普通字体不包含那些图标符号，于是你看到的就是乱码。
    
- 所以我们要在 **Windows 系统**​ 安装 Nerd Font，并在 Windows Terminal 的设置里选用它。
    

---

## 二、在 Windows 上安装 Nerd Font（一次搞定）

### 方法 1：手动安装

1. 访问 [Nerd Fonts 下载页](https://www.nerdfonts.com/font-downloads)。
    
2. 推荐下载 **FiraCode Nerd Font**（或其他你喜欢的，比如 JetBrainsMono Nerd Font）。
    
3. 下载后得到一个 `.zip`文件，解压得到一堆 `.ttf`文件。
    
4. 全选这些 `.ttf`文件，右键 → **安装**（Install for all users 或当前用户均可）。
    

### 方法 2：用 PowerShell 自动安装（可选）

```
# 以管理员身份打开 PowerShell
Invoke-WebRequest -Uri https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/FiraCode.zip -OutFile "$env:TEMP\FiraCode.zip"
Expand-Archive -Path "$env:TEMP\FiraCode.zip" -DestinationPath "$env:TEMP\FiraCodeNF"
Copy-Item "$env:TEMP\FiraCodeNF\*.ttf" -Destination "$env:LOCALAPPDATA\Microsoft\Windows\Fonts"
Remove-Item "$env:TEMP\FiraCode.zip", "$env:TEMP\FiraCodeNF" -Recurse -Force
```

安装完成后可以在 `C:\Windows\Fonts`或 `%LOCALAPPDATA%\Microsoft\Windows\Fonts`看到新字体。

---

## 三、在 Windows Terminal 中选择 Nerd Font

1. 打开 **Windows Terminal**。
    
2. 点击顶部下拉箭头 → **设置 (Settings)**，或者按 `Ctrl + ,`。
    
3. 在左侧选择你要配置的 **Ubuntu profile**（如果没有单独配置，就是默认的 `{ "name": "Ubuntu" }`）。
    
4. 找到 **Appearance**（外观）→ **Font face**（字体），在下拉列表里选择：
    
    ```
    FiraCode Nerd Font
    ```
    
    或
    
    ```
    FiraCode NF
    ```
    
    或
    
    ```
    FiraCode Nerd Font Mono
    ```
    
    如果看不到，说明字体没装好，回到第二步检查。
    
5. 保存设置（通常会自动保存）。
    

---

## 四、WSL Ubuntu 内部也要装字体吗？

其实 WSL 内部的字体不影响 Windows Terminal 的显示，因为渲染工作在 Windows 端完成。

但为了某些 GUI 程序（如 VcXsrv）或本地 Linux GUI，你可以在 Ubuntu 内也装一份 Nerd Font（参考之前的 Ubuntu 安装步骤），不过这不是必须的。

---

## 五、验证效果

1. 重启 Windows Terminal（完全关掉再打开）。
    
2. 打开 Ubuntu 标签，进入 Neovim：
    
    ```
    nvim
    ```
    
3. 在 Normal 模式下输入：
    
    ```
    :echo ""
    ```
    
    应该看到一个图标而不是方块。
    
4. 浏览 LazyVim 界面（文件树、状态栏、插件图标等），检查是否正常显示。
    

---

✅ 总结关键点：

**Windows Terminal 的字体必须设为 Nerd Font**，WSL 内装不装无所谓，只要终端字体对就行。

这样 LazyVim 的图标就能在 Ubuntu + WSL + Windows Terminal 环境下正常显示。

如果你愿意，我可以给你一个一键在 Windows 上安装 Nerd Font 并配置 Windows Terminal 的 PowerShell 脚本，让你双击就完成所有操作。你需要吗？