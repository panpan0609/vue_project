// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import router from './router'
import VuePaginate from 'vuejs-paginate'
import animate from 'animate.css' 
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1/public/api/'
axios.defaults.timeout = 1000 * 15
axios.defaults.headers['Content-Type'] = 'application/json'

Vue.use(animate)
Vue.use(ElementUI);
Vue.use(VuePaginate);
Vue.config.productionTip = false


window.HOST = 'http://127.0.0.1/public/api/'
window.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


