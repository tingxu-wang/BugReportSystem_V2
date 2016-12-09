<!-- 登录以及注册页面的入口组件 -->

<template lang="html">
  <div class="bg"></div>
  <div class="g-clearfix">
    <div class="login_wrap col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
      <router-view></router-view>
    </div>
  </div>
  <div class="buttom_wrap">
    <p>ver 2.0.0</p>
    <p><a href="https://github.com/tingxu-wang/BugReportSystem_V2">fork me on github</a></p>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
  .bg{
    width:100%;
    height: 100%;
    position: absolute;
    background: url('/static/img/login_bg2.jpg');
  }
  .login_wrap{
    margin-top: 100px;
    background: rgba(0,0,0,.4);
    border-radius: 8px;
    padding:30px;
    margin-bottom: 40px;
    color:#fff;
  }
  .buttom_wrap{
    color:#fff;
    text-align: center;
    position:absolute;
    bottom:40px;
    left:50%;
    margin-left: -54px;
  }

  .buttom_wrap a{
    color:#fff;
    text-decoration: underline;
  }
</style>
