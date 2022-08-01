import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      // keepAlive: true
    }
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
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