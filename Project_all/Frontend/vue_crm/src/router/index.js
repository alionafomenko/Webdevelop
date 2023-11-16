import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
      path: '/Registration',
      name: 'Registration',
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/UserForm',
      name: 'UserForm',
      component: () => import('../components/Registration/UserForm.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/UserLog',
      name: 'UserLog',
      component: () => import('../components/Login/UserLog.vue')
    },
    {
      path: '/Account',
      name: 'Account',
      component: () => import('../components/Login/UserLog.vue')
    },


  ]
})

export default router
