<style scoped>
  .bg{
    width:100%;
    height: 100%;
    position: absolute;
    background: #f6f7f7;
  }
  nav.navbar{
    box-shadow: 2px 2px 5px rgba(0,0,0,0.06);
  }
  .main-content{
    background: #fff;
    box-shadow: 2px 4px 4px rgba(0,0,0,0.04);
  }
  @media (max-width: 768px){
    .main-content{
      margin-top: -20px;
    }
  }
</style>
<template>
  <div class="bg">
    <navbar></navbar>

    <div class="container main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from 'COMPONENT/Navbar/navbar'

export default {
  data:function(){
    return {
      test:'test',
      navbar:true
    }
  },
  components:{
    'navbar':Navbar
  }
}
</script>
