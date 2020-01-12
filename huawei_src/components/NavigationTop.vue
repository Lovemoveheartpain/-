<template>
    <div class="navigationBar_container">
        <div class="navigationBar_left" >
            <img src="../assets/vmall.png" alt="">
        </div>
        <div class="middle">
            <InputVue/>
        </div>
        <div class="navigationBar_right" >
            <div class="el-icon-chat-dot-round"></div>
            <div style="font-size: 12px">登录</div>
        </div>
    </div>
</template>

<script>
import InputVue from './Input.vue'

    export default {
        data() {
            return {
                input:""
            }
        },
        components:{
            InputVue
        }
    }
</script>

<style scoped>
.middle
{
    width: 60%;
    /* background: red; */
    display: inline-flex;
    justify-content:center;
}
.navigationBar_container
{
    width: 100%;
    height: 40px;
    /* background-color: pink; */
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}
.navigationBar_left
{
    width: 20%;
    height: 40px;
    /* background-color: lightcyan; */
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.navigationBar_left>img
{
    width: 80%;
}

.navigationBar_right
{
    width: 20%;
    height: 40px;
    /* background-color: yellow; */
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
}
</style>
