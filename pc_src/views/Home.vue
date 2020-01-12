<template>
  <div class="home">
    <el-row :gutter="10">
      <el-col :xs="0" :sm="5">
        <div class="list_msg_left_container">
          <div
            class="price_div"
            v-for="(item, index) in text"
            @click="click(index)"
            :key="index"
          >{{item}}</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="18">
        <h4>
          <button>default</button>
          <button @click="change">{{isHight?'从高到底':'从低到高'}}</button>
        </h4>
        <div class="wrap_container">
          <div class="scroll_div">
            <el-row :gutter="20">
              <el-col
                :xs="24"
                :sm="12"
                :md="8"
                :lg="6"
                :xl="2"
                v-for="(item, index) in list"
                :key="index"
              >
                <div class="list_msg_div">
                  <img :src="item.productImage" alt class="list_msg_img" />
                  <div class="p">
                    <span>{{item.productName}}</span>
                  </div>
                  <div class="p">
                    <span style="color:orange">￥{{item.salePrice}}</span>
                  </div>
                  <div class="add_to_cart">加入购物车</div>
                </div>
              </el-col>
            </el-row>
            <div class="bottom" v-show="isBottom">
              加載更多
              <i class="el-icon-loading"></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Axios from "axios";
import Better from "better-scroll";
export default {
  name: "home",
  components: {},
  data() {
    return {
      list: [],
      isHight: true,
      text: ["all", "0~~100", "100~~500", "500~~1000", "1000~~2000"],
      num: 0,
      isBottom: false
    };
  },

  methods: {
    click(index) {
      this.num = index;
      document.getElementsByClassName("price_div").forEach(element => {
        element.style.color = "";
      });
      document.getElementsByClassName("price_div")[index].style.color = "red";
    },
    change() {
      this.isHight = !this.isHight;
      if (this.isHight) {
        this.list.sort((a, b) => {
          if (a.salePrice < b.salePrice) {
            return -1;
          }
          return 0;
        });
        console.log(this.list);
      } else {
        this.list.sort((a, b) => {
          if (a.salePrice > b.salePrice) {
            return -1;
          }
          return 0;
        });
        console.log(this.list);
      }
    }
  },
  computed: {
    itemValue() {
      let arr = [];
      switch (this.num) {
        case 0:
          return this.list;
        case 1:
          this.list.forEach(element => {
            // window.console.log(element.salePrice)
            if (element.salePrice > 0 && element.salePrice <= 100) {
              window.console.log(element);
              arr.push(element);
            }
          });
          // window.console.log(arr)
          return arr;
        case 2:
          this.list.forEach(element => {
            if (element.salePrice > 100 && element.salePrice <= 500) {
              arr.push(element);
            }
          });
          return arr;
        case 3:
          this.list.forEach(element => {
            if (element.salePrice > 500 && element.salePrice <= 1000) {
              arr.push(element);
            }
          });
          return arr;
        case 4:
          this.list.forEach(element => {
            if (element.salePrice > 1000 && element.salePrice <= 2000) {
              arr.push(element);
            }
          });
          return arr;
        default:
          return this.list;
      }
    }
  },
  mounted() {
    Axios.get("http://localhost:8080/data.json")
      .then(res => {
        window.console.log(res.data.result.list);
        this.list = [...this.list, ...res.data.result.list];
      })
      .catch(err => {
        window.console.log(err);
      });
    let myscroll = new Better(".wrap_container", {
      mouseWheel: true
    });

    myscroll.on("scrollEnd", tog => {
      if (tog.y == myscroll.maxScrollY-1) {
        window.console.log(12);
        this.isBottom = true;
        setTimeout(() => {
          Axios.get("http://localhost:8080/data2.json")
            .then(res => {
              // window.console.log(res.data.result.list);
              this.list = [...this.list, ...res.data.result.list];
              this.isBottom = false;
            })
            .catch(err => {
              window.console.log(err);
            });
        }, 2000);
      }
    });

    document.getElementsByClassName("price_div")[0].style.color = "red";
  }
};
</script>
<style>
.bottom {
  width: 100%;
  height: 50px;
  background: red;
  text-align: center;
  line-height: 50px;
  position: absolute;
  bottom: 0px;
}
.scroll_div {
  width: 100%;
}
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .list_msg_div {
    width: 768px !important;
    height: 150px !important;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
  }
  .wrap_container {
    width: 768px !important;
  }
  .list_msg_img {
    width: 100px !important;
    height: 100px !important;
  }
  .add_to_cart {
    margin: 0 !important;
  }
}
.el-row {
  margin: 0 !important;
}
.home {
  width: 100%;
}
.list_msg_left_container {
  width: 100%;
  /* height: 100px; */
  background-color: chartreuse;
}
.wrap_container {
  width: 100%;
  border: 1px solid pink;
  height: 700px;
  overflow: hidden;
  padding-bottom: 50px;
  position: relative;
}
.list_msg_div {
  width: 100%;
  height: 350px;
  border: 1px solid lightgray;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 30px;
}
.list_msg_div:hover {
  border: 1px solid orange;
  box-shadow: 1px 1px 10px lightgray;
  transition: all 500ms;
}
.list_msg_img {
  width: 150px;
  height: 150px;
  /* border: 1px solid red; */
}
.add_to_cart {
  width: 100px;
  height: 35px;
  border: 1px solid red;
  line-height: 35px;
  color: red;
  margin: 0 auto;
}

.price_div {
  width: 100%;
  height: 40px;
  background-color: orange;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 40px;
}
.p {
  margin-bottom: 25px;
}
</style>
