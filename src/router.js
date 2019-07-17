import Vue from 'vue'
import Router from 'vue-router'

import AccountIndex from './views/account/AccountIndex'
const AccountLogin = () => import(/* webpackChunkName: "AccountLogin" */ './views/account/AccountLogin')
const AccountRegister = () => import(/* webpackChunkName: "AccountRegister" */ './views/account/AccountRegister')
const AccountFindPassword = () => import(/* webpackChunkName: "AccountFindPassword" */ './views/account/AccountFindPassword')
const AccountFindPasswordSuccess = () => import(/* webpackChunkName: "AccountFindPasswordSuccess" */ './views/account/AccountFindPasswordSuccess')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'AccountIndex',
      component: AccountIndex
    },
    {
      path: '/login',
      name: 'AccountLogin',
      component: AccountLogin
    },
    {
      path: '/register',
      name: 'AccountRegister',
      component: AccountRegister
    },
    {
      path: '/find_password',
      name: 'AccountFindPassword',
      component: AccountFindPassword
    },
    {
      path: '/find_password_success',
      name: 'AccountFindPasswordSuccess',
      component: AccountFindPasswordSuccess
    }
  ]
})

export default router
