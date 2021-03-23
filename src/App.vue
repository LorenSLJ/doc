<!--
 * @Author: your name
 * @Date: 2021-03-18 11:42:09
 * @LastEditTime: 2021-03-23 11:17:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/App.vue
-->
<template>
  <div>
    <van-button @click="showPopup">click me</van-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Loren is a pretty boy',
        show: false,
        activeKey: 0
      }
    },
    methods: {
      showPopup() {
        this.show = true
      }
    }
  }
</script>

<style scoped>
</style>
