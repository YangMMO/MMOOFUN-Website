import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'

const routes = [
  {
    path: '/', 
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('../views/Portal/index.vue')
      },
    ]
  },
  { path: '/404', name: 'Blog', component: '' },
]

const router = createRouter({
  history: createWebHashHistory (),
  routes,
})

export default router