<template>
  <a class="user-list-item"
     :style="{ borderBottom: isBorder ? '' : 'none' }"
     @click="push">
    <span class="icon"></span>
    <p class="title">
      {{ title }}
    </p>
    <p class="status"
       v-if="status">{{ status }}</p>
    <a class="arrow"></a>
  </a>
</template>

<script>
export default {
  name: 'UserListItem',
  props: {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String
    },
    link: {
      type: String
    },
    isBorder: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    push () {
      this.$router.push(this.link)
    }
  }
}
</script>

<style lang='stylus' scoped>
.user-list-item
  position relative
  display flex
  justify-content space-between
  align-items center
  margin-left 0.32rem
  height 0.88rem
  border-bottom 0.01rem solid rgba(0, 0, 0, 0.25)
  .icon
    position absolute
  .title
    padding-left 0.58rem
    line-height 0.4rem
    font-size 0.28rem
    color #030303
  .status
    padding-right 0.76rem
    line-height 0.4rem
    font-size 0.28rem
    color #999
  .arrow
    position absolute
</style>
