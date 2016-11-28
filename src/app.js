/* 启动文件 */
import Vue from 'vue'
import router from './router/'
import App from './components/App'

router.start(App, '#app')

Vue.config.debug = true
