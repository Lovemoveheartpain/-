<template>
    <div class="classify_left">
        <div class="classify_left_content">
            <div class="classify_list" v-for="(item, index) in $store.state.classify.classifyData" :key="index" @click="handle(index)" >
                {{item.name}}
                <div class="right_line"></div>
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
                
            }
        },
        mounted() {
            myscroll = new Better('.classify_left',{
                click:true,
                scrollY:true,
            })
        },
        updated(){
            myscroll.refresh();
            document.getElementsByClassName('right_line')[0].style.display = 'block'
        },
        methods: {
            handle(index){
                window.console.log(index);
                let line = document.getElementsByClassName('right_line');
                line.forEach(element => {
                    element.style.display = 'none'
                });
                line[index].style.display = 'block'
                Bus.$emit('getIndex',index)
            }
        }
    }
</script>

<style scoped>
.classify_left
{
    width: 30%;
    height: 712px;
    /* background-color: darkturquoise; */
    overflow: hidden;
}
.classify_left_content
{
    width: 100%;
}
.classify_list
{
    width: 100%;
    height: 65px;
    line-height: 65px;
    text-align: center;
    /* background: skyblue; */
    position: relative;
}
.right_line
{
    width: 3px;
    height: 25px;
    background-color: red;
    position: absolute;
    right: 3px;
    top: 50%;
    margin-top: -12.5px;
    z-index: 10;
    display: none;
}
</style>