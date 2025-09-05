[[spring]]
# 搭建一个maven工程
建立下面的pom文件
```xml
<properties>  
    <spring-framework.version>5.2.12.RELEASE</spring-framework.version>  
</properties>  
  
<dependencies>  
    <dependency>        
		    <groupId>junit</groupId>  
        <artifactId>junit</artifactId>  
        <version>4.12</version>  
    </dependency>  
    <dependency>        
		    <groupId>org.springframework</groupId>  
        <artifactId>spring-context</artifactId>  
        <version>${spring-framework.version}</version>  
    </dependency>
</dependencies>
```