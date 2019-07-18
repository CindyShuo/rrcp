<template>
  <div class="user kyc">
    <common-header title="重置密码"
                   :show-back="true"
                   back-text="个人中心"
                   back-url="/user"
                   class="main__header">
      <a slot="suffix"
         @click="resetPwd"
         class="main__confirm">确认</a>
    </common-header>
    <div class="kyc__content">
      <div class="form-item">
        <p class="prefix">验证码</p>
        <input v-model="formData.email_code" />
        <common-email-code :email="userInfo.email"
                           class="suffix" />
      </div>
      <div class="form-item">
        <p class="prefix">新密码</p>
        <input :type="showPassword.new_pwd ? 'text' : 'password'"
               v-model="formData.new_pwd" />
      </div>
      <div class="form-item">
        <p class="prefix">确认密码</p>
        <input :type="showPassword.new_pwd_confirmation ? 'text' : 'password'"
               v-model="formData.new_pwd_confirmation" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'
import CommonEmailCode from '../../components/common/CommonEmailCode'

export default {
  name: 'ResetPassword',
  components: { CommonHeader, CommonEmailCode },
  data () {
    return {
      showPassword: {
        new_pwd: false,
        new_pwd_confirmation: false
      },
      formData: {
        email_code: '',
        new_pwd: '',
        new_pwd_confirmation: ''
      }
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    resetPwd () {
      this.$baseApi.resetPwd(this.formData)
        .then(res => {
          this.$message({
            message: '重置密码成功',
            type: 'success',
            offset: 0
          })
          window.localStorage.removeItem('fm_token')
          this.$router.replace('/login')
        })
        .catch(error => {
          this.$message({
            message: error.data.msg,
            type: 'error',
            offset: 0
          })
          setTimeout(() => {
            this.loading = false
          }, 3000)
        })
    }
  }
}
</script>

<style lang='stylus' scoped></style>
