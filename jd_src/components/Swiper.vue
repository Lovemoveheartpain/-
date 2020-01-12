<template>
  <el-carousel indicator-position="outside" type="card" height="150px">
    <el-carousel-item v-for="(item,index) in this.$store.state.global.swiper" :key="index" >
      <img :src="item.image" alt class="slide_img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  mounted() {
    let obj = {
      method: "GET",
      url: "/swiper.json",
      params: {
        params: {
          type: "swiper"
        }
      }
    };
    this.$store.dispatch("sendGet", obj);
  }
};
</script>

<style scoped>
.slide_img {
  width: 100%;
  height: 150px; 
}
</style>