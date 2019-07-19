// axios配置
import axios from 'axios'
// import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: 'https://api.rrcp.io/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  config => {
    // POST传参序列化
    // if (
    //   config.method === 'post' &&
    //   config.headers['Content-Type'] !== 'multipart/form-data' &&
    //   config.headers['Content-Type'] !== 'application/json'
    // ) {
    //   config.data = qs.stringify(config.data)
    // }
    // 无token时，尝试重新获取token
    if (window.localStorage.fm_token) {
      config.headers['Authorization'] = 'Bearer ' + window.localStorage.fm_token
    }
    // if (!config.headers['accountNo']) {
    //   config.headers['accountNo'] = Utils.getAccountNo()
    // }
    return config
  },
  error => {
    console.log('错误的传参')
    return Promise.reject(error)
  }
)

// code状态码200判断
instance.interceptors.response.use(
  res => {
    if (parseInt(res.status) !== 200) return Promise.reject(res)
    // 接口
    if (res.data && res.data.status === 1) return res.data
    return Promise.reject(res)
  },
  error => {
    if (error.response.status === 503) {
      window.localStorage.removeItem('fm_token')
    }
    if (error.response.status === 403) {
      window.localStorage.removeItem('fm_token')
    }
    return Promise.reject(error.response || error)
  }
)

export default instance
