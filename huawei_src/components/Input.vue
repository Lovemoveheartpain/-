<template>
    <div class="navigationBar_input_container" >
        <i class="el-icon-search"></i>
        <input type="text" name="" id="" v-model="val" placeholder="荣耀20" @click="handle" ref="inp" >
    </div>
</template>

<script>
import Bus from './Bus'
    export default {
        data () {
            return {
                val:''
            }
        },
        watch: {
            val(){
                window.console.log(26);
                Bus.$emit('newVal',this.val)
            },
        },
        methods: {
            handle(){
                if(this.$route.name === 'home'){
                    this.$router.push('/about')
                }
            },
            cha(){
                window.console.log(1212)
            }
        },
        mounted() {
            if(this.$route.name === 'about'){
                this.$refs.inp.focus();
            }
        },

    }
</script>

<style scoped>

.middle>.navigationBar_input_container
{
    width: 90%;
}
.navigationBar_input_container>input
{
    width: 80%;
    background-color: #f0f0f0;
    outline: none;
    border: none;
    font-size: 12px;
}
.navigationBar_input_container
{
    width: 60%;
    height: 30px;
    border-radius: 15px;
    background-color: #f0f0f0;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    color: lightgray;
}
</style>