/* 启动文件 */
/*import Vue from '../node_modules'
import router from './routes/'*/
var Vue=require('vue'),
    router=require('./router')


var vm=new Vue({
  el:'#app',
  data:{
    msg:'test'
  }
})

/*if (__DEV__) {
  console.info('[当前环境] 开发环境')
  Vue.config.devtools = true
}

if (__PROD__) {
  console.info('[当前环境] 生产环境')
  Vue.config.devtools = false
}*/
