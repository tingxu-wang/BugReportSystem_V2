<template lang="html">
  <nav class="navbar navbar-default" role="navigation">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">bug system</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav">
          <template v-if="idendity==='manager'">
            <manager><manager/>
          </template>
          <template v-if="idendity==='pm'">
            <pm><pm/>
          </template>
          <template v-if="idendity==='tster'">
            <pm><pm/>
          </template>
          <template v-if="idendity==='programer'">
            <pm><pm/>
          </template>
          <template v-if="idendity==='user'">
            <pm><pm/>
          </template>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">消息</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{ $root.userData.name }}<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">账号设置</a></li>
              <li class="divider"></li>
              <li><a href="#">注销</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
  import {getIdendity} from 'TOOL'
  import manager from './type/manager'
  import pm from './type/pm'
  import tester from './type/tester'
  import programer from './type/programer'
  import user from './type/user'

  export default {
    computed:{
      idendity (){
        return getIdendity(this.$router)
      }
    },
    components:{
      manager,
      pm,
      tester,
      programer,
      user
    }
  }
</script>
