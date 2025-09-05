# Tomcat 中配置虚拟主机（Host）

tags:: source
## Metadata
- Author: zhuanlan.zhihu.com
- Full Title: Tomcat 中配置虚拟主机（Host）
- Category: #articles
- URL: https://zhuanlan.zhihu.com/p/183146170

## Highlights
- 位于 Engine 容器中用于接收请求并进行相应处理的虚拟主机。通过该容器可以运行 Servlet 或者 JSP 来处理请求。<Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true">name：虚拟主机的名称，Tomcat 通过在请求 URL 中的域名与 name 中的值匹配，用于查找能够处理该请求的虚拟主机。如果未找到则交给在 Engine 中 defaultHost 指定的主机处理；appBase：此 Host 的 webapps目录，即指定存放 web 应用程序的目录的路径，默认指向 ROOT 目录下的 index.jsp；unpackWARs：在启用此 webapps 时是否对 WAR 格式的归档文件先进行展开；默认为 true；autoDeploy：在 Tomcat 处于运行状态时放置于 appBase 目录中的应用程序文件是否自动进行 部署，默认为 true；
