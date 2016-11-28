<template>
  <div>

    <navbar></navbar>

    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navbar from './Navbar/navbar'

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
