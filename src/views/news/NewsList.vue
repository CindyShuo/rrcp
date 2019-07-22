<template>
  <div class="news-list">
    <common-header title="动态"
                   class="main__header fixed__header" />
    <ul class="news-list__content">
      <li class="item"
          v-for="item in 10"
          :key="item">
        <div class="left">
          <h3>新能源汽车竞赛：谁将领先？</h3>
          <p class="text">没有人会想到，吉和品牌在新加坡退出的收款新车几何A，他的海外订单，竟然…</p>
        </div>
        <img src="" />
      </li>
    </ul>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'

export default {
  name: 'NewsList',
  components: { CommonHeader }
}
</script>

<style lang='stylus' scoped>
.news-list
  padding-top 0.88rem
  &__content
    li
      display flex
      margin-left 0.28rem
      padding 0.32rem 0.28rem 0.3rem 0
      border-bottom 0.02rem solid rgba(0, 0, 0, 0.25)
      .left
        flex 1
        margin-right 0.2rem
        h3
          line-height 0.44rem
          font-size 0.32rem
          color #030303
        .text
          margin-top 0.26rem
          line-height 0.34rem
          font-size 0.24rem
          color #8F8E94
      img
        width 1.8rem
        height 1.4rem
        border-radius 0.08rem
</style>
