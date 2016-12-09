/* 路由文件 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routesMap from './map/' // 路由映射

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang:false
})

router.map(routesMap).redirect({
  '/':'/welcome/login'
})

//权限拦截
router.beforeEach(({to,from,abort,redirect,next})=>{
  if(to.needToLogin && router.app.userData===null){
    alert('需要登录')
    return abort()
  }
  next()
})

export default router
