<template>
    <div class="header_container" >
        <div class="header_content" >
            <div class="list" v-for="(item, index) in header" :key="index" @click="handle(index)">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
import Better from "better-scroll"
    export default {
        data() {
            return {
                header:["推荐","华为5G","荣耀新品","Mate30系列","数码惠","拼团"]
            }
        },
        methods: {
            handle(index){
                this.$emit('has',index)
            }
        },
        mounted() {
            document.getElementsByClassName('list')[0].style.color = 'red'
            
            new Better(".header_container",{
                scrollX:true,
                click:true
            })
        },
    }
</script>

<style scoped>
.header_container
{
    width: 100%;
    height: 35px;
    /* background: red; */
    overflow: hidden;
}
.header_content
{
    width: 420px;
    height: 35px;
    /* background-color: pink; */
    display: inline-flex;
}
.list
{
    width: 60px;
    height: 35px;
    /* background-color: aquamarine; */
    margin-left: 5px;
    margin-right: 5px;
    font-size: 12px;
    text-align: center;
    line-height: 35px;
}
</style>