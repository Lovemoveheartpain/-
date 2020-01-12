<template>
    <div class="tab_container"> 
        <div class="tab_div_list" v-for="(item, index) in arr" :key="index" @click="handle(item.url,index)" >
            <img :src="item.flag?item.activeImg:item.img" alt="" class="list_icon">
            <p class="list_p">{{item.text}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                arr:[]
            }
        },
        mounted() {
            this.arr = this.$store.state.tag.tagData
        },
        methods: {
            handle(url,index){
                this.$store.commit('change',index)
                switch (url) {
                    case 'home':
                    if(this.$route.name !== url){
                        this.$router.push('/');
                    }else{
                        alert('您还在当前页面哦!')
                    }
                    break;
                    case 'classify':
                    if(this.$route.name !== url){
                        this.$router.push('/'+url)
                    }else{
                        alert('您还在当前页面哦!')
                    }
                    break;
                    case 'discover':
                    if(this.$route.name !== url){
                        this.$router.push('/'+url)
                    }else{
                        alert('您还在当前页面哦!')
                    }
                    break;
                    case 'cart':
                    if(this.$route.name !== url){
                        this.$router.push('/'+url)
                    }else{
                        alert('您还在当前页面哦!')
                    }
                    break;
                    case 'mine':
                    if(this.$route.name !== url){
                        this.$router.push('/'+url)
                    }else{
                        alert('您还在当前页面哦!')
                    }
                    break;
                    default:
                    break;
                }
            }
        }
    }
</script>

<style scoped>
.tab_container
{
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0px;
    background-color: #f9f9f9;
    display: inline-flex;
    justify-content: space-between;
}
.tab_div_list
{
    width: 20%;
    /* background-color: cadetblue; */
    height: 60px;
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
.list_icon
{
    width: 30px;
    height: 30px;
}
.list_p
{
    width: 100%;
    text-align: center;
}
</style>