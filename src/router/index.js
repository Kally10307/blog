import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/frontend/Home'
import Login from '@/views/frontend/Login'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
