<template>
  <div class="account-login account">
    <common-header class="account__header"></common-header>
    <div class="content">
      <h3 class="account__title">邮箱注册</h3>
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
                   :loading="false"
                   class="common-button">
          注册
        </el-button>
      </form>
      <div class="account__handle">
        <router-link to="/login">去登录</router-link>
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
      }
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
    submit () {
      console.log(123)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
