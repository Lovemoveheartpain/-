import Vue from 'vue'
import Vuex from 'vuex'
import global from './global';
import classify from './classify';
import cart from './cart';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    global,
    classify,
    cart
  }
})
