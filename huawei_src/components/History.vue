<template>
    <div class="list_history">
        <div v-for="(item, index) in history" :key="index">{{item}}</div>
    </div>
</template>

<script>
import {allLocal} from '../localStorage/index.js'
import Bus from './Bus';
    export default {
        data() {
            return {
                history:[],
            }
        },
        mounted() {
            let arr = allLocal.getSearchHis();
            window.console.log(arr)
            
            if(arr){
                this.history = arr.data;
            }else{
                this.history = []
            }
            Bus.$on('shua',(val)=>{
                if(val){
                    this.history = val.data
                }else{
                    this.history = []
                }
            })
        },
    }
</script>

<style scoped>
.list_history
{
  width: 100px;
}
</style>