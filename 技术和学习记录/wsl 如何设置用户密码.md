在 WSL（Windows Subsystem for Linux）中安装好一个 Linux 发行版（如 Ubuntu）后，系统会要求你首次启动时设置一个用户名和密码。但有时你可能跳过了这一步，或者需要为现有用户重设密码。下面分情况说明如何设置或更改用户密码。

---

## ✅ 情况一：首次启动 Ubuntu 时设置用户密码

当你第一次从开始菜单或命令行运行 `wsl`或 `ubuntu`时，会进入一个初始化过程，系统会提示你：

1. 输入一个 **新用户名**（非 root，建议小写字母）
    
2. 按回车
    
3. 系统会要求你为这个用户设置 **密码**
    
4. 输入两次密码（输入时不会显示字符，这是正常的）
    
5. 完成后，你就拥有了一个普通用户账户，并且具有 `sudo`权限
    

示例流程（终端中）：

```
Enter new UNIX username: yourname
New password:
Retype new password:
passwd: password updated successfully
```

之后就可以用这个用户登录了。

---

## ✅ 情况二：已安装但未设置密码（或忘记密码）

如果你之前安装时没有设置密码，或者忘记了密码，可以按以下步骤重置：

### 🔹 步骤 1：以 root 身份进入 WSL

在 PowerShell 或 CMD 中运行：

```
wsl -u root
```

这会直接以 **root 用户**​ 身份启动默认的 WSL 发行版（无需密码）。

> 如果你想指定某个发行版：
> 
> ```
> wsl -d Ubuntu-22.04 -u root
> ```

---

### 🔹 步骤 2：修改目标用户的密码

假设你原来的用户名是 `yourname`，执行：

```
passwd yourname
```

然后系统会提示你输入新密码两次：

```
New password:
Retype new password:
passwd: password updated successfully
```

---

### 🔹 步骤 3：退出并重新登录

```
exit
```

然后正常启动 WSL：

```
wsl
```

用新密码登录你的用户账户。

---

## ✅ 情况三：为 root 用户设置密码（可选）

默认情况下，WSL 的 root 用户没有设置密码，但你可以为它设置一个，以便使用 `su`或远程登录。

在 WSL 中（以任意用户登录，有 sudo 权限）：

```
sudo passwd root
```

然后按提示输入新密码即可。

> ⚠️ 注意：设置 root 密码后，你可以用 `su -`切换到 root，但 WSL 默认推荐用普通用户 + sudo 操作。

---

## ✅ 常见问题

|问题|解决方法|
|---|---|
|输入密码不显示字符|正常行为，Linux 终端输入密码时不回显|
|忘记 root 密码|用 `wsl -u root`直接以 root 登录，再 `passwd`修改|
|用户不存在|用 `whoami`或 `id`检查当前用户，确保用户名正确|
|无法使用 sudo|确保用户属于 `sudo`组：`groups yourname`|

---

## 🧠 总结

|操作|命令|
|---|---|
|首次设置用户密码|安装时按提示输入用户名和密码|
|重置用户密码|`wsl -u root`→ `passwd 用户名`|
|设置 root 密码|`sudo passwd root`|
|查看当前用户|`whoami`|
|查看用户所属组|`groups`或 `groups 用户名`|

---

如果你愿意，我可以帮你写一个 **一键重置 WSL 用户密码的 PowerShell 脚本**，方便以后快速恢复访问 👍