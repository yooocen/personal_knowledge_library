---
tags:
  - playwright
  - ai
---
在window打开就是打开window的默认chrome，在wsl打开就是打开wsl的chrome
npx playwright codegen --channel chrome
npx playwright codegen --channel chrome --user-data-dir="C:/temp/chrome-debug"

wsl可以连接已经打开的window安装的chrome进行脚本执行

```
"/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:/temp/chrome-debug"
```

在window环境
```
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --remote-debugging-port=9222 --user-data-dir=C:/temp/chrome-debug
```

清空已经录制的内容
![[Pasted image 20260606230420.png]]

