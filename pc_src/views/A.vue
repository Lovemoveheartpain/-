<template>
  <div>
    <!-- <div class="big" style="overflow:auto"> -->
      <!-- <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="(i,index) in data" class="small" :key="index">{{ i.name }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p> -->
      <!-- <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="../heart-1.png">标签</van-tabbar-item>
      </van-tabbar>-->
    <!-- </div> -->
  </div>
</template>

<script>
import Axios from "axios";
import { Toast } from "vant";

export default {
  data() {
    return {
      count: 1,
      loading: false,
      data: [],
      active: 0,
      value: ""
    };
  },
  computed: {
    noMore() {
      return this.count >= 3;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    search(s) {
      window.console.log(s);
    },
    load() {
      this.loading = true;
      window.console.log(this.count);
      Axios.get(`http://localhost:8080/list${this.count}.json`).then(res => {
        setTimeout(() => {
          this.data = [...this.data, ...res.data];
          this.count += 1;
          this.loading = false;
        }, 2000);
      });
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  mounted() {
    this.loading = true;
    Axios.get("http://localhost:8080/list.json").then(res => {
      setTimeout(() => {
        this.data = [...this.data, ...res.data];
        this.loading = false;
      }, 2000);
    });
  }
};
</script>

<style scoped>
.big {
  width: 200px;
  height: 300px;
  background-color: pink;
  margin: 0 auto;
}
.small {
  width: 100%;
  height: 220px;
  margin-bottom: 20px;
  background-color: dodgerblue;
}
</style>