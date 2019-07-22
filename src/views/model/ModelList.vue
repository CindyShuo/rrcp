<template>
  <div class="model-list">
    <header class="model-list__header">
      <div class="title">
        <h2>模型</h2>
      </div>
      <div class="tab">
        <a v-for="(item, i) in $dict.modelType"
           :key="i"
           @click="type = item.type"
           :class="{ 'active': item.type === type }">{{ item.label }}</a>
      </div>
    </header>
    <div class="model-list__content">
      <common-fund-item v-for="item in 10"
                        :key="item"
                        class="item" />
    </div>
  </div>
</template>

<script>
import CommonFundItem from '../../components/common/CommonFundItem'

export default {
  name: 'ModelList',
  components: { CommonFundItem },
  data () {
    return {
      type: 3
    }
  },
  watch: {
    type () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang='stylus' scoped>
.model-list
  padding-top 1.68rem
  background-color #FAFAFA
  &__header
    position fixed
    top 0
    left 0
    z-index 99
    width 100%
    height 1.68rem
    border-bottom 0.02rem solid #F3F2F2
    background-color #fff
    .title
      position relative
      padding 0.2rem 0 0.36rem
      h2
        line-height 0.44rem
        font-size 0.32rem
        font-weight 500
        color #333
        text-align center
    .tab
      display flex
      justify-content space-between
      padding 0 0.28rem
      a
        display flex
        justify-content center
        align-items center
        width 3.46rem
        height 0.48rem
        border 0.02rem solid #E9E9E9
        font-size 0.24rem
        &.active
          border none
          background-color $buttonColor
          color #fff
  &__content
    padding 0.2rem 0.28rem 0
    .item
      margin-top 0.2rem
      &:first-child
        margin-top 0
</style>
