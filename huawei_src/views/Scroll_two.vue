<template>
  <div class="scroll_tow_big">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :offset="offset" @load="onLoad">
        <van-cell class="scroll_list"  v-for="(item,index) in count" :key="index" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      isLoading: false,
      loading: false,
      finished: false,
      offset: 10
    };
  },
  mounted() {},
  methods: {
    onRefresh() {
        this.finished = false
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count = 10
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      window.console.log(4);
      setTimeout(() => {
        this.count += 8;
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.count >= 40) {
          this.finished = true;
        }
      }, 2000);
    }
  }
};
</script>

<style scoped>
.scroll_tow_big {
  width: 100%;
  height: 700px;
}
.scroll_container {
  width: 100%;
  height: 100px;
  background-color: lightgreen;
  margin-bottom: 10px;
}
.scroll_list
{
    width: 100%;
    height: 60px;
    background-color: lightgray;
    text-align: center;
    line-height: 50px;
}
</style>
