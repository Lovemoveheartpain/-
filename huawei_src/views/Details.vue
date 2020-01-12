<template>
    <div class="details_container">
        <div class="details_body">
            <div class="details_body_left">
                <img :src="value.image" alt="" class="details_img" >
            </div>
            <div class="details_body_right">
                <h3>商品名称：<span>{{value.name}}</span></h3>
                <h3>商品价格：<span>￥{{value.price}}元</span></h3>
                <h3>商品数量：<span>{{value.count}}件</span></h3>
                <button @click="add(value)" >添加购物车</button>
                <button @click="look" >查看购物车</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value:{
                    
                }
            }
        },
        mounted() {
            this.value = this.$store.state.details.detailsData
        },
        methods: {
            add(value){
                this.$store.commit('addToCart', value)
            },
            look(){
                this.$router.push('/cart')
            }
        },
    }
</script>

<style scoped>
.details_container
{
    width: 100%;
}
.details_body
{
    width: 100%;
    height: 180px;
    background-color: darkturquoise;
    display: inline-flex;
}
.details_body_left
{
    width: 30%;
    height: 180px;
    /* background-color: cadetblue; */
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.details_body_right
{
    width: 70%;
    height: 180px;
    background-color: red;
}
.details_img
{
    width: 80%;
    height: 50%;
}
.details_body_right>h3
{
    margin-top: 10px;
    margin-bottom: 5px;
}
</style>