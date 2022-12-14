import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/Destaque.vue'
import AppView from '../views/AppView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'destaque' },
    component:AppView ,
    children:[
      {
        path: '/destaque',
        name: 'destaque',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/App/Destaque.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
