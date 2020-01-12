<template>
  <div>
    <div class="about">
      <h1>This is an about page</h1>
      <AVue/>
      <BVue/>
    </div>
    <!-- <ChildVue :nn="items">
      <button slot="k" >按钮</button>
      <template slot-scope="a">
        <div v-if="a.bbbbb.id==1">
          你好：
          <button>{{a.bbbbb.name}}</button>
        </div>
        <div v-else>{{a.bbbbb.name}}</div>
      </template>

      <template #swiperSlide="{dataMes}">
        <button v-for="(item, index) in dataMes" @click="click" :key="index">{{item}}</button>
      </template>
    </ChildVue> -->
    <div>
      
    </div>
  </div>
</template>
<script>
import AVue from './A.vue';
import BVue from './B.vue';
// import ChildVue from "./Chil.vue";
export default {
  // components: { ChildVue },
  components: { AVue,BVue },
  data() {
    return {
      items: [
        { id: 1, name: "孙悟空" },
        { id: 2, name: "猪八戒" },
        { id: 3, name: "沙和尚" },
        { id: 4, name: "唐僧" },
        { id: 5, name: "小白龙" }
      ],
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: [],
      
    };
  },
  methods: {
    click() {
      window.console.log(1212);
    }
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
    
  }
};
</script>

<style>
</style>