<template>
  <div class="home" id="home">
    <div class="home_top">
      <div class="top_one">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="top_two">
        <el-input
          size="mini"
          placeholder="请输入小区名或地址"
          @focus="handle"
          clearable
          v-model="value"
          prefix-icon="el-icon-search"
          suffix-icon
        ></el-input>
      </div>
      <div class="top_three">地图</div>
      <div class="top_four">
        <i class="el-icon-document"></i>
      </div>
    </div>
    <div class="home_middle">
      <div class="div_color" @click="click(0)">
        官园
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="div_color" @click="click(1)">
        售价
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="div_color" @click="click(2)">
        房源
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="div_color" @click="click(3)">
        更多
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="home_middle_two">
      <div>安选在售.预约看房</div>
      <div>佣金折扣</div>
      <div>3D看房</div>
    </div>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :offset="offset"
        @load="onLoad"
      >
        <van-cell>
          <div class="home_list" v-for="(item,index) in items" :key="index">
            <div class="home_list_left">
              <img :src="item.img" alt class="home_list_img" />
            </div>
            <div class="home_list_right">
              <p>{{item.name}}</p>
              <p>{{item.acreage}}</p>
              <p>{{item.price}}万</p>
              <h3>{{item.id}}</h3>
            </div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// @ is an alias to /src
import Axios from "axios";
Axios;
export default {
  name: "home",
  components: {},
  data() {
    return {
      offset: 20,
      value: "",
      num: 0,
      items: [],
      number: 0,
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  methods: {
    handle() {
      this.$router.push('/about')
    },
    click(index) {
      this.num = index;
      document.getElementsByClassName("div_color").forEach(element => {
        element.style.color = "";
      });
      document.getElementsByClassName("div_color")[this.num].style.color =
        "lightgreen";
    },
    onRefresh() {
      Axios.get("http://localhost:8080/data.json")
        .then(res => {
          this.number = 0;
          setTimeout(() => {
            this.number += 4;
            let array = [];
            for (let i = 0; i < this.number; i++) {
              array.push(res.data[i]);
            }
            this.loading = false;
            this.$toast("刷新成功");
            this.isLoading = false;
            this.finished = false;
            // console.log(array);
            this.items = array;
          }, 1500);
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    onLoad() {
      Axios.get("http://localhost:8080/data.json")
        .then(res => {
          // window.console.log(res);
          setTimeout(() => {
            this.number += 4;
            let array = [];
            for (let i = 0; i < this.number; i++) {
              array.push(res.data[i]);
            }
            this.loading = false;
            if (this.number >= 16) {
              this.finished = true;
            }
            // console.log(array);
            this.items = array;
          }, 1500);
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  },
  mounted() {
    document.getElementsByClassName("div_color")[this.num].style.color = "lightgreen";
    window.console.log(this.$route)
    window.console.log(window.localStorage.getItem('historyList'))
  }
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
  text-decoration: none;
}
.home_top {
  width: 100%;
  height: 50px;
  /* background-color: cadetblue; */
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
}
.top_one {
  /* background-color: darkgray; */
  width: 10%;
  text-align: center;
  font-size: 26px;
}
.top_two {
  /* background-color: pink; */
  width: 50%;
}
.top_three {
  /* background-color: red; */
  width: 15%;
  text-align: center;
}
.top_four {
  /* background-color: yellow; */
  width: 10%;
  text-align: center;
  font-size: 26px;
}
.el-input--prefix .el-input__inner {
  background-color: #f0f0f0;
}
.home_middle {
  width: 100%;
  height: 40px;
  /* background-color: cornflowerblue; */
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 900;
}
.home_middle_two {
  width: 100%;
  height: 40px;
  /* background-color: cornflowerblue; */
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 900;
}
.home_middle_two > div {
  height: 30px;
  background-color: #f0f0f0;
  line-height: 30px;
  padding-left: 5%;
  padding-right: 5%;
}

.home_list {
  width: 100%;
  height: 120px;
  background-color: aquamarine;
  display: inline-flex;
}
.home_list_left {
  width: 30%;
  height: 120px;
  background: red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.home_list_right {
  width: 70%;
  height: 120px;
  background: pink;
}
.home_list_img {
  width: 70%;
  height: 70%;
}
</style>