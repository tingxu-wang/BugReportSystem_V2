var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/user')

var userSchema=new mongoose.Schema({
  name:String,
  age:Number,
  info:String
},{
  collection:'users'
})

var userModel=mongoose.model('User',userSchema)

function User(user){
  this.name=user.name
  this.age=user.age
  this.info=user.info
}

module.exports=User

User.prototype={
  save:function(callback){
    var user={
      name:this.name,
      age:this.age,
      info:this.info
    }

    var newUser=new userModel(user)

    var promise=newUser.save()
    promise.then(function(err,user){
      if(err){
        return callback(err)
      }
      callback(null,user)
    })
  },
  get:function(name,callback){
    userModel.findOne({name:name},function(err,user){
      if(err){
        return callback(err)
      }
      callback(null,user)
    })
  }
}
