<template>
    <div class="about_top_container">
      <div class="about_top_left" >
        <el-input
          size="mini"
          placeholder="请输入小区名或地址"
          clearable
          autofocus="true"
          v-model="value"
          prefix-icon="el-icon-search"
          suffix-icon
          @input="change"
          maxlength="16"
        ></el-input>
      </div>
      <div class="about_top_right" @click="cancel" >取消</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value:''
            }
        },
        methods: {
            change(){
                this.$emit('handle',this.value)
            },
            cancel(){
                this.value = '';
                this.$emit('handle',this.value)
            },
        },
    }
</script>

<style scoped>
.about_top_container
{
  width: 100%;
  height: 50px;
  background-color: deepskyblue;
  display: inline-flex;
  align-items: center;
  justify-content: space-around
}
.about_top_left
{
  width: 70%;
}
.about_top_right
{
  width: 20%;
  text-align: center;
}
</style>