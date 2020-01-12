<template>
  <el-carousel indicator-position="outside" height="150px">
    <el-carousel-item v-for="(item,index) in $store.state.swiper.swiperData" :key="index">
      <img :src="item.image" alt class="swiper_img" @click="handle(index)" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  mounted() {
    let value = {
      params: {
        params: {
          name: "王老吉"
        }
      }
    };
    this.$store.dispatch("getSwiperData", value);
  },
  methods: {
    handle(index){
      window.console.log(index)
    }
  }
};
</script>

<style scoped>
.swiper_img {
  width: 100%;
  height: 150px;
}
</style>