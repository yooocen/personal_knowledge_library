---
createDate: 2022-07-03
---


#前端

## wsl2中怎么打开chrome

#flashcards


wsl2中怎么打开chrome
?
1. 安装相关的依赖
```bash
sudo apt-get update
sudo apt-get install -y curl unzip xvfb libxi6 libgconf-2-4
```
2. 安装chrome
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```
3. 安装chromedriver
```bash
wget https://chromedriver.storage.googleapis.com/86.0.4240.22/chromedriver_linux64.zip
unzip chromedriver_linux64.zip
sudo mv chromedriver /usr/bin/chromedriver
sudo chown root:root /usr/bin/chromedriver
sudo chmod +x /usr/bin/chromedriver
```
5. 安装Xserver和声明环境变量
Download and install [VcXsrv](https://sourceforge.net/projects/vcxsrv/) **in Windows**. Once installed, run `xlaunch.exe` (from the VcXsrv folder in Program Files). You can leave most of the settings as default, but make sure to check “Disable access control”. Allow it through the firewall if prompted when you first run it.
然后在.bashrc增加下面的环境变量
```bash
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0
```
6. 参考
[[ChromeDriver in WSL2]]
7. 谷歌浏览器中文方块问题，需要安装中文字体
[[Win10 配置 Wsl2 终极开发环境  Server 运维论坛]]
8. 注意防火墙要全部网络放开
<!--SR:!2022-12-28,24,230-->