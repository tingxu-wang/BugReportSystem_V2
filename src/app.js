/* 启动文件 */
import Vue from 'vue'
import router from './router/'

const App={}
router.start(App, '#app')

Vue.config.debug = true
