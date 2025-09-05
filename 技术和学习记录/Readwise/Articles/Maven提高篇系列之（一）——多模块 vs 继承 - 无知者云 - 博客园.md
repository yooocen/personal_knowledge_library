# Maven提高篇系列之（一）——多模块 vs 继承 - 无知者云 - 博客园

tags:: source
## Metadata
- Author: cnblogs.com
- Full Title: Maven提高篇系列之（一）——多模块 vs 继承 - 无知者云 - 博客园
- Category: #articles
- URL: https://www.cnblogs.com/davenkin/p/advanced-maven-multi-module-vs-inheritance.html

## Highlights
- 多模块的好处是你只需在根模块中执行Maven命令，Maven会分别在各个子模块中执行该命令，执行顺序通过Maven的Reactor机制决定
- （1）没有发挥Maven父模块的真正作用（配置共享）
  （2）webapp模块对core模块的依赖关系尚未建立
  针对（1），Maven父模块的作用本来是使子模块可以继承并覆盖父模块中的配置，比如dependency等，但是如果我们看看webapp和core模块中pom.xml文件，他们都声明了对Junit的依赖，而如果多个子模块都依赖于相同的类库，我们应该将这些依赖配置在父模块中，继承自父模块的子模块将自动获得这些依赖。所以接下来我们要做的便是：将webapp和core模块对junit的依赖删除，并将其迁移到父模块中。
  对于（2），Maven在创建webapp模块时并不知道webapp依赖于core，所以这种依赖关系需要我们手动加入，在webapp模块的pom.xml中加入对core模块的依赖：
- 此时再在maven-multi-module目录下执行 “mvn clean install”，Maven将根据自己的Reactor机制决定哪个模块应该先执行，哪个模块应该后执行。比如，这里的webapp模块依赖于core模块，那么Maven会先在core模块上执行“mvn clean install”，再在webapp模块上执行相同的命令。在webapp上执行“mvn clean install”时，由于core模块已经被安装到了本地的Repository中，webapp便可以顺利地找到所依赖的core模块。
- 多么繁琐的步骤，此时你应该能体会到在maven-multi-module下执行Maven命令的好处了吧。总结一下：在maven-multi-module下执行“mvn clean install”， Maven会在每个模块上执行该命令，然后又发现webapp依赖于core，此时他们之间有一个协调者（即父工程），它知道将core作为webapp的依赖，于是会先在core模块上执行“mvn clean install”，当在webapp上执行命令时，无论先前的core模块是否存在于本地Repository中，父工程都能够获取到core模块（如果不存在于本地Repository，它将现场编译core模块，再将其做为webapp的依赖，比如此时使用“mvn clean package”也是能够构建成功的），所以一切成功。
- 在Maven中，由多模块（Project Aggregation）和继承（Project Inheritance）关系并不必同时存在。
- 多模块和父子关系是不同的。如果core和webapp只是在逻辑上属于同一个总工程，那么我们完全可以只声明模块关系，而不用声明父子关系。如果core和webapp分别处理两个不同的领域，但是它们又共享了很多，比如依赖等，那么我们可以将core和webapp分别继承自同一个父pom工程，而不必属于同一个工程下的子模块。更多解析请参考这里
