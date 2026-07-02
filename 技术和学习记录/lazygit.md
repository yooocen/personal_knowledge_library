shift + / 可以打开Help面板
在分支按p，是push

全局刷新键
1 R （跳到1面板，再按refresh）

lazygit里面如何安全的在错误reset以后回到最初的状态
输入 ==:==， 再输入下面的命令，最好是创建一个救援分支rescue，后面处理好了以后cherry-pick回来
git reflog
git branch rescue HEAD@{1}

`+ -`可以对区域进行放大缩小


r:: [[wsl的git和window的git显示不一致]]
同一个项目可以同时用 WSL Git 和 Windows Git，但最好把规则固定下来，否则容易遇到换行、权限、大小写、凭据、hooks 不一致。

最推荐配置是：**仓库级配置 + `.gitattributes` 固定换行**。

**1. 固定换行规则**

在项目根目录加 `.gitattributes`：

```gitattributes
* text=auto
*.sh text eol=lf
*.bash text eol=lf
*.ps1 text eol=crlf
*.bat text eol=crlf
*.cmd text eol=crlf
```

然后在 WSL 和 Windows 两边都建议：

```bash
git config --global core.autocrlf false
```

这样换行主要由 `.gitattributes` 控制，不让两个 Git 各自“聪明处理”。

**2. 在这个仓库里关闭 filemode**

如果项目在 Windows 盘，比如 `/mnt/c/...`，WSL 可能会看到文件权限变化。建议在项目目录里执行：

```bash
git config core.filemode false
```

这个是仓库级配置，通常够用。

**3. 注意大小写**

Windows 文件系统通常大小写不敏感。不要同时存在：

```text
User.ts
user.ts
```

建议保持：

```bash
git config core.ignorecase true
```

一般 Windows Git 会自动这么设；WSL 访问 `/mnt/c` 项目时也建议确认一下：

```bash
git config core.ignorecase
```

**4. 不要同时操作 Git**

不要 Windows Git 正在 commit/rebase/merge 的时候，WSL lazygit 也在操作同一个仓库。容易出现：

```text
index.lock
```

或状态显示混乱。一个 Git 操作结束后再用另一个。

**5. hooks 要小心**

如果项目有 `.git/hooks` 或 husky/lint-staged：

- Shell 脚本要用 LF
- Windows Git 执行 hooks 和 WSL Git 执行 hooks 的环境不同
- Node、Python、包管理器路径可能不同

如果团队里 Windows/WSL 混用，hooks 里尽量用跨平台命令，或者明确要求在哪边提交。

**6. 凭据分开配置**

Windows Git 和 WSL Git 的 credential helper 通常不是同一个。可以分别查：

```bash
git config --global credential.helper
```

Windows 常见是 Git Credential Manager；WSL 里可能需要单独登录 GitHub/GitLab。

**我的建议**

如果只是编辑器在 Windows、命令行在 WSL：尽量统一用 **WSL Git**。  
如果你经常用 Windows GUI 工具、又用 WSL lazygit：可以混用，但务必设置：

```bash
git config --global core.autocrlf false
git config core.filemode false
```

再用 `.gitattributes` 管换行。这样最稳。


重新规范化所有文件的换行符：
`git add --renormalize`

分页
,.

回到最上面或者最下面
<>

小窗口切换tab
按\[   \] 进行切换
![[Pasted image 20260529105755.png]]

单文件滚回操作
找到一个commit ，选择其中的一个文件，按c可以恢复回这个commit的这个文件

单次commit滚回操作
选择一次commit，选c，相当于checkout，会以这个commitid创建一个新分支

cherry-pick
![[Pasted image 20260529142029.png|935]]

一定要在commit面板点才会生效


按Tab，才能在Staged和Unstaged之间切换

ctrl+s 可以过滤文件的git的版本管理历史

解决冲突
