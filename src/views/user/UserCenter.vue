<template>
  <div class="user-center">
    <common-header title="我"
                   class="main__header" />
    <div class="user-center__content">
      <div class="user-info">
        <div class="portrait"></div>
        <div class="info">
          <p class="email">{{ userInfo.email }}</p>
          <p class="login-status">最近登录时间：{{ userInfo.login_at }}</p>
        </div>
      </div>
      <div class="user-assets">
        <div class="title">
          <p>总资产折合(BTC)</p>
        </div>
        <p class="assets">--</p>
        <router-link to="/assets"
                     class="arrow"></router-link>
      </div>
      <div class="user-list">
        <user-list-item title="我的基金" />
        <user-list-item title="登录密码"
                        status="已设置"
                        link="/reset_password" />
        <user-list-item title="身份认证"
                        :status="userStatus.kyc ? '已认证' : '未认证'"
                        link="/kyc" />
        <user-list-item title="谷歌验证"
                        :status="userStatus.otp ? '已开启' : '未开启'"
                        link="/google" />
        <user-list-item title="关于我们"
                        :is-border="false" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'
import UserListItem from '../../components/user/UserListItem'

export default {
  name: 'UserCenter',
  components: { CommonHeader, UserListItem },
  data () {
    return {
      userStatus: {}
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    getUserStatus () {
      this.$baseApi.getUserStatus()
        .then(res => {
          this.userStatus = {
            kyc: res.kyc,
            otp: res.otp
          }
        })
    }
  },
  mounted () {
    this.getUserStatus()
  }
}
</script>

<style lang='stylus' scoped>
.user-center
  &__content
    padding-top 0.38rem
    .user-info
      display flex
      padding-left 0.6rem
      .portrait
        width 1.2rem
        height 1.2rem
        border-radius 50%
        background-color #E9ECFF
      .info
        margin-left 0.4rem
        padding-top 0.16rem
        .email
          line-height 0.44rem
          font-size 0.32rem
          font-weight 500
          color #333
        .login-status
          margin-top 0.04rem
          line-height 0.34rem
          font-size 0.24rem
          color #999
    .user-assets
      position relative
      margin 0.4rem 0.3rem 0
      padding 0.26rem 0.2rem 0.16rem 0.4rem
      border-radius 0.2rem
      background-color $buttonColor
      .title
        display flex
        align-items center
        p
          line-height 0.34rem
          font-size 0.24rem
          color #C2C9FB
      .assets
        line-height 0.44rem
        font-size 0.32rem
        color #FAFAFA
    .user-list
      margin-top 0.4rem
</style>
