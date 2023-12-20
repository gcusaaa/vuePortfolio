import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/ResumeView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/ResumeView.vue')
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: () => import('@/views/ResumeView.vue')
  },
  {
    path: '/reachme',
    name: 'reachme',
    component: () => import('@/views/ResumeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
