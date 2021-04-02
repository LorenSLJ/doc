<!--
 * @Author: your name
 * @Date: 2021-03-18 11:42:09
 * @LastEditTime: 2021-04-02 11:08:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/App.vue
-->
<template>
  <div>
    <header>
      <div class="container">
        <picture>
          <img
            v-lazy="{ src: require('./assets/imgs/img_tpl.png'), loading: require('./assets/imgs/img_err.png'), error: require('./assets/imgs/img_err.png') }"
            width="68"
            height="68"
          />
          <img
            v-lazy="{ src: require('./assets/imgs/img_tpl.png'), loading: require('./assets/imgs/img_err.png'), error: require('./assets/imgs/img_err.png') }"
            width="68"
            height="68"
          />
        </picture>
      </div>
      <section>
        <img :src="require('./assets/imgs/bg.jpeg')" alt="">
      </section>
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: vw(40);
    height: 200px;
    background-color: $main;
  }
</style>
