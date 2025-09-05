---
createDate: 2022-07-15
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