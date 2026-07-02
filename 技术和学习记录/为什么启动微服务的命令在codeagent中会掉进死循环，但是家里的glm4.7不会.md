因为使用了 nohup ... & 将命令放到后台运行。
解释
# 前台运行 - 会阻塞，等待应用关闭才返回提示符
java -cp "target/classes:$(cat classpath.txt)" com.example.HelloWorldApplication
# 后台运行 - 应用在后台运行，立即返回提示符，可以继续执行其他命令
nohup java -cp "target/classes:$(cat classpath.txt)" com.example.HelloWorldApplication &
关键点
- nohup - 忽略挂起信号，使进程在终端关闭后继续运行
- & - 将进程放到后台执行，立即返回shell提示符
这样就可以同时运行多个命令，测试接口、查看日志等。
常用后台管理命令
# 查看后台进程
jobs
# 将后台进程调到前台
fg
# 让前台进程到后台运行（先按Ctrl+Z暂停，然后bg）
bg
# 停止后台进程
kill %1
# 查看所有进程
ps aux | grep java