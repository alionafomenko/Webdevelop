import { createRouter, createWebHistory } from 'vue-router'
import ViewUsers from '../views/ViewUsers.vue'
import Home from  '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/BooksCatalog',
      name: 'BooksCatalog',
      component: () => import('../views/BooksCatalog.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/UpdateUser.vue')
    },

  ]
})

export default router
