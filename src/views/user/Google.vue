<template>
  <div class="user kyc">
    <common-header title="谷歌验证"
                   :show-back="true"
                   back-text="个人中心"
                   back-url="/user"
                   class="main__header">
      <a slot="suffix"
         @click="getKyc"
         class="main__confirm">确认</a>
    </common-header>
    <div class="kyc__content">
    </div>
  </div>
</template>

<script>
import CommonHeader from '../../components/common/CommonHeader'

export default {
  name: 'Google',
  components: { CommonHeader },
  data () {
    return {
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped></style>
