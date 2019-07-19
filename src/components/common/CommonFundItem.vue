<template>
  <div class="common-fund-item">
    <div class="title">
      <i></i>
      <h3>比特闪电第三期</h3>
    </div>
    <div class="table">
      <div class="item">
        <h4>募集额度</h4>
        <p>10 BTC</p>
      </div>
      <div class="item">
        <h4>涨跌幅</h4>
        <p>--</p>
      </div>
      <div class="item">
        <h4>募集时间</h4>
        <p>08-12</p>
      </div>
    </div>
    <div class="status">运行中</div>
  </div>
</template>

<script>
export default {
  name: 'CommonFundItem'
}
</script>

<style lang='stylus' scoped>
.common-fund-item
  position relative
  width 100%
  height 2.2rem
  padding-top 0.2rem
  border-left 0.12rem solid #03AD90
  border-radius 0.08rem
  background-color #fff
  box-shadow 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.12)
  .title
    display flex
    align-items center
    padding-left 0.18rem
    h3
      margin-left 0.08rem
      line-height 0.48rem
      font-size 0.28rem
      font-weight 600
      color #333
  .table
    display flex
    margin-top 0.34rem
    padding-left 0.24rem
    .item
      &:nth-child(1)
        width 1.7rem
      &:nth-child(2)
        width 1.42rem
    h4
      line-height 0.34rem
      font-size 0.24rem
      color #999
    p
      line-height 0.44rem
      font-size 0.32rem
      font-weight 500
      color #333
  .status
    position absolute
    top 0.6rem
    right 0.46rem
    display flex
    justify-content center
    align-items center
    width 1.2rem
    height 1.2rem
    border 0.08rem solid #03AD90
    border-radius 50%
    line-height 0.4rem
    font-size 0.28rem
    font-weight 500
</style>
