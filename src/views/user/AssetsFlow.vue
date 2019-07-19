<template>
  <div class="assets-flow">
    <header class="assets-header assets-flow__header">
      <div class="title">
        <a @click="back"
           class="prefix">返回</a>
        <h2>资产流水</h2>
      </div>
    </header>
    <ul class="assets-flow__content">
      <li class="item">
        <div class="border up"></div>
        <p class="account up">-500BTC</p>
        <p class="way">信心币抵押返还</p>
        <p class="time">2018-05-20</p>
      </li>
      <li class="item">
        <div class="border up"></div>
        <p class="account up">-500BTC</p>
        <p class="way">充值</p>
        <p class="time">2018-05-20</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AssetsFlow',
  data () {
    return {
      flowList: null
    }
  },
  methods: {
    getFlow () {
      this.$baseApi.getFlow()
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getFlow()
  }
}
</script>

<style lang='stylus' scoped>
.assets-flow
  &__header
    padding-top 0.32rem
    padding-bottom 0.32rem
  &__content
    padding-top 0.4rem
    .item
      display flex
      align-items center
      margin-top 0.2rem
      padding-right 0.28rem
      height 1.2rem
      border-radius 0.06rem
      box-shadow 0px 0.1rem 0.26rem 0px rgba(0, 0, 0, 0.05)
      &:first-child
        margin-top 0
      .border
        width 0.06rem
        height 100%
        &.up
          background-color $upColor
        &.down
          background-color $downColor
      .account
        margin-left 0.22rem
        width 2.64rem
        line-height 0.4rem
        font-size 0.28rem
        font-weight 500
        &.up
          color $upColor
        &.down
          color $downColor
      .way, .time
        line-height 0.4rem
        font-size 0.24rem
        font-weight 300
        color #555
      .way
        flex 1
</style>
