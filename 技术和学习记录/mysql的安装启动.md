# 启动mysql
```
sudo systemctl start mysql
```
  
# 连接mysql

连接 MySQL 有以下几种方式：
## 命令行连接（最常用）
```
  mysql -u root -p
```
  - -u 指定用户名（默认是 root）
  - -p 提示输入密码

如果 root 没有设置密码：
```
mysql -u root
```

指定端口连接：
```
mysql -u root -p -P 3306
```

 连接远程数据库：
 ```
mysql -h 127.0.0.1 -u root -p 
 ```
 
## 直接执行 SQL 语句
```
mysql -u root -p -e "SHOW DATABASES;"
```
  

## 常用连接后命令

  连接成功后：
  -  查看所有数据库
  ```
  SHOW DATABASES;              
  ```
  - 切换数据库
 ```
 USE database_name; 
 ```
 - 查看当前数据库的表
```
 SHOW TABLES;
```  
- 创建用户
```
CREATE USER 'betachat'@'localhost' IDENTIFIED BY '123';
```
 - 退出
 ```
exit;  或者 \q 
 ```
  
# 忘记 root 密码

  需要重置密码：
```
sudo mysql  
```
  
  然后在 MySQL 命令行中：
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pr0d1234!';
FLUSH PRIVILEGES;
```
