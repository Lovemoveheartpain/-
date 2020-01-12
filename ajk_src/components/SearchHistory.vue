<template>
  <div class="search_history_container">
    <div class="search_hot">
      <h4>
        热门搜索
        <i @click="shua" style="font-size: 20px;
  float: right" :class="icon"></i>
      </h4>
      <div class="hot_list">
        <div class="hot_div" v-for="(item, index) in bit" :key="index">{{item.text}}</div>
      </div>
    </div>
    <div class="search_history_list">
      <h4>
        搜索历史
        <i @click="remove" class="el-icon-delete"></i>
      </h4>
      <div class="search_list" v-show="isShow">
        <div class="search_div" v-for="(item, index) in history" :key="index">{{item}}</div>
      </div>
    </div>

    <van-overlay :show="show" >
      <div class="wrapper" @click.stop>
        <div class="block" >
          确定要删除吗？
          <button @click="sure" >确定</button>
          <button @click="show = false" >取消</button>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      hot: [],
      history: [],
      isShow: true,
      num: 0,
      icon: "el-icon-refresh",
      show:false
    };
  },
  computed: {
    bit() {
      let array = [];
      for (let index = this.num * 8; index < (this.num + 1) * 8; index++) {
        if (this.hot[index]) {
          array.push(this.hot[index]);
        }
      }
      window.console.log(array);
      return array;
    }
  },
  methods: {
    shua() {
      this.icon = "el-icon-loading";
      setTimeout(() => {
        this.num++;
        if (this.num > 4) {
          this.num = 0;
        }
        window.console.log(this.num);
        this.icon = "el-icon-refresh";
      }, 2000);
    },
    remove() {
      // this.history = [];
      // window.localStorage.removeItem('historyList',JSON.stringify(this.history));
      this.show = true;
    },
    sure(){
      this.show = false;
      this.history = [];
      window.localStorage.removeItem('historyList',JSON.stringify(this.history));
    }
  },
  mounted() {
    Axios.get("http://localhost:8080/hot.json")
      .then(res => {
        this.hot = res.data;
        window.console.log(this.hot.length);
      })
      .catch(err => {
        window.console.log(err);
      });

    this.history = JSON.parse(
      window.localStorage.getItem("historyList") || "[]"
    );
    if (this.history.length === 0) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
};
</script>

<style scoped>
.search_history_container {
  width: 100%;
}
.search_hot {
  width: 90%;
  padding: 5%;
  /* background-color: red; */
}
.hot_list {
  margin-top: 3%;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
}
.hot_div {
  height: 30px;
  line-height: 30px;
  background-color: #f0f0f0;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 2%;
}
.search_history_list {
  margin-top: 15px;
  width: 90%;
  padding: 5%;
  /* background-color: red; */
}
.el-icon-delete {
  font-size: 20px;
  float: right;
}
.el-icon-refresh {
  font-size: 20px;
  float: right;
}
.search_list {
  margin-top: 3%;
  width: 100%;
}
.search_div {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid lightgray;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>