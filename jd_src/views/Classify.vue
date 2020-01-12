<template>
    <div class="classify_container">
        <div class="classify_container_left">
            <ul>
                <li v-for="(item, index) in $store.state.classify.classifyList" :key="index" class="list_left_li" ref="li" v-on:click="listShop(index)">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="classify_container_right">
            <div class="classify_container_right_container">
                <div class="list_div_cont" v-for="(value, index) in filt()" :key="index">
                    <router-link to="details" tag="div" >
                        <img :src="value.image" alt="" class="list_div_cont_img" @click="handle(value)" >
                        {{value.name}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index:0
            }
        },
        methods: {
            listShop:function(index){
                 this.$refs.li.forEach(element => {
                     element.style.color = ''
                 });
                this.$refs.li[index].style.color = "red";
                this.index = index
             },
             filt(){
                 let array = this.$store.state.classify.classifyList[this.index]
                 if(!array){
                     return []
                 }else{
                     return array.content
                 }
             },
             handle(value){
                 this.$store.commit('details',value)
             }
        },
        updated () {
            this.$refs.li[this.index].style.color = "red";
        },
        mounted() {
            let obj = {
                method: "GET",
                url: "/list.json",
                params: {
                  params: {
                    type: "list"
                  }
                }
            };
                this.$store.dispatch("getClassify", obj);
            },
        }
</script>

<style scoped>
.classify_container
{
  width: 100%;
  display: flex;
}
.classify_container_left
{
  width: 25%;
  height: 568px;
  background-color: cornflowerblue
}
.classify_container_right
{
  width: 75%;
  height: 568px;
  background-color: pink
}
.list_left_li
{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: lightgreen;
}
.classify_container_right_container
{
    width: 100%;
    background-color: gold;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 40px;
}
.list_div_cont
{
    width: 30%;
    height: 120px;
    margin-bottom: 15px;
    background-color: deepskyblue;
    text-align: center;
}
.list_div_cont_img
{
    width: 80%;
}
</style>