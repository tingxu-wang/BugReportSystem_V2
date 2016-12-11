<template lang="html">
  <li class="active"><a v-link="{name:'prjManage',append:true}">项目管理</a></li>
  <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">账号管理<span class="caret"></span></a>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">账号创建</a></li>
      <li><a href="#">账号删除</a></li>
    </ul>
  </li>
  <li><a href="#">人员信息一览</a></li>
</template>
