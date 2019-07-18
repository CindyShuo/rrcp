<template>
  <div class="user kyc">
    <common-header title="身份验证"
                   :show-back="true"
                   back-text="个人中心"
                   back-url="/user"
                   class="main__header">
      <a slot="suffix"
         @click="getKyc"
         class="main__confirm">确认</a>
    </common-header>
    <div class="kyc__content">
      <div class="form-item">
        <p class="prefix">真实姓名</p>
        <input v-model="formData.truename" />
      </div>
      <div class="form-item">
        <p class="prefix">身份证</p>
        <input v-model="formData.card_number" />
      </div>
      <div class="form-item">
        <p class="prefix">验证码</p>
        <input v-model="formData.email_code" />
        <common-email-code :email="userInfo.email"
                           class="suffix" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'
import CommonEmailCode from '../../components/common/CommonEmailCode'

export default {
  name: 'Kyc',
  components: { CommonHeader, CommonEmailCode },
  data () {
    return {
      formData: {
        truename: '',
        card_number: '',
        email_code: ''
      }
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    getKyc () {
      this.$baseApi.getKyc(this.formData)
        .then(res => {
          this.$message({
            message: '认证成功',
            type: 'success',
            offset: 0
          })
          this.$router.replace('/user')
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
