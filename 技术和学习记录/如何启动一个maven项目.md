u:: [[maven]]

✅ **方法4启动成功！**

## 使用方法4启动Spring Boot应用

### 步骤：

```bash
# 1. 编译项目
mvn compile

# 2. 获取依赖classpath
mvn dependency:build-classpath -DincludeScope=runtime -Dmdep.outputFile=classpath.txt

# 3. 直接运行main类
java -cp "target/classes:$(cat classpath.txt)" com.example.HelloWorldApplication

# 或者后台运行
nohup java -cp "target/classes:$(cat classpath.txt)" com.example.HelloWorldApplication &
```

### 测试结果：
- ✅ `curl http://localhost:8080/hello` → **Hello World!**
- ✅ `curl http://localhost:8080/` → **Welcome to Spring Boot Hello World App!**

### 原理：
这种方法直接使用JDK的`java`命令运行main类，通过`-cp`参数指定：
- `target/classes` - 编译后的class文件
- 从Maven获取的所有依赖JAR包

不需要Maven，只需要JDK即可运行（但首次运行需要Maven来获取依赖classpath）。


---

mvn dependency:build-classpath -q -DincludeScope=runtime -Dmdep.outputFile=/dev/stdout

mvn dependency:build-classpath: 调用 Maven 依赖插件，生成一个由所有项目依赖 JAR 包路径组成、以系统路径分隔符（;或 :）连接的字符串。

-q: 安静模式，只输出必要信息，便于在脚本中处理。

-DincludeScope=runtime: 指定只输出 runtime作用域的依赖。runtime范围包含 compile和 runtime作用域的依赖，但不包括 provided和 test作用域的依赖。

-Dmdep.outputFile=/dev/stdout: 将生成的类路径字符串输出到“标准输出”（即控制台）。/dev/stdout是类 Unix 系统（Linux, macOS）的写法
。