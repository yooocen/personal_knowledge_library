---
createDate: 2022-07-15
tags:
  - vim
---


#前端 


#flashcards


vim in wsl 如何与window进行复制粘贴
?
```
if system('uname -r') =~ "microsoft"
  augroup Yank
  autocmd!
  autocmd TextYankPost * :call system('/mnt/c/windows/system32/clip.exe ',@")
  augroup END
  endif
```
[[Vim,wsl,剪切板,复制粘贴, - IT Blog]]
<!--SR:!2022-07-29,3,230-->


以下是ai给的方案
### 安装 win32yank
curl -sLo /tmp/win32yank.zip https://github.com/equalsraf/win32yank/releases/download/v0.0.4/win32yank-x64.zip
sudo unzip -p /tmp/win32yank.zip win32yank.exe > /usr/local/bin/win32yank.exe
sudo chmod +x /usr/local/bin/win32yank.exe

### 安装带剪贴板的 Vim
sudo apt update && sudo apt install vim-gtk3 -y

### 添加配置到 .vimrc
echo 'set clipboard=unnamedplus' >> ~/.vimrc


:echo has('clipboard')
如果要在wsl中设置成和window共享粘贴板，必须配置成unnamedplus

如果设置以上所有以后，拷贝粘贴都有问题，考虑缺少安装下面的报
sudo apt update
sudo apt install xclip