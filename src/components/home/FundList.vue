<template>
  <div class="fund-list">
    <nav class="fund-list__nav">
      <div v-for="(item, i) in tabList"
           :key="i"
           class="item"
           :class="{ 'active': active === item.key }">
        <a @click="active = item.key">{{ item.name }}</a>
      </div>
    </nav>
    <div class="fund-list__content">
      <div class="item">
        <common-fund-item />
      </div>
    </div>
  </div>
</template>

<script>
import CommonFundItem from '../common/CommonFundItem'

export default {
  name: 'FundList',
  components: { CommonFundItem },
  data () {
    return {
      tabList: [
        { name: '募集中', key: 1 },
        { name: '收益榜', key: 2 }
      ],
      active: 1,
      filter1: {
        type: 1,
        coin: '',
        status: '',
        lastId: 0
      },
      filter2: {
        type: 3,
        coin: '',
        status: '',
        lastId: 0
      }
    }
  },
  methods: {
    getFundId (filter) {
      return this.$baseApi.getFundId()
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    Promise.all([this.getFundId(this.filter1), this.getFundId(this.filter2)])
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style lang='stylus' scoped>
.fund-list
  margin-top 0.2rem
  &__nav
    display flex
    width 100%
    height 0.8rem
    padding-left 0.3rem
    background-color #fff
    .item
      display flex
      align-items center
      margin-right 0.18rem
      height 100%
      &:last-child
        margin-right 0
      a
        line-height 0.4rem
        font-size 0.28rem
        color #999999
      &.active
        position relative
        a
          font-weight 500
          color $buttonColor
        &:after
          content ''
          position absolute
          bottom 0
          display block
          width 100%
          height 0.06rem
          background-color $tipColor
  &__content
    margin 0.2rem 0.28rem 0
    .item
      margin-top 0.2rem
      &:first-child
        margin-top 0
</style>
