<template>
  <div class="nav">
    <div class="wp960">
      <router-link tag="div" :to="{path: item.path}" class="item" :class="item.path === router ? 'on' : ''" v-for="item in navList" :key="item.id">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontNav',
  props: {
    navList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      router: '/'
    }
  },
  created () {
    this.router = this.$route.path
  },
  watch: {
    '$route' (val) {
      this.router = val.path
    }
  }
}
</script>

<style scoped>

</style>
