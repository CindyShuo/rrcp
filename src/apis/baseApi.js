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
  }
}

export default BaseApi
