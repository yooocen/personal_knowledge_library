[[Compile and Build Applications With IntelliJ IDEA  IntelliJ IDEA]]

在Run/build的小窗口的第一行就是最终的执行命令
![[Pasted image 20220911164502.png]]

把它展开就可以看到-classpath这个参数，简写就是-cp
有时候如果依赖包太多，idea会选择生成一个临时的jar包，里面放所有的依赖jar的路径，或者生成一个jar manifest文件


[Maven projects | IntelliJ IDEA](https://www.jetbrains.com/help/idea/delegate-build-and-run-actions-to-maven.html#delegate_to_maven)
idea build 和直接运行mvn install有什么本质区别
按照这个文档说的，idea要实现增量build，所以它其实是基于自己的maven有一套自己的流程的，而这套流程也可以改成我们自己的mvn的配置

![[Pasted image 20220911165904.png]]

