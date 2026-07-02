.gitattributes 是 Git 仓库中用来为特定文件或文件类型定义属性规则的配置文件。简单来说，它告诉 Git：“遇到这类文件时，请按照我指定的方式去处理”。

它主要用来解决跨平台协作时的格式差异、优化大文件管理以及定制合并与对比策略。


你可以直接在项目根目录创建或修改 .gitattributes 文件，以下是几个高频用法：

•   统一换行符（最常用）：

    让 Git 自动处理文本文件，提交时转为 LF，检出时根据系统转换。
    text
    ◦ text=auto

    

•   标记二进制文件：

    防止 Git 对图片等文件进行换行符转换或尝试文本对比。
    text
    *.jpg binary
    *.pdf binary
    

•   强制脚本使用 LF：

    确保 Shell 脚本在任何系统下检出时都保持 LF 换行符，避免执行报错。
    text
    *.sh text eol=lf

修改文件
.editorconfig
```
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.{bat,cmd,ps1}]
end_of_line = crlf

```

.gitattribute
```
# Keep text files identical across Windows and WSL worktrees.
* text=auto eol=lf

# Windows-native scripts still need CRLF on checkout.
*.bat text eol=crlf
*.cmd text eol=crlf
*.ps1 text eol=crlf

# Treat common archive and certificate formats as binary.
*.gif binary
*.ico binary
*.jar binary
*.jpeg binary
*.jpg binary
*.pdf binary
*.png binary
*.pfx binary
*.zip binary
```