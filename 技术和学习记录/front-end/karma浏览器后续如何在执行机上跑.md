puppeteer会内置一个chromium的浏览器
在karma.config.js设置
`process.env.CHROME_BIN = require('puppeteer').executablePath()`

这个将决定browsers中读取哪个浏览器的exe
