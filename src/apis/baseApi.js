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
  }
}

export default BaseApi
