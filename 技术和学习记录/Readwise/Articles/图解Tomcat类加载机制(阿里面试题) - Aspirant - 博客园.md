---
tags:
  - tomcat
  - java
  - 类加载
---
# 图解Tomcat类加载机制(阿里面试题) - Aspirant - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: 图解Tomcat类加载机制(阿里面试题) - Aspirant - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/aspirant/p/8991830.html

## Highlights
- 再看看我们的问题：Tomcat 如果使用默认的类加载机制行不行？ 答案是不行的。为什么？我们看，第一个问题，如果使用默认的类加载器机制，那么是无法加载两个相同类库的不同版本的，默认的累加器是不管你是什么版本的，只在乎你的全限定类名，并且只有一份。第二个问题，默认的类加载器是能够实现的，因为他的职责就是保证唯一性。第三个问题和第一个问题一样。我们再看第四个问题，我们想我们要怎么实现jsp文件的热修改（楼主起的名字），jsp 文件其实也就是class文件，那么如果修改了，但类名还是一样，类加载器会直接取方法区中已经存在的，修改后的jsp是不会重新加载的。那么怎么办呢？我们可以直接卸载掉这jsp文件的类加载器，所以你应该想到了，每个jsp文件对应一个唯一的类加载器，当一个jsp文件修改了，就直接卸载这个jsp类加载器。重新创建类加载器，重新加载jsp文件。
- commonLoader：Tomcat最基本的类加载器，加载路径中的class可以被Tomcat容器本身以及各个Webapp访问；
  catalinaLoader：Tomcat容器私有的类加载器，加载路径中的class对于Webapp不可见；
  sharedLoader：各个Webapp共享的类加载器，加载路径中的class对于所有Webapp可见，但是对于Tomcat容器不可见；
  WebappClassLoader：各个Webapp私有的类加载器，加载路径中的class只对当前Webapp可见；
