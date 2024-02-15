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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/grid',
      name: 'GridTest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route NewPage
      // which is lazy-loaded when the route is visited.
      component: GridTest
    },
    {
      path: '/new',
      name: 'NewPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route NewPage
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewPage.vue')
    },
    {
      path: '/banner',
      name: 'AniBanner',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route NewPage
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AniBanner.vue')
    },
    {
      path: '/canvas',
      name: 'CanvasView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route NewPage
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CanvasView.vue')
    },
    {
      path: '/socket',
      name: 'WebSocket',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route NewPage
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WebSocket.vue')
    }
  ]
})

export default router
