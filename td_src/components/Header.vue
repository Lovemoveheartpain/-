<template>
  <div class="header_container" :style="{background:color}">
    <h2 class="h2">
      学习记事本
      <i class="el-icon-s-fold" @click="handle"></i>
    </h2>
    <van-popup v-model="show" position="left" :style="{ height: '100%' ,width:'50%'}">
      <div class="meng" v-show="isShow">
        <div class="select_div" :style="{backgroundColor:color}" @click="isShow = false">切换主题</div>
        <div class="select_div" :style="{backgroundColor:color}">下载数据</div>
        <div class="select_div" :style="{backgroundColor:color}">导入数据</div>
        <div class="select_div" :style="{backgroundColor:color}">编辑数据</div>
        <div class="select_div" :style="{backgroundColor:color}">清空数据</div>
      </div>
      <div class="color_meng" v-show="!isShow">
        <div class="select_div" v-for="(item, index) in colors" :key="index" :style="{backgroundColor:item}" @click="change(item)" >
          {{item}}
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isShow: true,
      colors: ["#FF9999","#CC6633", "#CC3333", "#33FFFF", "#33CCFF", "#FF6600"]
    };
  },
  computed: {
    color() {
      return this.$store.state.color.color;
    }
  },
  methods: {
    handle() {
      this.show = true;
      this.isShow = true;
    },
    change(item){
      this.$store.commit('change', item)
    }
  }
};
</script>

<style scoped>
.header_container {
  width: 100%;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.h2 {
  color: white;
}
.meng {
  width: 100%;
  height: 60%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25%;
}
.color_meng {
  width: 100%;
  height: 60%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25%;
}
.select_div {
  width: 60%;
  height: 50px;
  background-color: pink;
  color: white;
  font-size: 20px;
  line-height: 50px;
  border-radius: 10px;
  text-align: center;
}
</style>