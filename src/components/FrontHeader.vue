<template>
  <div class="header">
    <div class="wp960">
      <div class="hd"><img src="../assets/img/logo_white.png" alt="Kally's Blog"></div>
      <div class="bd">
        <div class="title">Kally's Blog</div>
        <div class="desc">less is more</div>
      </div>
      <div class="ft btn" @click="goLogin">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontHeader',
  data () {
    return {

    }
  },
  methods: {
    goLogin () {
      let self = this
      self.$router.push({ path: 'login' })
    }
  }
}
</script>

<style scoped>

</style>
