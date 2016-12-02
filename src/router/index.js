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

export default router
