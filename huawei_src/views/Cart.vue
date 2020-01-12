<template>
    <div class="cart_container">
        <h2 style="text-align: center">购物车</h2>
        <h3 style="text-align: center">总价：<span>￥{{sumPrice}}</span>总数量：{{sumCount}}</h3>
        <h3 style="text-align: center"><button @click="remove" >清空购物车</button></h3>
        <div class="scroll_container">
            <div class="cart_body">
                <div v-for="(item, index) in cart" :key="index" class="cart_list_wai">
                    <div class="cart_list_left">
                        <img :src="item.image" alt="" class="cart_left_img" >
                    </div>
                    <div class="cart_list_right">
                        <h3>商品名称：<span>{{item.name}}</span></h3>
                        <h3>商品价格：<span>￥{{item.price}}元</span></h3>
                        <h3>商品数量：
                            <button @click="minusCount(index)" >-</button>
                            <span>{{item.count}}</span>
                            <button @click="addCount(index)" >+</button>
                            件
                        </h3>
                    </div>
                </div>
                <div class="kong" v-show="cart.length>0?false:true" >
                    您的购物车空空如也!!!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Better from "better-scroll";
let myscroll;

    export default {
        data() {
            return {
                cart:[]
            }
        },
        methods: {
            remove(){
                this.$store.commit('removeCart')
            },
            addCount(index){
                this.$store.commit('addCount',index)
            },
            minusCount(index){
                this.$store.commit('minusCount',index)
            }
        },
        computed: {
            sumPrice(){
                let sum = 0;
                this.cart.forEach(element => {
                    sum += element.count*element.price
                });
                return sum
            },
            sumCount(){
                let sum = 0;
                this.cart.forEach(element => {
                    sum += element.count
                });
                return sum
            }
        },
        mounted() {
            this.cart = this.$store.state.cart.cartData;
            window.console.log(this.cart)
            myscroll = new Better('.scroll_container',{
                scrollY:true,
                click:true
            })
        },
        updated() {
            myscroll.refresh()
        },
    }
</script>

<style scoped>
.cart_container
{
    width: 100%;
}
.cart_body
{
    width: 100%;
}
.kong
{
    width: 100%;
    height: 220px;
    line-height: 220px;
    background-color: brown;
    text-align: center;
    font-weight: 900;
    font-size: 30px;
}
.scroll_container
{
    width: 100%;
    height: 670px;
    background-color: pink;
    overflow: hidden;
}
.cart_left_img
{
    width: 80%;
    height: 50%;
}
.cart_list_wai
{
    width: 100%;
    height: 180px;
    background-color: darkturquoise;
    display: inline-flex;
}
.cart_list_left
{
    width: 30%;
    height: 180px;
    /* background-color: cadetblue; */
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.cart_list_right
{
    width: 70%;
    height: 180px;
    background-color: red;
}
.cart_list_right>h3
{
    margin-top: 10px;
    margin-bottom: 5px;
}
</style>