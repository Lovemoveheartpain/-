<template>
  <div class="jy_search_container">
    <div class="jy_search_container_top">
      <div class="jy_search_container_left">搜索“{{text}}”</div>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div @click="handle(item)" v-for="(item, index) in shop" :key="index">
      <div v-html="item"></div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      array: []
    };
  },
  props: {
    text: String
  },
  mounted() {
    // Axios.get("http://localhost:8080/text.json")
    //   .then(res => {
    //     this.array = res.data;
    //   })
    //   .catch(err => {
    //     window.console.log(err);
    //   });
    Axios.get("http://localhost:8081/city.json")
      .then(res => {
        this.array = res.data;
        let all = [];
        res.data.forEach(element => {
          element.data.forEach(value => {
            all.push(value.pinyin);
            all.push(value.name);
          });
        });
        this.array = all;
      })
      .catch(err => {
        window.console.log(err);
      });
  },
  computed: {
    shop() {
      let temp = [];
      this.array.forEach(element => {
        if (element.includes(this.text)) {
          let test = element.replace(new RegExp(this.text, 'g'),`<span class='highlights-text'>` + this.text + '</span>');
          temp.push(test);
        }
      });
      return temp;
    }
  },
  methods: {
    handle(text) {
      this.$emit("moveNext", text);
      this.$router.push({
        name: "home",
        params: {
          text
        }
      });
    }
    // highlights(text) {
    //   return text.replace(new RegExp(this.text, "g"),'<span class="highlights-text">' + this.text + "</span>");
    // }
  }
};
</script>

<style>
.jy_search_container {
  width: 100%;
}
.jy_search_container_top {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: inline-flex;
  /* background-color: red; */
  justify-content: space-around;
  align-items: center;
}
.jy_search_container_left {
  width: 80%;
  /* background: pink */
}
.highlights-text {
  color: #ff5134;
}
</style>

