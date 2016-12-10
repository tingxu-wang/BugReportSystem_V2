var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/user')

var userSchema=new mongoose.Schema({
  name:String,
  password:String,
  type:Number
},{
  collection:'users'
})

var userModel=mongoose.model('User',userSchema)

function User(user){
  this.name=user.name
  this.password=user.password
  this.type=user.type
}

module.exports=User

User.prototype={
  save:function(callback){
    var user={
      name:this.name,
      password:this.password,
      type:this.type
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
