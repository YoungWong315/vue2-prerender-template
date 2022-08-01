import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      // keepAlive: true
    }
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('@/views/AboutPage.vue'),
    meta: {
      // keepAlive: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router