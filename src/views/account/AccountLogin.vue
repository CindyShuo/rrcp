<template>
  <div class="account-login account">
    <common-header class="account__header"></common-header>
    <div class="content">
      <h3 class="account__title">邮箱登录</h3>
      <form @submit.prevent="submit"
            class="account__form">
        <div class="form-item">
          <div class="prefix">邮箱</div>
          <div class="suffix"></div>
          <input v-model="formData.email" />
        </div>
        <div class="form-item">
          <div class="prefix">登录密码</div>
          <div class="suffix"></div>
          <input :type="showPassword ? 'text' : 'password'"
                 v-model="formData.password" />
        </div>
        <el-button native-type="submit"
                   :loading="loading"
                   class="common-button">
          登录
        </el-button>
      </form>
      <div class="account__handle">
        <router-link to="/register">去注册</router-link>
        <router-link to="/find_password">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'

export default {
  name: 'AccountLogin',
  components: { CommonHeader },
  data () {
    return {
      showPassword: false,
      formData: {
        email: '',
        password: ''
      },
      loading: false
    }
  },
  watch: {
    'formData.email' () {
      this.formData.password = ''
    }
  },
  methods: {
    clear () {
      this.formData.email = ''
    },
    checkEmail () {
      return this.$baseApi.verifyEmailExists(this.formData.email)
    },
    login (email, password) {
      return this.$baseApi.login(email, password)
    },
    submit () {
      this.loading = true
      this.checkEmail()
        .then(res => {
          return this.login(this.formData.email, this.formData.password)
        })
        .then(res => {
          window.localStorage.setItem('fm_token', res.access_token)
          return res
        })
        .then(() => {
          this.loading = false
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

<style lang="stylus" scoped></style>
