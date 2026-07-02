---
tags:
  - 系统代理
  - 代理
  - 域名
  - 网络
---
关键命令
`cat /etc/resolv.conf`
记录dns服务器的地址

`nslookup www.baidu.com`
域名解析的过程

`ip route`
路由表

关闭TUN模式的路由表
```
default via 192.168.3.1 dev eth1 proto kernel metric 25
10.6.22.0/24 dev eth4 proto kernel scope link metric 261
192.168.3.0/24 dev eth1 proto kernel scope link metric 281
192.168.3.1 dev eth1 proto kernel scope link metric 25
```

开启TUN模式的路由表
```
0.0.0.0/1 via 198.18.0.2 dev eth6 proto kernel
default via 192.168.3.1 dev eth1 proto kernel metric 25
10.6.22.0/24 dev eth4 proto kernel scope link metric 261
128.0.0.0/1 via 198.18.0.2 dev eth6 proto kernel
192.168.3.0/24 dev eth1 proto kernel scope link metric 281
192.168.3.1 dev eth1 proto kernel scope link metric 25
198.18.0.0/16 dev eth6 proto kernel scope link metric 256
198.18.0.2 dev eth6 proto kernel scope link
```

```
traceroute to 8.8.8.8 (8.8.8.8), 30 hops max, 60 byte packets
 1  192.168.3.1  0.526 ms  0.365 ms  0.460 ms
 2  58.255.83.1  4.587 ms  4.530 ms  4.202 ms
 3  120.81.239.205  4.327 ms 120.81.239.197  4.338 ms  4.287 ms
 4  * 157.18.0.253  10.431 ms *
 5  219.158.19.66  9.460 ms * *
 6  219.158.3.214  11.265 ms * *
 7  219.158.3.210  12.964 ms 219.158.3.174  14.272 ms 219.158.3.190  13.183 ms
 8  202.77.23.30  16.084 ms  20.241 ms  16.031 ms
 9  162.245.124.254  14.879 ms 103.239.176.113  20.214 ms  20.717 ms
10  203.131.241.220  314.106 ms  315.880 ms  313.530 ms
11  203.131.250.82  193.131 ms  189.666 ms  187.471 ms
12  * * *
13  8.8.8.8  240.845 ms  242.514 ms  244.815 ms
```

查看流量的每一跳流向
`sudo traceroute -i eth1 -n 8.8.8.8`


查看是否存在系统代理
`env | grep -i proxy`


Linux的ipconfig
`ip addr` 或者 `ip a`


[[关于.wslconfig]]

如果是连接不上 127.0.0.1:7980 的话都是下面的这个原因，wsl有自己的本地地址，无法直接连接window的代理
[[wsl设置系统代理]]
autoProxy=true 起关键作用，打开这个以后会自动写代理服务器地址到env

在clash，如果打开了TUN，就不需要打开系统代理了
![[Pasted image 20260211005038.png]]

像上面这样，一样可以翻墙的

同样的ping google.com.hk
如果先打开系统代理，然后ping不通，再打开TUN，就是下面的情况
![[Pasted image 20260211004244.png]]

![[Pasted image 20260211004300.png]]

在不打开代理的情况下，还是可以成功访问google.com.hk
实际是把clash关闭系统代理之后，wsl有点延迟，重新打开终端就又不可以访问了
![[Pasted image 20260211012006.png]]


codex又教会我一个解决方案：
![[Pasted image 20260222234458.png]]

Allow LAN需要开启


![[Pasted image 20260227003345.png]]