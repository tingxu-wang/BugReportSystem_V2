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
      password:req.body.password,
      type:req.body.type
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

  app.post('/login',(req,res)=>{
    var clientUser={
      name:req.body.name,
      password:req.body.password
    }

    var newUser=new User(clientUser)

    newUser.get(clientUser.name,(err,user)=>{
      if(user===null){
        res.json({
          status:0,
          info:'用户不存在'
        })
      }else if(user.password!==clientUser.password){
        res.json({
          status:0,
          info:'密码输入错误'
        })
      }else{
        res.json({
          status:1,
          info:'登录成功',
          //user:user//账号的所有信息
          type:user.type,
          id:user._id,
          name:user.name,
          password:user.password
        })
      }
    })
  })
}
