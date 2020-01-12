import Vue from 'vue'
import Vuex from 'vuex';
import swiper from './swiper'
import hot from './hot'
import tag from './tag'
import classify from './classify'
import details from './details';
import cart from './cart';
import update from './update';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    swiper,
    hot,
    tag,
    classify,
    details,
    cart,
    update
  }
})
