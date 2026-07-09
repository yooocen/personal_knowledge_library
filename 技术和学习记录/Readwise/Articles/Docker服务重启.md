---
tags:
  - docker
  - linux
---
# Docker服务重启

tags:: source
## Metadata
- Author: jianshu.com
- Full Title: Docker服务重启
- Category: #articles
- URL: https://www.jianshu.com/p/7acc784c0376

## Highlights
- systemctl 方式
  守护进程重启
  sudo systemctl daemon-reload
  重启docker服务
  sudo systemctl restart docker
  关闭docker
  sudo systemctl stop docker
  service 方式
  重启docker服务
  sudo service docker restart
  关闭docker
  sudo service docker stop