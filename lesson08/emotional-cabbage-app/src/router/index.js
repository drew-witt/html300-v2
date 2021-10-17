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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import( '../views/Recipes.vue')
  },
  {
    path: '/prepare',
    name: 'Prepare',
    component: () => import( '../views/Prepare.vue')
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: () => import( '../views/Nutrition.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
