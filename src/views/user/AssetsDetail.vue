<template>
  <div class="assets-detail">
    <header class="assets-header assets-detail__header">
      <div class="title">
        <a @click="back"
           class="prefix">返回</a>
        <h2>{{ preview.coin }}</h2>
      </div>
      <div class="table">
        <div class="table-td">
          <p class="table-title">可用</p>
          <p class="table-content">{{ preview.over }}</p>
        </div>
        <div class="table-td">
          <p class="table-title">冻结</p>
          <p class="table-content">{{ preview.lock }}</p>
        </div>
        <div class="table-td">
          <p class="table-title">折合(USDT)</p>
          <p class="table-content"
             style="text-align: right;">{{ preview.total }}</p>
        </div>
      </div>
    </header>
    <div class="assets-detail__content">
      <div class="tab">
        <a v-for="(item, i) in tabList"
           :key="i"
           @click="active = item.key"
           :class="{ 'active': item.key === active }">{{ item.name }}</a>
      </div>
    </div>
    <div class="assets-detail__controller">
      <a class="common-button button">提币</a>
      <a class="common-button button">充币</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssetsDetail',
  data () {
    return {
      preview: {},
      tabList: [
        { name: '充值记录', key: 1 },
        { name: '提现记录', key: 2 }
      ],
      active: 1
    }
  },
  methods: {
    getPreview () {
      this.$baseApi.getPreview(this.$route.params.id)
        .then(res => {
          console.log(res)
          this.preview = res.preview
        })
    },
    getExchange () {
      this.$baseApi.getExchange(this.$route.params.id, this.active)
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getPreview()
    this.getExchange()
  }
}
</script>

<style lang='stylus' scoped>
.assets-detail
  &__header
    padding-top 0.16rem
    padding-bottom 0.4rem
    .table
      display flex
      margin-top 0.72rem
      padding-left 0.28rem
      padding-right 0.16rem
      .table-td
        .table-title
          line-height 0.34rem
          font-size 0.24rem
          color #C2C9FB
        .table-content
          margin-top 0.08rem
          line-height 0.32rem
          font-size 0.28rem
          color #FFFFFF
        &:nth-child(1)
          min-width 1.48rem
        &:nth-child(2)
          flex 1
          margin-left 0.7rem
  &__content
    margin 0 0.28rem
    .tab
      display flex
      padding 0.2rem 0 0.18rem
      border-bottom 0.02rem solid #F4F4F4
      a
        margin-right 0.4rem
        line-height 0.4rem
        font-size 0.28rem
        color #999
        &:last-child
          margin-right 0
        &.active
          font-weight 500
          color $buttonColor
  &__controller
    position fixed
    bottom 0.4rem
    left 0
    display flex
    justify-content space-between
    width 100%
    padding 0 0.28rem
    .button
      width 3.3rem
      height 0.8rem
      border-radius 0.08rem
      font-size 0.32rem
      font-weight 500
</style>
