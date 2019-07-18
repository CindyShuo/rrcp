import Vue from 'vue'
import Router from 'vue-router'

import AccountIndex from './views/account/AccountIndex'
const AccountLogin = () => import(/* webpackChunkName: "AccountLogin" */ './views/account/AccountLogin')
const AccountRegister = () => import(/* webpackChunkName: "AccountRegister" */ './views/account/AccountRegister')
const AccountFindPassword = () => import(/* webpackChunkName: "AccountFindPassword" */ './views/account/AccountFindPassword')
const AccountFindPasswordSuccess = () => import(/* webpackChunkName: "AccountFindPasswordSuccess" */ './views/account/AccountFindPasswordSuccess')
const MainIndex = () => import(/* webpackChunkName: "MainIndex" */ './views/container/MainIndex')
const HomePage = () => import(/* webpackChunkName: "HomePage" */ './views/homepage/HomePage')
const UserCenter = () => import(/* webpackChunkName: "UserCenter" */ './views/user/UserCenter')
const Kyc = () => import(/* webpackChunkName: "Kyc" */ './views/user/Kyc')
const Google = () => import(/* webpackChunkName: "Google" */ './views/user/Google')
const ResetPassword = () => import(/* webpackChunkName: "ResetPassword" */ './views/user/ResetPassword')
const UserAssets = () => import(/* webpackChunkName: "UserAssets" */ './views/user/UserAssets')

Vue.use(Router)

const authUser = (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!window.localStorage.fm_token) {
      next({
        path: '/account'
      })
    } else {
      next()
    }
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'MainIndex',
      component: MainIndex,
      beforeEnter: authUser,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '/user',
          name: 'UserCenter',
          component: UserCenter
        }
      ]
    },
    {
      path: '/kyc',
      name: 'Kyc',
      component: Kyc,
      beforeEnter: authUser,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/google',
      name: 'Google',
      component: Google,
      beforeEnter: authUser,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/reset_password',
      name: 'ResetPassword',
      component: ResetPassword,
      beforeEnter: authUser,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/assets',
      name: 'UserAssets',
      component: UserAssets,
      beforeEnter: authUser,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/account',
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
