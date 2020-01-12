<template>
    <div class="scroll_big" >
        <div class="scroll_container">
            <div class="top" v-show="isTop" >下拉刷新</div>
            <div class="diver" v-for="(item, index) in number" :key="index" >
                {{item}}
            </div>
            <div class="bottom" v-show="isBotoom">{{text}}</div>
        </div>
    </div>
</template>

<script>
import Better from "better-scroll"
    export default {
        data() {
            return {
                isTop:false,
                isBotoom:false,
                number:10,
                text:'上拉加载'
            }
        },
        mounted() {
            this.$nextTick(()=>{
                let myscroll = new Better('.scroll_big',{
                    scrollY:true,
                    click:true,
                    // 上拉加载
                    pullUpLoad: {
                        // 当上拉距离超过50px时触发 pullingUp 事件
                        threshold: -50
                    },
                    // // 下拉刷新
                    pullDownRefresh: {
                        // 下拉距离超过30px触发pullingDown事件
                        threshold: 30,
                        // 回弹停留在距离顶部20px的位置
                        stop: 0
                    }
                })

                myscroll.on('scroll',(tap)=>{
                    // window.console.log(tap);
                    if(tap.y>60){
                        this.isTop = true
                    }else if(myscroll.maxScrollY> tap.y+50)
                        this.isBotoom = true
                })

                myscroll.on('pullingDown',()=>{
                    setTimeout(() => {
                        this.number = 10
                        this.isTop = false;
                        myscroll.refresh()
                        myscroll.finishPullDown();
                    }, 1000);
                })
                myscroll.on('pullingUp',()=>{
                    window.console.log(this.number)
                    setTimeout(() => {
                        if(this.number > 15){
                            this.text = '已经到底了!'
                            this.isBotoom = false;
                            myscroll.refresh()
                            myscroll.finishPullUp();
                            return
                        }else{
                            this.number+=2
                            this.isBotoom = false;
                            myscroll.refresh()
                            myscroll.finishPullUp();
                        }
                    }, 1000);
                })
            })
        },
    }
</script>

<style scoped>
.scroll_big
{
    width: 100%;
    height: 600px;
    background-color: cornflowerblue;
    overflow: hidden;
}
.scroll_container
{
    width: 100%;
}
.diver
{
    width: 100%;
    height: 80px;
    background-color: gray;
    text-align: center;
    margin-bottom: 10px;
}
.top
{
    width: 100%;
    height: 60px;
    background-color: lightsalmon;
    text-align: center;
    line-height: 60px;
}
.bottom
{
    width: 100%;
    height: 60px;
    background-color: skyblue;
    text-align: center;
    line-height: 60px;
}
</style>