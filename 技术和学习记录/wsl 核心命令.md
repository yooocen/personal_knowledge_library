`wsl -l -v`
`wsl --list --verbose`
查看当前安装的Linux系统，和默认命令启动的Linux系统


`wsl --set-default Ubuntu-22.04`
切换默认的发行版

`cat /etc/os-release`
查看当前Linux的发行版本

`sudo usermod -aG sudo alice`
将用户alice加到sudo组

`su - alice`
切换用户到alice

`ubuntu2204 config --default-user cyd`
wsl打开的默认用户设置

wsl --shutdown 重启
wsl --update 更新