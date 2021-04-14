/*
 * @Author: your name
 * @Date: 2021-04-13 17:23:27
 * @LastEditTime: 2021-04-14 11:10:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/router/index.js
 */

import routes from '@src/router/routes.js'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
