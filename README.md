企业bug管理系统
===========================


###########产品介绍
企业内部使用的bug管理系统

###########环境依赖
node v0.10.28+
reids ~

###########部署步骤
1. 命令行进入项目根目录

2. npm install  //安装node运行环境

3. 安装mongoDB数据库并用命令行工具开启mongo数据库服务，新开启一个命令行cd进入数据库文件夹后指向bugSystem文件夹
    $ mongod --dbpath ../bugSystem/    //实例

4. 命令行进入项目根目录输入命令以启动服务：
    $ node bin/www

###########目录结构描述
├─bin
├─models
├─node_modules
├─public
│  ├─css
│  │  ├─channel
│  │  ├─img
│  │  │  └─fonts
│  │  └─mod
│  ├─dist
│  ├─images
│  └─js
│      ├─channel
│      ├─mod
│      │  └─public
│      └─plugin
├─routes
└─views
    ├─channel
    └─mod
