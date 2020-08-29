## 项目上线
将项目部署到线上的服务器。

### 一、服务器购买
在阿里云或者腾讯云上购买云服务器，购买时选择 CentOS 7.x 版本。

### 二、nginx安装
1. 在服务器上提前输入如下命令安装 `yum-utils`
```
sudo yum install yum-utils
```
2. 创建名为`/etc/yum.repos.d/nginx.repo`的文件并输入以下内容
```
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```
3. 接着执行以下两个命令来安装nginx
```
sudo yum-config-manager --enable nginx-mainline
```
```
sudo yum install nginx
```
4. 校验是否安装成功，运行下面命令，能正确输出nginx版本号就OK。
```
nginx -v
```
5. 启动 nginx
```
nginx
```
6. 在浏览器中输入服务器的公网IP地址，能正确输出 nginx welcome 页面即可。
<!-- ![图片nginx welcome](/img/nginx.jpeg "nginx") -->
7. nginx 的默认 web 根目录在如下位置
```
/usr/share/nginx/html
```