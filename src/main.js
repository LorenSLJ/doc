/*
 * @Author: your name
 * @Date: 2021-03-18 11:39:21
 * @LastEditTime: 2021-03-18 19:19:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/main.js
 */

import Vue from 'vue'
import App from './App.vue'

import { Button, Popup } from 'vant'
import 'vant/lib/index.css'
import './assets/styles/iconfont.css'

Vue.use(Button)
Vue.use(Popup)

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})
