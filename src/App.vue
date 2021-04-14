<!--
 * @Author: your name
 * @Date: 2021-03-18 11:42:09
 * @LastEditTime: 2021-04-14 14:11:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/App.vue
-->
<template>
  <div>
    <header>
      <i class="iconfont tiens-user" @click="goMenu"></i>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        activeKey: 0
      }
    },
    methods: {
      goMenu() {
        this.show = true
      }
    }
  }
</script>

<style lang="scss" scoped>
 header {
   position: fixed;
   top: 24px;
   left: 24px;
   .iconfont {
     font-size: 36px;
     color: $bg-minor;
   }
 }
</style>
