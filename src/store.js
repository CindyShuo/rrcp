import Vue from 'vue'
import Vuex from 'vuex'

import BaseApi from './apis/baseApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    'SAVE_USER_INFO' (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    refresh (context) {
      return BaseApi.refresh()
        .then(res => {
          window.localStorage['fm_token'] = res.access_token
          return res
        })
        .then(() => {
          return context.dispatch('getUserInfo')
        })
    },
    getUserInfo (context) {
      return BaseApi.getUserInfo()
        .then(res => {
          context.commit('SAVE_USER_INFO', res.data)
          return res
        })
    }
  }
})
