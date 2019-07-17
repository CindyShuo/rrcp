<template>
  <div id="app">
    <transition name="fade">
      <common-entry v-show="entryStatus" />
    </transition>
    <router-view v-if="!entryStatus" />
  </div>
</template>

<script>
import CommonEntry from './components/common/CommonEntry'
import { setTimeout } from 'timers'

export default {
  components: { CommonEntry },
  data () {
    return {
      entryStatus: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.entryStatus = false
    }, 0)
  }
}
</script>
