# Vim,wsl,剪切板,复制粘贴, - IT Blog

tags:: source
## Metadata
- Author: itcn.blog
- Full Title: Vim,wsl,剪切板,复制粘贴, - IT Blog
- Category: #articles
- URL: https://itcn.blog/p/5727255960.html

## Highlights
- vim,wsl,剪切板,复制粘贴,
- if system('uname -r') =~ "microsoft"
  augroup Yank
  autocmd!
  autocmd TextYankPost * :call system('/mnt/c/windows/system32/clip.exe ',@")
  augroup END
  endif
