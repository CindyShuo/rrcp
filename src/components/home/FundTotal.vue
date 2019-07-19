<template>
  <div class="fund-total">
    <div class="item">
      <p class="title">总管理</p>
      <p class="amount">12</p>
      <p class="unit">USDT</p>
    </div>
    <div class="item">
      <p class="title">总盈利</p>
      <p class="amount">20000.12</p>
      <p class="unit">USDT</p>
    </div>
    <div class="item">
      <p class="title">总参与</p>
      <p class="amount">12,123</p>
      <p class="unit">人</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FundTotal'
}
</script>

<style lang='stylus' scoped>
.fund-total
  display flex
  justify-content space-between
  margin 0 0.28rem
  padding 0.36rem 0.3rem 0.38rem
  background-color #fff
  .title
    line-height 0.34rem
    font-size 0.24rem
    font-weight 500
    color $buttonColor
    text-align center
  .amount
    margin 0.14rem 0 0.02rem
    line-height 0.44rem
    font-size 0.32rem
    font-weight 600
    color $tipColor
    text-align center
  .unit
    line-height 0.34rem
    font-size 0.24rem
    font-weight 500
    color #999
    text-align center
</style>
