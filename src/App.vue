<!--
 * @Author: your name
 * @Date: 2021-03-18 11:42:09
 * @LastEditTime: 2021-03-18 13:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/App.vue
-->
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Loren is a pretty boy'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
