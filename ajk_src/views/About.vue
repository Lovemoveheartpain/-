<template>
  <div class="about">
    <SearchBarTopVue @handle="search" />
    <component :text="value" :is="current" @moveNext="moveTo"></component>
  </div>
</template>
<script>
import SearchBarTopVue from "../components/SearchBarTop.vue";
import SearchHistoryVue from "../components/SearchHistory.vue";
import SearchingVue from "../components/Searching.vue";
export default {
  data() {
    return {
      current: SearchHistoryVue,
      value: "",
      history: []
    };
  },
  components: {
    SearchBarTopVue
  },
  methods: {
    search(value) {
      if (value.length !== 0) {
        this.current = SearchingVue;
      } else {
        this.current = SearchHistoryVue;
      }
      this.value = value;
    },
    moveTo(text) {
      this.history = JSON.parse(window.localStorage.getItem('historyList')||'[]')
      let index = this.history.findIndex(element => {
        return element === text;
      });
      if (index === -1) {
        if (this.history.length === 9) {
          this.history.pop();
        }
        this.history.unshift(text);
      } else {
        this.history.splice(index, 1);
        this.history.unshift(text);
      }
      window.console.log(this.history);
      window.localStorage.setItem("historyList", JSON.stringify(this.history));
    }
  }
};
</script>

<style scoped>
.about {
  width: 100%;
}
</style>