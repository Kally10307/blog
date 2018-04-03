<template>
  <div class="home">
    <front-header></front-header>
    <front-nav :nav-list="navList"></front-nav>
    <div class="wp">
      <div class="mt20">home</div>
    </div>
  </div>
</template>

<script>
import FrontHeader from '@/components/FrontHeader.vue'
import FrontNav from '@/components/FrontNav.vue'
export default {
  name: 'Home',
  data () {
    return {
      navList: [
        {
          id: 1,
          title: '首页'
        },
        {
          id: 2,
          title: 'HTML'
        },
        {
          id: 3,
          title: 'CSS'
        },
        {
          id: 4,
          title: 'Javascript'
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

<style scoped>

</style>
