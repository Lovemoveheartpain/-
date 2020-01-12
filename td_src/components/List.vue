<template>
  <div class="list_container_div">
    <van-collapse v-model="activeNames">
      <van-collapse-item title="未完成" name="1">
        <div class="todolist_bar_container">
          <div class="todo_list_nei" v-for="(item, index) in pendding()" :key="index">
            <div class="todo_list_left">
              <!-- <el-checkbox :checked="item.flag" @click="toBottom(item)"></el-checkbox> -->
              <el-checkbox v-model="item.flag" @change="toBottom(item)"></el-checkbox>
            </div>
            <div class="todo_list_middle" @click="handle(item)">
              <div v-show="item.isShow">{{item.value}}</div>
              <input
                v-show="!item.isShow"
                type="text"
                v-model="item.value"
                @keydown.13="blur(item)"
              />
            </div>
            <div class="todo_list_right">
              <button @click="cancel(item)">取消</button>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="已完成" name="2">
        <div class="todolist_bar_container">
          <div class="todo_list_nei" v-for="(item, index) in finished()" :key="index">
            <div class="todo_list_left">
              <el-checkbox v-model="item.flag" @change="toTop(item)"></el-checkbox>
            </div>
            <div class="todo_list_middle" @click="handle(item)">
              <div v-show="item.isShow">{{item.value}}</div>
              <input
                v-show="!item.isShow"
                type="text"
                v-model="item.value"
                @keydown.13="blur(item)"
              />
            </div>
            <div class="todo_list_right">{{time}}</div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="已取消" name="3">
        <div class="todolist_bar_container">
          <div class="todo_list_nei" v-for="(item, index) in remove()" :key="index">
            <div class="todo_list_left">
              <!-- <el-checkbox :checked="item.flag"></el-checkbox> -->
            </div>
            <!-- <div class="todo_list_middle" @click="handle(item)">
              <div v-show="item.isShow">{{item.value}}</div>
              <input
                v-show="!item.isShow"
                type="text"
                v-model="item.value"
                @keydown.13="blur(item)"
              />
            </div>-->
            <div class="todo_list_middle">
              <div class="cancel_text">{{item.value}}</div>
            </div>
            <div class="todo_list_right">
              <button @click="recover(item)">恢复</button>
            </div>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
    <span style="display: none">{{color}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: [],
      time: new Date().toLocaleDateString()
    };
  },
  computed: {
    color() {
      return this.$store.state.color.color;
    }
  },
  methods: {
    xiu() {
        this.$store.commit("xiu");
    },
    toBottom(item) {
      this.$store.commit("toBottom", item);
    },
    toTop(item) {
      this.$store.commit("toTop", item);
    },
    recover(item) {
      this.$store.commit("toTop", item);
    },
    cancel(item) {
      this.$store.commit("toRemove", item);
    },
    handle(item) {
      window.console.log(item);
      item.isShow = false;
    },
    blur(item) {
      window.console.log(777);
      item.isShow = true;
      this.$store.commit("xiu");
    },
    handleChange(val) {
      console.log(val);
    },
    pendding() {
      let items = [];
      let arr = this.$store.state.input.input;
      window.console.log(arr);
      arr.forEach(element => {
        window.console.log(element);
        if (element.status === "PENDING") {
          items.push(element);
        }
      });

      return items;
    },
    finished() {
      let items = [];
      let arr = this.$store.state.input.input;
      arr.forEach(element => {
        if (element.status === "FINISHED") {
          items.push(element);
        }
      });
      return items;
    },
    remove() {
      let items = [];
      let arr = this.$store.state.input.input;
      arr.forEach(element => {
        if (element.status === "REMOVE") {
          items.push(element);
        }
      });
      return items;
    }
  },
  mounted() {
    window.console.log(666);
    document.getElementsByClassName("van-cell").forEach(element => {
      element.style.background = this.color;
    });
  },
  updated() {
    document.getElementsByClassName("van-cell").forEach(element => {
      element.style.background = this.color;
    });
  }
};
</script>

<style scoped>
.list_container_div {
  width: 95%;
  margin: 0 auto;
}

.todo_list_nei {
  width: 100%;
  height: 40px;
  background-color: pink;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
}

.todo_list_left {
  width: 5%;
  height: 30px;
  background-color: darkgrey;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.todo_list_middle {
  width: 70%;
  height: 30px;
  /* background-color: lightgray; */
  display: inline-flex;
  align-items: center;
}
.todo_list_right {
  width: 20%;
  height: 30px;
  background-color: lightgreen;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.cancel_text {
  text-decoration: line-through;
}
</style>