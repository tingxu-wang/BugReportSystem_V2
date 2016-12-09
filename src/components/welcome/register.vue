<template lang="html">
  <form role="form">
    <div class="form-group">
      <h1 class="text-center">Register</h1>
    </div>
    <div class="form-group">
      <label>用户名：</label>
      <input type="text" class="form-control" v-model="userName">
    </div>
    <div class="form-group">
      <label>密码：</label>
      <input type="password" class="form-control" v-model="password">
    </div>
    <div class="form-group">
      <label>类别：</label>
      <select class="form-control" v-model="type">
        <option value="0">管理员</option>
        <option value="1">产品经理</option>
        <option value="2">测试工程师</option>
        <option value="3">软件工程师</option>
      </select>
    </div>
    <div class="form-group">
      <p class="g-text-red">{{ message }}</p>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-default btn-block" v-link="{path:'/welcome/login'}">返回</button>
    </div>
    <div class="from-group">
      <button type="submit" class="btn btn-primary btn-lg btn-block" @click="register">注册</button>
    </div>
  </form>
</template>
<script>
  import {sendAjax} from 'TOOL'
  export default {
    data:function(){
      return {
        userName:'',
        password:'',
        type:'',
        message:''
      }
    },
    methods:{
      register (){
        const _this=this

        if(this.isValid()){
          const infoObj={
            name:this.userName,
            password:this.password
          }
          sendAjax('/register',infoObj,function(data){
            if(data.status===1){//注册成功
              _this.userName=''
              _this.password=''
              _this.message='账号注册成功'
            }else{
              _this.message=data.info
            }
          })
        }else{
          this.message='请填写全所有的信息'
        }
      },
      isValid (){
        return !(this.name==='' || this.password==='' || this.type==='')
      }
    }
  }
</script>
