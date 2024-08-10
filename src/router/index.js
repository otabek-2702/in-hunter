import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  linkActiveClass: 'w--current',
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      children: [
        {
          path: "",
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          // component: () => import('../pages/About.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          // component: () => import('../pages/Blog.vue') 
        },
        {
          path: 'contact',
          name: 'contact',
          // component: () => import('../pages/Contact.vue') 
        },
        {
          path: 'services',
          name: 'services',
          // component: () => import('../pages/Services.vue') 
        },
        {
          path: 'projects',
          name: 'projects',
          // component: () => import('../pages/Projects.vue') 
        },
        {
          path: 'teams',
          name: 'teams',
          // component: () => import('../pages/Teams.vue') 
        }
      ]
    }
  ]
})

export default router
