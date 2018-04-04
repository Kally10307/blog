<template>
  <div class="item">
    <div class="clearfix">
      <div class="title fl">{{item.title}}</div>
      <div class="date fr">{{item.date}}</div>
    </div>
    <div class="info">
      <div class="ico-comm"></div>
      <div class="num">{{item.commentNum}}</div>
      <div class="ico-share"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontListItem',
  props: {
    item: {
      type: Object,
      default: {
        id: 0,
        title: '',
        date: '',
        commentNum: 0
      }
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
