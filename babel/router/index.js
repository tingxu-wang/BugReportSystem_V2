/* 路由文件 */

/*import Vue from 'vue'
import VueRouter from 'vue-router'
import routesMap from './map/' // 路由映射*/
var Vue = require('vue'),
    VueRouter = require('vue-router'),
    routesMap = require('./map');

Vue.use(VueRouter);

const router = new VueRouter({
  // root: null,
  // hashbang: false,
  // history: true,
  // saveScrollPosition: true,
  // transitionOnLoad: true,
  //suppressTransitionError: __PROD__ // 生产环境下不抛出异常
});

router.map(routesMap);

//export default router
module.exports = router;