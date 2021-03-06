import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout/index.vue'
import Layout2 from '../layout/index2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home/index.vue')
      // meta: { title: '首页', icon: 'fas fa-align-justify' }
    },
    {
      path: '/blog',
      name: 'Home',
      component: () => import('../views/Blog/index.vue')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('../views/Resume/index.vue')
    }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gallery',
    component: Layout2,
    redirect: '/gallery/pic',
    children: [{
      path: '/gallery/pic',
      name: 'gallery',
      component: () => import('../views/gallery/index.vue')
      // meta: { title: '首页', icon: 'fas fa-align-justify' }
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
