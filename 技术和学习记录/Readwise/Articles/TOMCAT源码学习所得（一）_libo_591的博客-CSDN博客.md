# TOMCAT源码学习所得（一）_libo_591的博客-CSDN博客

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: TOMCAT源码学习所得（一）_libo_591的博客-CSDN博客
- Category: #articles
- URL: https://blog.csdn.net/libo_591/article/details/84170087

## Highlights
- （一）下下来tomcat的源码包以后，解压出来，里面大概有这么几个文件夹。bin,conf,java,native,res,test,webapps，其中java里面放置的为源码，webapps里面为内置的web应用，conf下面为配置文件，bin下面为其启动工具等。 
  （二）用eclipse新建一个java项目，然后把java里面的内容拷贝到项目的src下面，把conf文件夹放到跟src平行的目录，把webapps放到跟src平行的目录，下载附件中的ant.jar,commons-logging.jar,jasper-compiler-jdt-5.5.23.jar,puretls-0.95.jar,并将以上jar包引入到项目 
  （三）找到这个类，org.apache.catalina.startup.Bootstrap,这个是tomcat的启动类，也是我们平时用的tomcat的bin目录中的bootstrap.jar的main类，所以tomcat的启动，其实就是以执行这个类的main方法开始的 
  （四）在这个类里面，运行main方法，看见控制台的输出没？是不是有亲切的感觉？ 
  （五）在main的第一行代码，加个断点，用debug模式运行，怎么样，爽不爽，可以调试TOMCAT了
