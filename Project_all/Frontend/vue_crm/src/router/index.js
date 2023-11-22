import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/Home.vue')
    },

    {
      path: '/BooksCatalog',
      name: 'BooksCatalog',
      component: () => import('../views/ForUser/BooksCatalog.vue')
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
      path: '/AuthorForm',
      name: 'AuthorForm',
      component: () => import('../components/Registration/AuthorForm.vue')
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
      path: '/AuthorLog',
      name: 'AuthorLog',
      component: () => import('../components/Login/AuthorLog.vue')
    },
    {
      path: '/Account',
      name: 'Account',
      component: () => import('../views/ForUser/Account.vue')
    },
    {
      path: '/AccountAuthor',
      name: 'AccountAuthor',
      component: () => import('../views/ForAuthor/Account.vue')
    },
    {
      path: '/NewApplication',
      name: 'NewApplication',
      component: () => import('../views/ForAuthor/NewApplication.vue')
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: () => import('../views/ForAdmin/AdminLog.vue')
    },
    {
      path: '/UsersTable',
      name: 'UsersTable',
      component: () => import('../views/ForAdmin/AdminTables/UsersTable.vue')
    },
    {
      path: '/AuthorsTable',
      name: 'AuthorsTable',
      component: () => import('../views/ForAdmin/AdminTables/AuthorsTable.vue')
    },
    {
      path: '/OrdersTable',
      name: 'OrdersTable',
      component: () => import('../views/ForAdmin/AdminTables/OrdersTable.vue')
    },
    {
      path: '/BooksTable',
      name: 'BooksTable',
      component: () => import('../views/ForAdmin/AdminTables/BooksTable.vue')
    },
    {
      path: '/ApplicationsTable',
      name: 'ApplicationsTable',
      component: () => import('../views/ForAdmin/AdminTables/ApplicationsTable.vue')
    },


  ]
})

export default router
