<template>
  <header class="common-header">
    <div class="common-header__prefix">
      <a class="back"
         @click="back"
         v-if="showBack">{{ backText }}</a>
    </div>
    <div class="common-header__suffix"
         v-if="$slots.suffix">
      <slot name="suffix" />
    </div>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    title: {
      type: String
    },
    showBack: {
      type: Boolean,
      default: false
    },
    backText: {
      type: String,
      default: '返回'
    },
    backUrl: {
      type: String
    }
  },
  methods: {
    back () {
      if (this.backUrl) {
        this.$router.replace(this.backUrl)
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.common-header
  position relative
  display flex
  justify-content center
  align-items center
  padding 0 0.18rem
  .back
    line-height 0.44rem
    font-size 0.32rem
    color #8E8E93
  h2
    line-height 0.44rem
    font-size 0.32rem
    font-weight 500
    color #333
    text-align center
  &__prefix, &__suffix
    position absolute
    top 0
    display flex
    justify-content center
    align-items center
    height 100%
  &__prefix
    left 0.18rem
  &__suffix
    right 0.28rem
</style>
