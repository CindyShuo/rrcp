import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseApi from './apis/baseApi'

import mixins from './mixins'
import './element.js'

import './assets/css/global.styl'

Vue.config.productionTip = false

Vue.router = router
Vue.prototype.$baseApi = BaseApi
Vue.mixin(mixins)

const init = () => new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (window.localStorage.fm_token) {
  store.dispatch('refresh')
    .finally(() => {
      init()
    })
} else init()
