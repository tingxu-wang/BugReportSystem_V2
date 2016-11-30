<template lang="html">
  <form role="form">
    <div class="form-group">
      <h1 class="text-center">welcome</h1>
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
      <button type="submit" class="btn btn-default btn-block">注册</button>

    </div>
    <div class="from-group">
      <button type="submit" class="btn btn-primary btn-lg btn-block" @click="sendUserInfo">登录</button>
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
      sendUserInfo:function(){
        const infoObj={
          name:this.userName,
          password:this.password
        }
        this.sendAjax(infoObj)
      },
      sendAjax:function(infoObj){
        //$.ajax(,infoObj)
      }
    }
  }
</script>
