[![Kaede](https://picx.zhimg.com/v2-06cda8c4440bd41c8f93b8cb7bad3948_l.jpg?source=06d4cd63)](https://www.zhihu.com/people/eb34f65a72b6ec521b9aad58b98b2004)

[Kaede](https://www.zhihu.com/people/eb34f65a72b6ec521b9aad58b98b2004)

现在不用手动开关了 修改一下.wslconfig文件就能自动开启代理了，以下是我的配置文件，修改前需要在powershell运行 wsl --update --pre-release  
  
```  
[wsl2]  
nestedVirtualization=true  
ipv6=true  
[experimental]  
autoMemoryReclaim=gradual # gradual | dropcache | disabled  
networkingMode=mirrored  
dnsTunneling=true  
firewall=true  
autoProxy=true  
```

2023-11-29

使用clash的tun模式
https://doc.clashforwindows.app/tun/