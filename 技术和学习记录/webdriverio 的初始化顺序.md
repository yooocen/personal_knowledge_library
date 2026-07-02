
1. node 版本必须在 12- 14
2. 全局安装npx
3. 新建一个工程文件夹
4. 执行下面的命令
```
npm init -y
npm i -D @wdio/cli
npx wdio config -y
```
5. 执行测试命令 `npx wdio wdio.config.js`