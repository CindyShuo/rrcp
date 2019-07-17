<template>
  <div class="account-find-password account">
    <common-header class="account__header"></common-header>
    <div class="content">
      <h3 class="account__title">密码重置</h3>
      <form @submit.prevent="submit"
            class="account__form">
        <div class="form-item">
          <div class="prefix">邮箱</div>
          <div class="suffix"></div>
          <input v-model="formData.email" />
        </div>
        <div class="form-item">
          <div class="prefix">验证码</div>
          <div class="suffix"
               style="z-index: 2;">
            <common-email-code :email="formData.email" />
          </div>
          <input v-model="formData.email_code" />
        </div>
        <div class="form-item">
          <div class="prefix">设置密码</div>
          <div class="suffix"></div>
          <input :type="showPassword ? 'text' : 'password'"
                 v-model="formData.password" />
        </div>
        <el-button native-type="submit"
                   :loading="loading"
                   class="common-button">
          重置密码
        </el-button>
      </form>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'
import CommonEmailCode from '../../components/common/CommonEmailCode'

export default {
  name: 'AccountFindPassword',
  components: { CommonHeader, CommonEmailCode },
  data () {
    return {
      showPassword: false,
      formData: {
        email: '',
        email_code: '',
        password: ''
      },
      loading: false
    }
  },
  watch: {
    'formData.email' () {
      this.formData.emailCode = ''
      this.formData.password = ''
    }
  },
  methods: {
    clear () {
      this.formData.email = ''
    },
    submit () {
      this.loading = true
      this.$baseApi.findPassword(this.formData.email, this.formData.email_code, this.formData.password)
        .then(res => {
          this.$router.push('/find_password_success')
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
