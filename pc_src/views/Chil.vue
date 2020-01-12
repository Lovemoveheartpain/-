<template>
  <div>
    <h2>hello world !!</h2>
    <slot name="k" ></slot>
    <!-- <slot></slot>
    <button>
      <slot name="span"></slot>
    </button>
    <h4>这个世界不仅有男人和女人</h4>

    <slot name="girl"></slot>

    <slot name="boy"></slot>-->
    <!-- <slot say="你好"></slot>
      <ul>
        <li v-for="(item, index) in nn" :key="index">
          <slot :bbbbb="item"></slot>
        </li>
    </ul>-->
    <!-- <slot>咳咳咳咳</slot> -->
    <!-- <slot name="bt" ><button>???</button></slot> -->
    <!-- <slot v-bind:txt1="txt1">狮子</slot>
    <slot name="mes">是一种生存在非洲与亚洲的大型猫科动物</slot>-->
    <!-- <div>
      <ul>
        <li v-for="(list,index) in nn" :key="index">
          <slot :bbbbb="list"></slot>
        </li>
      </ul>
      <slot name="swiperSlide" :dataMes="dataMes"></slot>
    </div>-->
    <!-- <a-collapse v-model="activeKey">
      <a-collapse-panel header="" key="1">
        <p>{{text}}</p>
        <slot name="k" ></slot>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 2" key="2">
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 3" key="3">
        <p>{{text}}</p>
      </a-collapse-panel>
    </a-collapse> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: [],
      txt1: "我是子组件里的数据: 猫头鹰",
      dataMes: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  props: {
    nn: Array
  },
  watch: {
    activeKey(key) {
      console.log(key);
    }
  },
  mounted() {
    window.console.log(this.$props);
    let a = document.createElement('div');
    a.setAttribute("class","div");
    this.dataMes.forEach(element => {
    let b = document.createElement('div');
    b.setAttribute("class","div2");
    b.append(element);
    a.append(b)
    });
    window.console.log(document.getElementsByClassName('ant-collapse-header')[0].append(a))
  },
};
</script>

<style>
/* .ant-collapse-item
{
  background: red
} */
.ant-collapse-header
{
  background: pink
}
.div
{
  width: 100%;
  height: 100px;
  background: lightcoral;
  display: inline-flex;
  justify-content: space-around
}
.div2
{
  width: 100px;
  height: 100px;
  background: lightgreen;
  background: red;
}
</style>