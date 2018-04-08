<template>
  <div id="app">
    <front-header></front-header>
    <front-nav :nav-list="navList"></front-nav>
    <router-view/>
  </div>
</template>

<script>
import FrontHeader from '@/components/FrontHeader.vue'
import FrontNav from '@/components/FrontNav.vue'
export default {
  name: 'app',
  data () {
    return {
      navList: [
        {
          id: 1,
          title: '首页',
          path: '/'
        },
        {
          id: 2,
          title: 'HTML',
          path: '/html'
        },
        {
          id: 3,
          title: 'CSS',
          path: '/css'
        },
        {
          id: 4,
          title: 'Javascript',
          path: '/js'
        }
      ]
    }
  },
  components: {
    FrontHeader,
    FrontNav
  }
}
</script>

<style>

</style>
