<template>
  <div class="account-index account">
    <div class="logo"></div>
    <div class="content">
      <router-link to="/login"
                   class="common-button">登录</router-link>
      <router-link to="/register"
                   class="common-button common-button--primary"
                   style="margin-top: .4rem">注册</router-link>
      <p class="user-agree">登录即表示同意 <a>《挖优狗用户协议》</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountIndex'
}
</script>

<style lang="stylus" scoped>
.account-index
  .logo
    width 100%
    height 8rem
    background url('../../assets/images/logo.png') center no-repeat
    background-size contain
  .user-agree
    position fixed
    bottom 0.4rem
    width 100%
    line-height 0.34rem
    font-size 0.24rem
    color #999
    text-align center
    a
      color #FF9500
</style>
