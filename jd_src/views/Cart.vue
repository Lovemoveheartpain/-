<template>
    <div class="cart_container">
        <h2 style="text-align: center">购物车</h2>
        <div>
            <span>总数量：{{sumCount}}</span>
            <span>总价格：{{sumPrice}}</span>
            <button @click="remove">清空购物车</button>
            <router-link to="/" tag="button">回到首页</router-link>
        </div>
        <div v-show="$store.state.cart.shoppingCar.length>0?false:true" class="kong">
            您的购物车空空如也!!!
            <!-- {{$store.state.cart.shoppingCar}} -->
        </div>
        <div class="cart_content">
            <div class="cart_list_div" v-for="(item, index) in $store.state.cart.shoppingCar" :key="index" >
                <div class="list_div_cont_left">
                    <img :src="item.image" alt="">
                </div>
                <div class="list_div_cont_right">
                    <p>商品名称：{{item.name}}</p>
                    <p>价格：￥{{item.price}}</p>
                    <div>
                        数量：
                        <button @click="jian(index)">-</button>
                        <span>{{item.count}}</span>
                        <button @click="jia(index)">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            sumPrice(){
                let sum = 0;
                this.$store.state.cart.shoppingCar.forEach(element => {
                   sum += element.price*element.count 
                });
                return sum
            },
            sumCount(){
                let sum = 0;
                this.$store.state.cart.shoppingCar.forEach(element => {
                   sum += element.count 
                });
                return sum
            },
        },
        methods: {
            remove(){
                this.$store.commit('remove')
            },
            jian(index){
               this.$store.commit('jian',index) 
            },
            jia(index){
                this.$store.commit('jia',index) 
            }
        }
    }
</script>

<style scoped>
.cart_container
{
    width: 100%;
}
.kong
{
    width: 100%;
    height: 200px;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    line-height: 200px;
    background-color: brown;
}
.cart_content
{
    width: 100%;
}
.cart_list_div
{
    width: 100%;
    height: 120px;
    background-color: red;
    display: inline-flex;
    justify-content:space-between;
}
.list_div_cont_left
{
    width: 30%;
    height: 120px;
    background-color: blueviolet;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.list_div_cont_right
{
    width: 70%;
    height: 120px;
    background-color: pink
}
</style>