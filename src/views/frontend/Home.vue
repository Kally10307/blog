<template>
  <div class="container">
    <div class="wp960 clearfix">
      <div class="main fl">
        <div class="list">
          <front-list-item v-for="(item, index) in list" :key="index" :item="item"></front-list-item>
        </div>
      </div>
      <div class="side-nav fr">
        <div class="hd">分类</div>
        <div class="bd">
          <div class="list">
            <div class="item">2018-04-04</div>
            <div class="item">2018-04-03</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontListItem from '@/components/FrontListItem.vue'
export default {
  name: 'Home',
  data () {
    return {
      list: [
        {
          id: 12,
          title: '你可以不会 class，但是一定要学会 prototype',
          date: '2018-04-04',
          commentNum: 0
        },
        {
          id: 13,
          title: '不好意思！耽误你的十分钟，让MVVM原理还给你',
          date: '2018-04-04',
          commentNum: 0
        }
      ]
    }
  },
  components: {
    FrontListItem
  }
}
</script>

<style scoped>

</style>
