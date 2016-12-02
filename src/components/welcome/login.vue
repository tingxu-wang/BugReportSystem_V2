<template lang="html">
  <form role="form">
    <div class="form-group">
      <h1 class="text-center">Login</h1>
    </div>
    <div class="form-group">
      <label for="userName">用户名：</label>
      <input type="text" id="userName" class="form-control" v-model="userName">
    </div>
    <div class="form-group">
      <label for="disabledSelect">密码：</label>
      <input type="password" id="userName" class="form-control" v-model="password">
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-default btn-block" v-link="{path:'/welcome/register'}">注册</button>
    </div>
    <div class="from-group">
      <button type="submit" class="btn btn-primary btn-lg btn-block" @click="login">登录</button>
    </div>
  </form>
</template>
<script>
  import commonPath from 'BUILD/config'
  export default {
    data:function(){
      return {
        userName:'',
        password:''
      }
    },
    methods:{
      login:function(){
        if(this.sendUserInfo()){//验证成功

        }else{//失败

        }
      },
      sendUserInfo:function(){
        const infoObj={
          name:this.userName,
          password:this.password
        }
        this.sendAjax(infoObj)
      },
      sendAjax:function(infoObj){
        
      }
    }
  }
</script>
