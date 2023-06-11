import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: () => import('../views/signUpView.vue')
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: () => import('../views/signInView.vue')
    },
  ]
})

export default router
