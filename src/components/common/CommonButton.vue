<template>
  <a class='common-button'
     :class="`common-button--${type}`">{{ text }}</a>
</template>

<script>
export default {
  name: 'CommonButton',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="stylus" scoped>
.common-button
  display flex
  justify-content center
  align-items center
  font-size 0.34rem
  &--primary
    border 0.02rem solid $buttonColor
    color $buttonColor
  &--default
    background-color $buttonColor
    color #fff
</style>
