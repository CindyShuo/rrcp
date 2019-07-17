import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseApi from './apis/baseApi'

import './element.js'

import './assets/css/global.styl'

Vue.config.productionTip = false

Vue.router = router

Vue.prototype.$baseApi = BaseApi

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
