<template>
  <div class="input_container">
    <div class="input_big_div">
      <div class="left">
        <input type="text" name="" id="" v-model="input" @keydown.13="change" >
      </div>
      <div class="right">
        <van-button :color="color" @click="change" >提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  computed: {
    color() {
      return this.$store.state.color.color;
    }
  },
  methods: {
    change(){
        window.console.log(this.input);
        let array = {
            value:this.input,
            status:'PENDING',
            flag:false,
            isShow:true
        }
        this.$store.commit('add',array)
    }
  }
};
</script>

<style scoped>
.input_big_div {
  width: 100%;
  height: 50px;
  /* background-color: red; */
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
}
.input_container {
  width: 100%;
  background-color: gray;
}
.left {
  width: 70%;
}
.right {
  width: 15%;
  text-align: center;
}
</style>