<template>
  <div class="home">
    <NavigationTop/>
    <HomeHeaderVue @has="handle" />
    <SwiperVue />
    {{time}}
    <router-link tag="button" to="/scroll" >上拉加载下拉刷新</router-link>
    <router-link tag="button" to="/scroll_two" >上拉加载下拉刷新</router-link>
  </div>
</template>

<script>
import SwiperVue from '../components/Swiper.vue'
import NavigationTop from '../components/NavigationTop'
import HomeHeaderVue from '../components/HomeHeader.vue'
import time from '../util/dataManager';
export default {
  name: 'home',
  data() {
    return {
      time:''
    }
  },
  components: {
    NavigationTop,
    SwiperVue,
    HomeHeaderVue
  },
  methods: {
    handle(index){
      window.console.log(index)
    }
  },
  mounted() {
    time('2020/01/04,12:10:20',1000,(time)=>{
      this.time = time
    })
  },
}
</script>
<style>
*
{
	padding: 0px;
	margin: 0px;
	list-style: none;
	text-decoration: none;
}

</style>
