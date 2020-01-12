import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default:Home,
      a:() => import('../components/TabBar.vue')
    }
  },
  {
    path: '/classify',
    name: 'classify',
    components: {
      default:() => import('../views/Classify.vue'),
      a:() => import('../components/TabBar.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default:() => import('../views/Cart.vue'),
      a:() => import('../components/TabBar.vue')
    }
  },
  {
    path: '/discover',
    name: 'discover',
    components: {
      default:() => import('../views/Discover.vue'),
      a:() => import('../components/TabBar.vue')
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default:() => import('../views/Mine.vue'),
      a:() => import('../components/TabBar.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import('../views/Scroll.vue')
  },
  {
    path: '/scroll_two',
    name: 'scroll_two',
    component: () => import('../views/Scroll_two.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
