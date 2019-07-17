<template>
  <div class="common-email-code">
    <p style="color: #999;"
       v-if="count > 0">{{ count }}秒后再次发送</p>
    <p @click="getEmailCode"
       v-else>获取验证码</p>
  </div>
</template>

<script>
export default {
  name: 'CommonEmailCode',
  props: {
    email: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      count: 0,
      interval: null
    }
  },
  methods: {
    checkEmail () {
      return this.$baseApi.verifyEmailExists(this.email)
    },
    getEmailCode () {
      this.checkEmail()
        .then(() => {
          return this.$baseApi.getEmailCode(this.email)
        })
        .then(res => {
          this.$message({
            message: '发送成功',
            type: 'success',
            offset: 0
          })
          this.count = 60
          this.interval = setInterval(() => {
            if (this.count > 0) {
              this.count = this.count - 1
            } else {
              window.clearInterval(this.interval)
              this.interval = null
            }
          }, 1000)
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
  },
  destroyed () {
    window.clearInterval(this.interval)
  }
}
</script>

<style lang="stylus" scoped>
.common-email-code
  color #F6AA00
</style>
