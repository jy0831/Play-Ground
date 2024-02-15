import { createRouter, createWebHistory } from 'vue-router'
import GridTest from '../views/GridTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GridTest
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/grid',
      name: 'GridTest',
      component: GridTest
    },
    {
      path: '/new',
      name: 'NewPage',
      component: () => import('../views/NewPage.vue')
    },
    {
      path: '/banner',
      name: 'AniBanner',
      component: () => import('../views/AniBanner.vue')
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: () => import('../views/CanvasView.vue')
    },
    {
      path: '/socket',
      name: 'WebSocket',
      component: () => import('../views/WebSocket.vue')
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: () => import('../views/ScrollView.vue')
    }
  ]
})

export default router
