<!-- 登录以及注册页面的入口组件 -->

<template lang="html">
  <div class="login_wrap col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
  .login_wrap{
    margin-top: 100px;
    background: rgba(0,0,0,.4);
    border-radius: 8px;
    padding:30px;
    margin-bottom: 40px;
    color:#fff;
  }
</style>
