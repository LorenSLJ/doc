/*
 * @Author: your name
 * @Date: 2021-04-13 17:16:38
 * @LastEditTime: 2021-04-14 14:46:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /doc/src/router/routes.js
 */

const routes = [
  {
    path: '*',
    component: () => import('@pages/Home.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@pages/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@pages/About.vue')
  },
  {
    path: '/node',
    name: 'node',
    component: () => import('@pages/Node.vue')
  },
  {
    path: '/webpack',
    name: 'webpack',
    component: () => import('@pages/Webpack.vue')
  }
]

export default routes