<template>
  <div class="nav">
    <div class="wp960">
      <div class="item" :class="navIndex === index ? 'on' : ''" v-for="(item, index) in navList" :key="item.id">{{item.title}}</div>
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
    },
    navIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
