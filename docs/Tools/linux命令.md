### Linux命令

[TOC]

#### 1. 汇总

```shell
#1.查看端口 
lsof -i:8080
#2.临时打开防火墙
iptables -I INPUT -p tcp --dport 8090 -j ACCEPT
service iptables restart
#3.下载文件
wget -c http://sea-repo.hostwinds.net/tests/100mb.zip
#4.硬盘大小
df -h
#5.查看cpu、内存
top
#6.路由经过网关
traceroute -n www.google.com

```

#### 2.

