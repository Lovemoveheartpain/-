<template>
  <div class="about">
    <div class="about_navigationBar_container">
        <div class="about_navigationBar_left" >
            <img src="../assets/fan.png" alt="" @click="fan" >
        </div>
        <div class="middle">
          <InputVue />
        </div>
        <div class="about_navigationBar_right" >
            <div style="font-size: 12px" @click="search" >搜索</div>
        </div>
    </div>
    <div class="hot_container">
      <p>热门搜索</p>
      <div class="list_container">
        <div class="list_div" v-for="(item, index) in $store.state.hot.hotData" :key="index" :style="item.is?``:`color:red`" @click="handle(item.text)">
          {{item.text}}
        </div>
      </div>
    </div>
    <div v-show="this.is">
      搜索历史 <button @click="remove">清空</button>
      <HistoryVue/>
    </div>
  </div>
</template>

<script>
import InputVue from '../components/Input'
import {allLocal} from '../localStorage/index.js'
import Bus from '../components/Bus'
import HistoryVue from '../components/History.vue'
  export default {
    data() {
      return {
        mes:'',
        is:true
      }
    },
    components: {
      InputVue,
      HistoryVue
    },
    methods: {
      fan(){
        this.$router.push('/')
      },
      remove(){
        allLocal.removeSearchHis();
        let arr = allLocal.getSearchHis();
        if(!arr){
          this.is = false
        }
        Bus.$emit('shua',arr)
      },
      search(){
        this.handle(this.mes)
      },
      handle(value){
        this.is = true
        let history = allLocal.getSearchHis()
        window.console.log(history);
        if(history){
          history.data.push(value)
          allLocal.setSearchHis(history)
        }else{
          let arr = [];
          arr.push(value);
          allLocal.setSearchHis({data:arr});
        }
        Bus.$emit('shua',allLocal.getSearchHis())
      }
    },
    mounted() {
      let value = {
        params:{
          params:{
            name:'热门'
          }
        }
      }
      this.$store.dispatch('getHotData', value);
      Bus.$on('newVal',(val)=>{
        this.mes = val
      })
      let arr = allLocal.getSearchHis();
      if(!arr){
        this.is = false
      }
    },
  }
</script>

<style scoped>

.hot_container
{
  width: 100%;
  /* height: 150px; */
  /* background-color: red */
}
.middle
{
  width: 80%;
  display: inline-flex;
  justify-content:center;
}
.about
{
  width: 100%;
}
.about_navigationBar_container
{
    width: 100%;
    height: 40px;
    /* background-color: pink; */
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}
.about_navigationBar_left
{
    width: 10%;
    height: 40px;
    /* background-color: lightcyan; */
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.about_navigationBar_left>img
{
    width: 50%;
}

.about_navigationBar_right
{
    width: 10%;
    height: 40px;
    /* background-color: yellow; */
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
}
.hot_container
{
  width: 94%;
  padding: 3%;
  font-size: 12px;
}
.list_container
{
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
}
.list_div
{
  height: 16px;
  background-color: #f0f0f0;
  padding-left: 3px;
  padding-right: 3px;
  line-height: 16px;
  margin: 8px;
  border-radius: 2px;
}
</style>