var express = require('express');
var router = express.Router();

var User=require('../models/user.js')

module.exports=function(app){
  app.get('/',function(req,res,next){
    res.render('channel/index',{title:'Express',index:'tingxu.wang'})
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
