import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home', // 默认打开 /#/home
    children: [
      {
        path: 'home',  // 子路由不要加 /
        component: () => import('../views/Portal/index.vue')
      },
      // 可以继续添加子路由
    ]
  },

  // 404
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFound/404.vue')
  },
  // catch-all 路由 返回404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundRedirect',
    redirect: '/404',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
