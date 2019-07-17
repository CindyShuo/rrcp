<template>
  <div class="account-find-password-success">
    <common-header class="account__header"></common-header>
    <div class="success-icon"></div>
    <p>您的密码已重置</p>
    <router-link to="/login">请您重新登录</router-link>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'

export default {
  name: 'AccountFindPasswordSuccess',
  components: { CommonHeader }
}
</script>

<style lang="stylus" scoped>
.account-find-password-success
  text-align center
  .success-icon
    margin 2.18rem auto 0
    width 1.2rem
    height 1.2rem
  p
    margin-top 0.6rem
    line-height 0.5rem
    font-size 0.36rem
    font-weight 500
    text-align center
  a
    display inline-block
    margin 0.4rem auto 0
    line-height 0.4rem
    font-size 0.28rem
    font-weight 400
    color #8E8E93
    text-align center
</style>
