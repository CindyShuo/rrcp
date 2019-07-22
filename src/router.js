import Vue from 'vue'
import Router from 'vue-router'

// 账户
import AccountIndex from './views/account/AccountIndex'
const AccountLogin = () => import(/* webpackChunkName: "AccountLogin" */ './views/account/AccountLogin')
const AccountRegister = () => import(/* webpackChunkName: "AccountRegister" */ './views/account/AccountRegister')
const AccountFindPassword = () => import(/* webpackChunkName: "AccountFindPassword" */ './views/account/AccountFindPassword')
const AccountFindPasswordSuccess = () => import(/* webpackChunkName: "AccountFindPasswordSuccess" */ './views/account/AccountFindPasswordSuccess')
// tab layout
const MainIndex = () => import(/* webpackChunkName: "MainIndex" */ './views/container/MainIndex')
// 首页
const HomePage = () => import(/* webpackChunkName: "HomePage" */ './views/homepage/HomePage')
// 行情
const MarketList = () => import(/* webpackChunkName: "MarketList" */ './views/market/MarketList')
// 模型
const ModelList = () => import(/* webpackChunkName: "ModelList" */ './views/model/ModelList')
// 动态
const NewsList = () => import(/* webpackChunkName: "NewsList" */ './views/news/NewsList')
// 用户中心
const UserCenter = () => import(/* webpackChunkName: "UserCenter" */ './views/user/UserCenter')
const Kyc = () => import(/* webpackChunkName: "Kyc" */ './views/user/Kyc')
const Google = () => import(/* webpackChunkName: "Google" */ './views/user/Google')
const ResetPassword = () => import(/* webpackChunkName: "ResetPassword" */ './views/user/ResetPassword')
const UserAssets = () => import(/* webpackChunkName: "UserAssets" */ './views/user/UserAssets')
const AssetsFlow = () => import(/* webpackChunkName: "AssetsFlow" */ './views/user/AssetsFlow')
const AssetsDetail = () => import(/* webpackChunkName: "AssetsDetail" */ './views/user/AssetsDetail')

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
          path: '/market',
          name: 'MarketList',
          component: MarketList
        },
        {
          path: '/model',
          name: 'ModelList',
          component: ModelList
        },
        {
          path: '/news',
          name: 'NewsList',
          component: NewsList
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
      path: '/assets/detail/:id',
      name: 'AssetsDetail',
      component: AssetsDetail,
      beforeEnter: authUser,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/assets/flow',
      name: 'AssetsFlow',
      component: AssetsFlow,
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
