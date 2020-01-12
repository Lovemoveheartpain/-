<template>
    <div class="classify_big_div">
        <div class="classify_navigationBar_container">
        <div class="middle">
          <InputVue />
        </div>
        <div class="classify_navigationBar_right" >
            <div class="el-icon-chat-dot-round"></div>
        </div>
    </div>
        <div class="classify_container" >
            <ClassifyLeftVue/>
            <ClassifyRightVue/>
        </div>
    </div>
</template>

<script>
import ClassifyLeftVue from '../components/classify/ClassifyLeft.vue'
import ClassifyRightVue from '../components/classify/ClassifyRight.vue'
import InputVue from '../components/Input.vue'
    export default {
        components: {
            ClassifyLeftVue,
            ClassifyRightVue,
            InputVue
        },
        mounted() {
            let value = {
                params:{
                    params:{
                        name:'分类'
                    }
                }
            }
            this.$store.dispatch('getClassifyData',value)
        },
    }
</script>

<style scoped>
.classify_top
{
    width: 100%;
    height: 30px;
}
.classify_container
{
    width: 100%;
    height: 712px;
    display: inline-flex;
    /* background-color: deeppink */
}
.classify_big_div
{
    width: 100%;
}
.middle
{
    /* background-color: red; */
  width: 95%;
  display: inline-flex;
  justify-content:center;
}
.classify_navigationBar_container
{
    width: 100%;
    height: 40px;
    /* background-color: pink; */
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}

.classify_navigationBar_right
{
    width: 10%;
    height: 40px;
    /* background-color: yellow; */
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
}
</style>