<template>
  <div class="market-list">
    <common-header title="行情"
                   class="main__header fixed__header" />
    <ul class="market-list__content">
      <li class="title">
        <p class="col-1">名称</p>
        <p class="col-2">最新价</p>
        <p class="col-3">涨跌幅</p>
      </li>
      <li class="item"
          v-for="item in 10"
          :key="item">
        <p class="col-1 coin">NKN<span>/USDT</span></p>
        <p class="col-2 price">0.0000619</p>
        <div class="col-3">
          <p class="change up">+33.98%</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'

export default {
  name: 'MarketList',
  components: { CommonHeader }
}
</script>

<style lang='stylus' scoped>
.market-list
  padding-top 0.88rem
  &__content
    padding 0 0.28rem
    li
      display flex
      align-items center
      .col-1
        width 2.34rem
      .col-2
        width 2.44rem
      .col-3
        flex 1
        display flex
        justify-content flex-end
      &.title
        padding 0.2rem 0 0.12rem
        p
          line-height 0.34rem
          font-size 0.24rem
          font-weight 300
          color #999
      &.item
        height 0.96rem
        border-bottom 0.02rem solid #F4F4F4
        .coin
          line-height 0.42rem
          font-size 0.36rem
          font-weight bold
          color #333
          span
            margin-left 0.04rem
            line-height 0.38rem
            font-size 0.24rem
            color #999
        .price
          line-height 0.44rem
          font-size 0.36rem
          font-weight bold
          color #333
        .change
          width auto
          padding-left 0.12rem
          padding-right 0.1rem
          border-radius 0.04rem
          line-height 0.48rem
          font-size 0.24rem
          font-weight 500
          color #fff
          &.up
            background-color #03AD92
</style>
