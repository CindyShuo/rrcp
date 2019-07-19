<template>
  <div class="user-assets">
    <header class="assets-header user-assets__header">
      <div class="title">
        <h2>资产</h2>
        <router-link to="/assets/flow"
                     class="suffix">流水</router-link>
      </div>
      <div class="all-assets">
        <div class="assets-title">总资产折合(BTC)</div>
        <div class="assets">--</div>
      </div>
    </header>
    <div class="user-assets__content">
      <div class="item"
           v-for="(item, i) in balanceList"
           :key="i">
        <div class="title">
          <p>{{ item.name }}</p>
          <a class="arrow"></a>
        </div>
        <div class="table">
          <div class="table-td">
            <p class="table-title">可用</p>
            <p class="table-content">{{ item.over }}</p>
          </div>
          <div class="table-td">
            <p class="table-title">冻结</p>
            <p class="table-content">{{ item.lock }}</p>
          </div>
          <div class="table-td">
            <p class="table-title">折合(USDT)</p>
            <p class="table-content"
               style="text-align: right;">{{ item.valueUSDT }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAssets',
  data () {
    return {
      balanceList: []
    }
  },
  methods: {
    getBalance () {
      this.$baseApi.getBalance()
        .then(res => {
          this.balanceList = res.balances
        })
    }
  },
  mounted () {
    this.getBalance()
  }
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
      .title
        display flex
        justify-content space-between
        align-items center
        p
          line-height 0.44rem
          font-size 0.36rem
          font-weight bold
          color $buttonColor
      .table
        display flex
        margin-top 0.2rem
        .table-td
          .table-title
            line-height 0.34rem
            font-size 0.24rem
            color #999
          .table-content
            margin-top 0.08rem
            line-height 0.32rem
            font-size 0.28rem
            color #333
          &:nth-child(1)
            min-width 1.48rem
          &:nth-child(2)
            flex 1
            margin-left 0.7rem
</style>
