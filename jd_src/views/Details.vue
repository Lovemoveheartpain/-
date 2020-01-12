<template>
    <div class="details_div">
        <div class="details_div_left">
            <img :src="$store.state.classify.details.image" alt="" class="details_div_logo" >
        </div>
        <div class="details_div_right">
            <p>商品名称：{{$store.state.classify.details.name}}</p>
            <p>价格：￥{{$store.state.classify.details.price}}</p>
            <div class="list_bottom">点击添加购物车
                <img src="./finger.png" alt="">
                <img @click="add($store.state.classify.details)" 
                src="./cart.png" alt="" style="width:25px;marginLeft:30px">
            </div><br><br>
            <router-link to="cart" tag="button">去购物车看看?</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
             add(value){
                this.$store.commit('add',value)
            }
        }
    }
</script>

<style scoped>
.details_div
{
    width: 100%;
    height: 150px;
    background-color: blueviolet;
    display: inline-flex;
}
.details_div_left
{
    width: 30%;
    height: 150px;
    background-color: cornflowerblue;
    display: inline-flex;
    align-items: center
}
.details_div_right
{
    width: 70%;
    height: 150px;
    background-color: gray;
    position: relative;
}
.details_div_logo
{
    width: 100%;
    height: 100px;
}
.cart
{
    width: 25px;
    height: 25px;
    position: absolute;
    right: 20px;
    bottom: 20px;
}
.list_bottom
{
    width: 100%;
    height: 30px;
    background-color: darkseagreen;
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    justify-content: center;
    margin-top: 10px;
}
</style>