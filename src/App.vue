<!--
 * @Author: your name
 * @Date: 2021-03-18 11:42:09
 * @LastEditTime: 2021-03-18 19:38:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/App.vue
-->
<template>
  <div>
    <van-button @click="showPopup">click me</van-button>
    <van-popup v-model="show" position="left">
      
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Loren is a pretty boy',
        show: false
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
