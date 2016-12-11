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
      <p class="g-text-red">{{ message }}</p>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-default btn-block" v-link="{name:'register'}">注册</button>
    </div>
    <div class="from-group">
      <button type="submit" class="btn btn-primary btn-lg btn-block" @click="login">登录</button>
    </div>
  </form>
</template>
<script>
  import {sendAjax} from 'TOOL'
  export default {
    data (){
      return {
        userName:'',
        password:'',
        message:''
      }
    },
/*    computed:{
      test (){
        console.log(this.$store)
        store.dispatch('getUserInfo',{
          name:'tingxu'
        })
      }
    },*/
    methods:{
      login (){
        this.test
        const _this=this
        if(this.isValid()){
          const infoObj={
            name:this.userName,
            password:this.password
          }
          sendAjax('/login',infoObj,(data)=>{
            if(data.status===1){
              _this.$router.go({path:'/log'})
              _this.$root.userData=data
            }else{
              _this.message=data.info
            }
          })
        }else{
          this.message='请填写全所有的信息'
        }
      },
      isValid (){
        return !(this.userName==='' || this.password==='')
      }
    }
  }
</script>
