/*
  * 加载容器页面 处理ajax请求 操作数据库
*/

var express = require('express');
var router = express.Router();
var User=require('../models/user.js')
module.exports=function(app){
  app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
  })
  app.get('/',(req,res,next)=>{
    res.render('/src/index')
  })

  app.post('/register',(req,res)=>{
    var user={
      name:req.body.name,
      password:req.body.password
    }

    var newUser=new User(user)

    newUser.get(user.name,(err,user)=>{
      if(user){
        res.json({
          status:0,
          info:'用户已存在'
        })
      }else{
        newUser.save((err,user)=>{
          if(err){
            console.log(err)
          }
          res.json({
            status:1,
            info:'注册成功'
          })//用户注册成功
        })
      }
    })
  })
}

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/
