很好，这个信息已经足够精确定位问题。

你目录里存在：

.bash_profile  
.profile  
.bashrc  
.zprofile  
.zshrc

⚠️ **关键点：只要存在 `.bash_profile`，bash 登录时就不会读取 `.profile`。**

而默认 Ubuntu 是依赖 `.profile` 去 source `.bashrc` 的。

---

# 结论

你的 `.bash_profile` 很可能 **没有 source `.bashrc`**  
所以每次启动 login shell 时 `.bashrc` 根本没被加载。

这就是你必须手动 `source ~/.bashrc` 的根本原因。

---

# 立即验证

执行：

cat ~/.bash_profile

大概率你会看到是空的，或者没有：
```
if [ -f ~/.bashrc ]; then  
    . ~/.bashrc  
fi
```


---

# 正确修复方式（推荐）

编辑：

nano ~/.bash_profile

改成：

# Load .bashrc if it exists  
if [ -f ~/.bashrc ]; then  
    . ~/.bashrc  
fi

保存。

然后彻底重启 WSL：

wsl --shutdown

重新打开 Ubuntu。

---

# 为什么会这样？

Bash 的启动优先级规则是：

如果是 login shell：

1. 先找 `~/.bash_profile`
    
2. 没有才找 `~/.bash_login`
    
3. 再没有才找 `~/.profile`
    

只要 `.bash_profile` 存在，`.profile` 就不会执行。

而 Ubuntu 默认是：

`.profile` → source `.bashrc`

你现在等于把这个链路截断了。

---

# 你目录里还有一个信号

你有：

.zprofile  
.zshrc

说明你之前可能切换过 zsh。

很可能 `.bash_profile` 是你装 oh-my-zsh 或某些工具时生成的。

---

# 更干净的做法（专业建议）

如果你不需要 `.bash_profile`：

rm ~/.bash_profile

让系统回到 Ubuntu 默认逻辑。

因为：

Ubuntu 官方设计就是用 `.profile`。

---

# 最优结构建议（WSL 环境）

推荐只保留：

.bashrc  
.profile

删除：

.bash_profile  
.profile.save（如果无用）

保持最简单结构，避免 shell 启动链混乱。

---

# 你现在的根因总结

✔ 有 `.bash_profile`  
✔ 它没有 source `.bashrc`  
✔ bash 登录时跳过 `.profile`  
✔ `.bashrc` 不执行  
✔ 你必须手动 source

这是标准的 bash 启动机制行为，不是 WSL bug。