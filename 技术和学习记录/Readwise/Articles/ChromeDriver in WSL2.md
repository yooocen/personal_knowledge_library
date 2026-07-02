# ChromeDriver in WSL2

tags:: source
## Metadata
- Author: gregbrisebois.com
- Full Title: ChromeDriver in WSL2
- Category: #articles
- URL: https://www.gregbrisebois.com/posts/chromedriver-in-wsl2/

## Highlights
- n WSL1 you could download chromedriver.exe for Windows, put it somewhere on your Path, and then let ChromeDriver and Chrome run in Windows while Selenium (or what have you) ran in Linux. This doesn’t work in WSL2 anymore, since localhost on the WSL side does not point to Windows; the outside Windows world has its own IP address. Chrome doesn’t like this at all.Fortunately, we can run Chrome entirely from the WSL using an X server.I’m using Debian for this, Ubuntu should work the same. This requires WSL2; it will not remotely work in the original WSL.
