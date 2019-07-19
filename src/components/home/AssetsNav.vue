<template>
  <div class="assets-nav">
    <a class="exchange">
      <div class="text">
        <i class="iconfont icon">&#xe610;</i>
        <p class="title">一键兑换</p>
        <p class="tip">USDT/BTC/ETH</p>
      </div>
    </a>
    <div class="right">
      <a class="withdraw">
        <span><i class="iconfont icon">&#xe60f;</i>提币</span>
      </a>
      <a class="deposit">
        <span><i class="iconfont icon">&#xe60e;</i>充币</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssetsNav'
}
</script>

<style lang='stylus' scoped>
.assets-nav
  margin 0.2rem 0.28rem
  display flex
  justify-content space-between
  a
    display block
    border-radius 0.06rem
    background-color #fff
  .exchange
    display flex
    align-items center
    width 4rem
    height 1.8rem
    padding-left 1.44rem
    .text
      position relative
      .icon
        position absolute
        left -0.28rem
        transform translateX(-100%)
        display block
        font-size 0.8rem
        color $buttonColor
    .title
      line-height 0.44rem
      font-size 0.32rem
      font-weight 600
      color $buttonColor
    .tip
      line-height 0.34rem
      font-size 0.24rem
      color #999
  .right
    display flex
    flex-direction column
    justify-content space-between
    .withdraw, .deposit
      display flex
      align-items center
      width 2.74rem
      height 0.8rem
      padding-left 1.34rem
      line-height 0.4rem
      font-size 0.28rem
      font-weight 600
      color $buttonColor
      span
        position relative
      .icon
        position absolute
        left -0.12rem
        transform translateX(-100%)
        display block
        font-size 0.36rem
</style>
