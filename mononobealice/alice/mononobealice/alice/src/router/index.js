import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
    path:'/secondcreate',
    name:'Second creation',
    component: ()=>import('../views/Second creation')
  },
  {
    path:'/mmd',
    name:'mmd',
    component: ()=>import('../views/Mmd')
  },
  {
    path: '/sound',
    name:'sound',
    component: ()=>import('../views/Sound')
  },
  {
    path: '/simulation',
    name:'simulation',
    component: ()=>import('../views/Simulation')
  },
  {
    path: '/informalessay',
    name:'informalessay',
    component: ()=>import('../views/Informalessay')
  },
  {
    path: '/picture',
    name:'picture',
    component: ()=>import('../views/Picture')
  },
  {
    path: '/recommend',
    name:'recommend',
    component: ()=>import('../views/Recommend')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
