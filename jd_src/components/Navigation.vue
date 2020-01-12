<template>
    <div class="navigation_container">
        <div v-for="(item, index) in navIcon" :key="index" class="nav_div_cont" >
            <img :src="item.img" alt="" @click="handle(item.href,index)" class="img1">
            <img src="../../public/JD/heart-1 (1).png" alt="" ref="img" >
        </div>
    </div>
</template>
<script>
let a = "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png";
let b = "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png";
let c = "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png";
let d = "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png";
let e = "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png";
let array = [
    {img:a,href:'/'},
    {img:b,href:'/classify'},
    {img:c,href:'/surprise'},
    {img:d,href:'/cart'},
    {img:e,href:'/mine'},
]
    export default {
        data() {
            return {
                navIcon:array,
            }
        },
        mounted() {
            this.$refs.img[0].className = 'ab';
        },
        methods: {
            handle(href,index){
                this.$refs.img.forEach(element => {
                    element.className = ''
                });
                this.$refs.img[index].className = 'ab';
            switch (href) {
                case '/':
                if(this.$route.path !== '/'){
                    this.$router.push('/');
                }else{
                    alert('您还在当前页面哦!')
                }
                return;
                case '/classify':
                if(this.$route.path !== '/classify'){
                    this.$router.push('/classify');
                }else{
                    alert('您还在当前页面哦!')
                }
                return;
                case '/surprise':
                if(this.$route.path !== '/surprise'){
                    this.$router.push('/surprise');
                }else{
                    alert('您还在当前页面哦!')
                }
                return;
                case '/cart':
                if(this.$route.path !== '/cart'){
                    this.$router.push('/cart');
                }else{
                    alert('您还在当前页面哦!')
                }
                return;
                case '/mine':
                if(this.$route.path !== '/mine'){
                    this.$router.push('/mine');
                }else{
                    alert('您还在当前页面哦!')
                }
                return;
                default:
                break;
            }
        }
        }
    }
</script>

<style scoped>
.navigation_container
{
    width: 100%;
    height: 54px;
    background: white;
    position: fixed;
    bottom: 0px;
    display: inline-flex;
    justify-content: space-between;
    box-shadow: 1px 1px 10px lightgray;
}
.nav_div_cont
{
    width: 20%;
    position: relative;
}
.ab
{
    position: absolute;
    top: 10%;
    left: 10%;
}
.img1
{
    width: 100%;
}
</style>