<template>
  <div class="notice-swiper">
    <i class="iconfont icon">&#xe622;</i>
    <p class="notice-title">关于杠杆借贷调整为按小时计息的公告</p>
  </div>
</template>

<script>
export default {
  name: 'NoticeSwiper'
}
</script>

<style lang='stylus' scoped>
.notice-swiper
  position relative
  display flex
  align-items center
  margin 0 0.28rem
  padding-left 0.48rem
  height 0.82rem
  border-bottom 0.02rem solid #F4F4F4
  .icon
    position absolute
    top 0.28rem
    left 0
    font-size 0.32rem
    color $buttonColor
  .notice-title
    line-height 0.34rem
    font-size 0.24rem
    color $buttonColor
</style>
