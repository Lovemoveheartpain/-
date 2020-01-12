<template>
    <div class="classify_right">
        <div class="classify_right_container">
            <div class="classify_right_list" v-for="(item, index) in fill()" :key="index" @click="handle(item)" >
                <img :src="item.image" alt="" class="list_img" >
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Better from 'better-scroll';
let myscroll;
import Bus from '../Bus'
    export default {
        data() {
            return {
                index:0
            }
        },
        methods: {
            fill(){
                let arr = this.$store.state.classify.classifyData
                if(arr.length===0){
                    return []
                }else{
                    return this.$store.state.classify.classifyData[this.index].content
                }
            },
            handle(item){
                this.$store.commit('add',item);
                this.$store.commit('change',3)
                this.$router.push('/details')
            }
        },
        mounted() {
            Bus.$on('getIndex',(index)=>{
                this.index = index
            })
            myscroll = new Better('.classify_right',{
                click:true,
                scrollY:true,
            })
        },
        updated(){
            myscroll.refresh()
        }
    }
</script>

<style scoped>
.classify_right
{
    width: 70%;
    height: 712px;
    /* background-color: #eeeeee; */
    overflow: hidden;
}
.classify_right_container
{
    width: 100%;
    /* background-color: gray; */
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.classify_right_list
{
    width: 32%;
    height: 100px;
    /* background-color: deeppink; */
    margin-bottom: 10px;
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
}
.classify_right_list>p
{
    width: 100%;
}
.list_img
{
    width: 60%;
    height: 50%;
}

</style>