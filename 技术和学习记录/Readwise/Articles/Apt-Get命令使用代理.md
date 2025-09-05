# Apt-Get命令使用代理

tags:: source
## Metadata
- Author: 不忘初心 方得始终
- Full Title: Apt-Get命令使用代理
- Category: #articles
- URL: http://daemon369.github.io/network/2014/06/05/use-proxy-for-apt-get

## Highlights
- 全局代理 在Ubuntu系统(14.04)中里，使用代理有一种通用方式：系统设置 –> 网络 –> 网络代理 –> 应用到整个系统，这里设置的代理是全局代理，整个系统都会走这个代理设置。但一般我们不会这样使用，我们需要对我们指定的工具或软件设置代理。 APT代理 apt-get工具可以使用-o参数来使用配置字符串，或使用-c参数使用指定配置文件。 APT工具集使用的默认配置文件是/etc/apt/apt.conf，打开后发现文件默认是空文件。但是当我们设置了全局代理后，文件的内容变为： Acquire::http::proxy "http://127.0.0.1:8087/"; Acquire::https::proxy "https://127.0.0.1:8087/"; 因此我们知道了apt-get设置代理的方法： 1. 使用-o选项 sudo apt-get -o Acquire::http::proxy="http://127.0.0.1:8000/" update 2. 使用-c选项 创建个人配置文件~/apt_proxy.conf，内容： Acquire::http::proxy "http://127.0.0.1:8087/"; Acquire::https::proxy "https://127.0.0.1:8087/"; 使用命令： sudo apt-get -c ~/apt_proxy.conf update 3. 如果我们设置了环境变量APT_CONFIG，那么APT工具集将使用APT_CONFIG指向的配置文件。 export APT_CONFIG=~/apt_proxy.conf sudo apt-get update
# Apt-Get命令使用代理

tags:: source
## Metadata
- Author: 不忘初心 方得始终
- Full Title: Apt-Get命令使用代理
- Category: #articles
- URL: http://daemon369.github.io/network/2014/06/05/use-proxy-for-apt-get

## Highlights
- 全局代理 在Ubuntu系统(14.04)中里，使用代理有一种通用方式：系统设置 –> 网络 –> 网络代理 –> 应用到整个系统，这里设置的代理是全局代理，整个系统都会走这个代理设置。但一般我们不会这样使用，我们需要对我们指定的工具或软件设置代理。 APT代理 apt-get工具可以使用-o参数来使用配置字符串，或使用-c参数使用指定配置文件。 APT工具集使用的默认配置文件是/etc/apt/apt.conf，打开后发现文件默认是空文件。但是当我们设置了全局代理后，文件的内容变为： Acquire::http::proxy "http://127.0.0.1:8087/"; Acquire::https::proxy "https://127.0.0.1:8087/"; 因此我们知道了apt-get设置代理的方法： 1. 使用-o选项 sudo apt-get -o Acquire::http::proxy="http://127.0.0.1:8000/" update 2. 使用-c选项 创建个人配置文件~/apt_proxy.conf，内容： Acquire::http::proxy "http://127.0.0.1:8087/"; Acquire::https::proxy "https://127.0.0.1:8087/"; 使用命令： sudo apt-get -c ~/apt_proxy.conf update 3. 如果我们设置了环境变量APT_CONFIG，那么APT工具集将使用APT_CONFIG指向的配置文件。 export APT_CONFIG=~/apt_proxy.conf sudo apt-get update
