<template>
    <div class="mine_container">
        <h2>我是我的页面</h2>
        <div class="mine_scroll">
            <div class="wai">
            <div class="top" v-show="isTop" >下拉刷新</div>
                <p v-for="(item, index) in $store.state.update.allData" :key="index"  >{{item.title}}</p>
             <div class="bottom" v-show="isBottom" >{{bottom_text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Better from 'better-scroll';
let myscroll;
    export default {
        data() {
            return {
                isTop:false,
                isBottom:false,
                bottom_text:'上拉加载'
            }
        },
        mounted() {
            let top_value = {
                params:{
                    params:{
                        name:'更新数据'
                    }
                },
                callback:()=>{
                    window.console.log(this.isTop);
                    this.isTop = false
                }
            }
            let bottom_value = {
                params:{
                    params:{
                        name:'加载数据'
                    }
                },
                callback:(text)=>{
                    window.console.log(this.isTop);
                    this.isBottom = false;
                    if(text){
                        this.bottom_text = text
                    }
                }
            }
            this.$store.dispatch('getAllData',top_value)
            this.$nextTick(()=>{
                myscroll = new Better('.mine_scroll',{
                    scrollY:true,
                    click:true,
                    probeType: 3,
                });
                myscroll.on('scroll',(pos)=>{
                    // window.console.log(pos);
                    if(pos.y > 50){
                        this.isTop = true;
                    }
                    if(myscroll.maxScrollY>pos.y+50){
                        this.isBottom = true;
                    }

                })
                myscroll.on('touchEnd', (pos) => {
                    window.console.log(pos)
                    if (pos.y > 50) {
                        this.$store.dispatch('getAllData',top_value)
                    }

                    if(myscroll.maxScrollY>pos.y+50){
                       this.$store.dispatch('getRefurbishData',bottom_value)
                    }
                })
            })
        },
    }
</script>

<style scoped>
.mine_container
{
    width: 100%;
}
.mine_scroll
{
    width: 100%;
    height: 600px;
    overflow: hidden;
    background-color: darkviolet;
}
.top
{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: pink;
}
.bottom
{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: deepskyblue;
}
.wai
{
    width: 100%;
}
.wai>p
{
    width: 100%;
    height: 100px;
    background-color: gold;
    margin-bottom: 10px;
}
</style>