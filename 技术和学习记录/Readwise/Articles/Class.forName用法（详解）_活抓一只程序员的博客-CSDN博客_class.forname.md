---
tags:
  - java
  - 反射
---
# Class.forName用法（详解）_活抓一只程序员的博客-CSDN博客_class.forname

tags:: source
## Metadata
- Author: blog.csdn.net
- Full Title: Class.forName用法（详解）_活抓一只程序员的博客-CSDN博客_class.forname
- Category: #articles
- URL: https://blog.csdn.net/qq_36473318/article/details/83549589

## Highlights
- Class.forName()、Class.forName().newInstance() 、New 三者区别！ 
  终于明白为什么加载数据库驱动只用Class.forName（）了！！ 
  在Java开发特别是数据库开发中，经常会用到Class.forName( )这个方法。 
  通过查询Java Documentation我们会发现使用Class.forName( )静态方法的目的是为了动态加载类。 
  在加载完成后，一般还要调用Class下的newInstance( )静态方法来实例化对象以便操作。因此，单单使用Class.forName( )是动态加载类是没有用的，其最终目的是为了实例化对象。     这里有必要提一下就是Class下的newInstance()和new有什么区别？，首先，newInstance( )是一个方法，而new是一个关键字，其次，Class下的newInstance()的使用有局限，因为它生成对象只能调用无参的构造函数，而使用 new关键字生成对象没有这个限制。     好，到此为止，我们总结如下：     Class.forName("")返回的是类     Class.forName("").newInstance()返回的是object     有数据库开发经验朋友会发现，为什么在我们加载数据库驱动包的时候有的却没有调用newInstance( )方法呢？即有的jdbc连接数据库的写法里是Class.forName(xxx.xx.xx);而有一 些：Class.forName(xxx.xx.xx).newInstance()，为什么会有这两种写法呢？    刚才提到，Class.forName("");的作用是要求JVM查找并加载指定的类，如果在类中有静态初始化器的话，JVM必然会执行该类的静态代码 段。而在JDBC规范中明确要求这个Driver类必须向DriverManager注册自己，即任何一个JDBC Driver的 Driver类的代码都必须类似如下：   public class MyJDBCDriver implements Driver {    static {      DriverManager.registerDriver(new MyJDBCDriver());   }   }  既然在静态初始化器的中已经进行了注册，所以我们在使用JDBC时只需要Class.forName(XXX.XXX);就可以了。 
  贴出Proxool 连接池的静态初始化方法： 
  public class ProxoolDriver implements Driver {     private static final Log LOG = LogFactory.getLog(ProxoolDriver.class);     static {         try {             DriverManager.registerDriver(new ProxoolDriver());         } catch (SQLException e) {             System.out.println(e.toString());         }     } 
  }
