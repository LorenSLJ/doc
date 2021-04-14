/*
 * @Author: your name
 * @Date: 2021-03-18 11:39:21
 * @LastEditTime: 2021-04-14 11:15:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueLazyload from 'vue-lazyload'

import { Button, Overlay } from 'vant'

import 'vant/lib/index.css'
import '@styles/iconfont.css'
import '@styles/app.scss'

Vue.use(VueLazyload)
Vue.use(Button)
Vue.use(Overlay)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
