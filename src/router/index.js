import Vue from 'vue'
import VueRouter from 'vue-router'

//import AuthGuard from './auth-guard'

import Home from '@/views/Home'
import Ad from '@/views/Ads/Ad.vue'
import AdList from '@/views/Ads/AdList'
import NewAd from '@/views/Ads/NewAd'
import Login from '@/views/Auth/Login'
import Orders from '@/views/User/Orders'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ad/:id',
    props: true,
    name: 'ad',
    component: Ad
  },
  {
    path: '/list',
    name: 'list',
    component: AdList,
    //beforeEnter: AuthGuard
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
