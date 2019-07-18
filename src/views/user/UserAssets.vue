<template>
  <div class="user-assets">
    <header class="assets-header user-assets__header">
      <div class="title">
        <h2>资产</h2>
        <a class="suffix">流水</a>
      </div>
      <div class="all-assets">
        <div class="assets-title">总资产折合(BTC)</div>
        <div class="assets">--</div>
      </div>
    </header>
    <div class="user-assets__content">
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAssets'
}
</script>

<style lang='stylus' scoped>
.user-assets
  &__header
    padding-top 0.16rem
    padding-bottom 0.54rem
    .all-assets
      margin-top 0.26rem
      padding-left 0.28rem
      padding-right 0.3rem
      .assets-title
        display flex
        justify-content space-between
        align-items center
        line-height 0.34rem
        font-size 0.24rem
        color #C2C9FB
      .assets
        margin-top 0.28rem
        line-height 0.44rem
        font-size 0.32rem
        color #FAFAFA
  &__content
    .item
      margin 0 0.28rem
      padding 0.3rem 0 0.28rem
      border-bottom 0.02rem solid #F4F4F4
</style>
