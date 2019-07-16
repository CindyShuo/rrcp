<template>
  <div class="account-index">
    <div class="logo"></div>
    <common-button class="account-button"
                   text="登录"></common-button>
    <common-button class="account-button"
                   style="margin-top: .4rem"
                   text="注册"
                   type="primary"></common-button>
    <p class="user-agree">登录即表示同意 <a>《挖优狗用户协议》</a></p>
  </div>
</template>

<script>
import CommonButton from '../../components/common/CommonButton'
export default {
  name: 'AccountIndex',
  components: { CommonButton }
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
