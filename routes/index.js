/*
  * 加载容器页面 处理ajax请求 操作数据库
*/

var express = require('express');
var router = express.Router();
//var User=require('../models/user.js')
module.exports=function(app){
  app.get('/',function(req,res,next){
    res.render('/src/index')
  })

  app.post('/reg',function(req,res){
    var user={
      name:req.body.name,
      age:req.body.age,
      info:req.body.info
    }

    var newUser=new User(user)

    newUser.get(user.name,function(err,user){
      if(user){
        res.json({
          status:0//用户已存在
        })
      }else{
        newUser.save(function(err,user){
          if(err){
            console.log(err)
          }
          res.json({status:1})//用户注册成功
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
