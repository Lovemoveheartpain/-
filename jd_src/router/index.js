import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components:{
      default:Home,
      a:() => import('../components/Navigation.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/classify',
    name: 'classify',
    components:{
      default:() => import('../views/Classify.vue'),
      a:() => import('../components/Navigation.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/surprise',
    name: 'surprise',
    components:{
      default:() => import('../views/Surprise.vue'),
      a:() => import('../components/Navigation.vue')
    }
  },
  {
    path: '/details',
    name: 'details',
    component:() => import('../views/Details.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
