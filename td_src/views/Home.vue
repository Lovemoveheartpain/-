<template>
  <div class="home">
    <HeaderVue/>
    <InputVue/>
    <ListVue/>
  </div>
</template>

<script>
import HeaderVue from '../components/Header.vue'
import InputVue from '../components/Input.vue'
import ListVue from '../components/List.vue'

export default {
  name: 'home',
  components: {
    HeaderVue,
    InputVue,
    ListVue
  }
}
</script>
<style>
*
{
	padding: 0px;
	margin: 0px;
	list-style: none;
	text-decoration: none;
}
.home
{
  width: 100%;
}
</style>