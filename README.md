企业bug管理系统
===========================


###### 产品介绍
企业内部使用的bug管理系统

##### 环境依赖
node v0.10.28+
mongoDB 3.0.0+

##### 部署步骤
1. 安装[node](https://nodejs.org/en/)运行环境

2. 用命令行进入本项目根目录输入以下命令安装项目依赖模块
>$ npm install

3. 安装[mongoDB](https://www.mongodb.com/download-center?jmp=nav#community)数据库

4. 利用官方向导安装好mongodb后利用命令行到达mongo的根目录下
>$ cd yourMongoPath

5. 输入以下命令创建项目所需数据库文件夹
>$ mkdir bugSystem

6. 进入bin目录
>$ cd bin

7. 命令行工具开启mongo数据库服务，新开启一个命令行cd进入数据库文件夹后指向bugSystem文件夹(此文件夹需要你手动创建)
>$ mongod --dbpath ../bugSystem/

8. 新启动一个命令行进入本项目根目录下输入命令以启动服务：
>$ grunt

##### 目录结构描述
```
.
├─bin                 # 运行文件
├─build               # 用于项目中的公共配置文件
├─dist                # webpack编译后的文件夹
├─models              # node数据库操作
├─routes              # node初始化的路由
├─src                 # 源代码       
│  ├─components       # 组件
│  ├─router           # 路由
│  │  └─map
│  ├─services         # 服务（SERVICE，用于统一管理 XHR 请求）
│  └─views            # 路由视图基页（VIEW）
├─static              # 放置无需经由 Webpack 处理的静态文件
└─views               # 主界面
├── .babelrc             # Babel 转码配置
├── .gitignore           # （配置）需被 Git 忽略的文件（夹）
├── package.json         # （这个就不用多解释了吧）
```
