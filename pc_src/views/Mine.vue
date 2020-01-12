<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li class="list-item" v-for="(item, index) in count" :key="index">{{ item }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
  export default {
    data () {
      return {
        count: 1,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 3
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 1
          this.loading = false
        }, 2000)
      }
    }
  }
</script>
<style scoped>
.infinite-list-wrapper
{
    width: 200px;
    height: 220px;
    background-color: pink;
}
.list-item
{
    width: 100px;
    margin-bottom: 20px;
    height: 600px;
    background-color: lightgreen
}
</style>