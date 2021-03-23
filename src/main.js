/*
 * @Author: your name
 * @Date: 2021-03-18 11:39:21
 * @LastEditTime: 2021-03-23 11:17:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/main.js
 */

import Vue from 'vue'
import App from './App.vue'

import { Button } from 'vant'
import 'vant/lib/index.css'
import './assets/styles/iconfont.css'

Vue.use(Button)

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})
