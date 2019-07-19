import baseAxios from '../configs/axios'

const BaseApi = {
  verifyEmailExists: (email) => {
    return baseAxios.post('/verifyEmailExists', {
      email
    })
  },
  getEmailCode: (email) => {
    return baseAxios.post('/emailCode', {
      email
    })
  },
  login: (email, password) => {
    return baseAxios.post('/login', {
      email,
      password
    })
  },
  findPassword: (email, emailCode, newPwd) => {
    return baseAxios.post('/findPwd', {
      email,
      email_code: emailCode,
      new_pwd: newPwd,
      new_pwd_confirmation: newPwd
    })
  },
  // 刷新Token状态
  refresh: () => {
    return baseAxios.post('/refresh')
  },

  /* 用户中心 */
  // 获取用户信息
  getUserInfo: () => {
    return baseAxios.post('/me')
  },
  // 获取用户验证状态
  getUserStatus: () => {
    return baseAxios.post('/status')
  },
  // kyc
  getKyc: (formData) => {
    return baseAxios.post('/kyc', {
      truename: formData.truename,
      card_number: formData.card_number,
      email_code: formData.email_code
    })
  },
  // 重置密码
  resetPwd: (formData) => {
    return baseAxios.post('/resetPwd', {
      new_pwd: formData.new_pwd,
      new_pwd_confirmation: formData.new_pwd_confirmation,
      email_code: formData.email_code
    })
  },
  // 资产管理
  getBalance: () => {
    return baseAxios.post('/balances')
  },
  // 币种资产
  getPreview: (id) => {
    return baseAxios.post('/preview', {
      coin_id: id // 币种id
    })
  },
  // 币种充提记录
  getExchange: (id, type, page, size) => {
    return baseAxios.post('/exchanges', {
      coin_id: id, // 币种id
      opt_type: type, // 充值--1, 提现--2
      page: page, // 页码
      size: size // 每页数量
    })
  },
  // 资产流水
  getFlow: () => { // 返回没有status，需加上
    return baseAxios.post('/flows')
  },

  /* 首页 */
  // 获取模型id
  getFundId: (filters) => {
    return baseAxios.post('/fundsId', {
      filters
    })
  }
}

export default BaseApi
