import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import HomeOne from '../views/home/home'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  // 主页
  path: '/home',
  name: 'home',
  component: Home,
  children: [{
    path: '',
    component: HomeOne
  }, {
    path: '/home/comment',
    component: () => import('../views/comment')
  }, {
    path: '/home/material',
    component: () => import('../views/material')
  }, {
    path: '/home/publish',
    component: () => import('../views/publish')
  }, {
    path: '/home/articles',
    component: () => import('../views/articles')
  }, {
    path: '/home/picture',
    component: () => import('../views/picture')
  }, {
    path: '/home/fansinfo',
    component: () => import('../views/fansinfo')
  }, {
    path: '/home/fanslife',
    component: () => import('../views/fanslife')
  }, {
    path: '/home/fanslist',
    component: () => import('../views/fanslist')
  }]
}, {
  // 登录页
  path: '/login',
  component: Login
}
  // ,
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
