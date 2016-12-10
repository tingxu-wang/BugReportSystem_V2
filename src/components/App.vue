<template lang="html">
  <div>
    <router-view></router-viwe>
  </div>
</template>
<script type="text/javascript">
/*  import {store} from 'STORE'
  export default {store}*/
  export default {
    data (){
      return {
        //userData:null
        userData:{//测试用数据
          name:'pm',
          password:'qwaa1234',
          type:1,
          id:'58413027b023330d709f99b4'
        }
      }
    }
  }
</script>
