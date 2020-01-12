<template>
  <div class="home_big">
    <SwiperVue/>
  </div>
</template>

<script>
import SwiperVue from '../components/Swiper.vue'
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    SwiperVue
  },
  mounted() {
    
  },
}
</script>

<style scoped>
.home_big
{
  width: 100%
}
</style>