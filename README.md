企业bug管理系统
===========================


###### 产品介绍
企业内部使用的bug管理系统

##### 环境依赖
node v0.10.28+
mongoDB 3.0.0+

##### 部署步骤
1. 命令行进入项目根目录

2. 安装node运行环境
>npm install

3. 安装mongoDB数据库并用命令行工具开启mongo数据库服务，新开启一个命令行cd进入数据库文件夹后指向bugSystem文件夹
>$ mongod --dbpath ../bugSystem/    //实例

4. 命令行进入项目根目录输入命令以启动服务：
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
│  ├─services         # 服务（SERVICE，用于统一管理 XHR 请求
│  └─views            # 路由视图基页（VIEW）
├─static              # 放置无需经由 Webpack 处理的静态文件
└─views               # 主界面
├── .babelrc             # Babel 转码配置
├── .gitignore           # （配置）需被 Git 忽略的文件（夹）
├── package.json         # （这个就不用多解释了吧）
```
