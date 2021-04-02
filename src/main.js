/*
 * @Author: your name
 * @Date: 2021-03-18 11:39:21
 * @LastEditTime: 2021-03-29 09:05:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/main.js
 */

import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

import { Button } from 'vant'

import 'vant/lib/index.css'
import '@styles/iconfont.css'
import '@styles/app.scss'

Vue.use(VueLazyload)
Vue.use(Button)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})
