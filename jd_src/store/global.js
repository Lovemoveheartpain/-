import WebWork from '../webWork/index'

const global = {
  state: {
    swiper:[],
    isSwiper:true,
  },
  mutations: {
    getUrl(state,data){
        window.console.log(data)
        WebWork.send(data).then((res)=>{
            window.console.log(res);
            state.swiper = res.swiper;
        }).catch((err)=>{
            window.console.log(err)
        })
    }
  },
  actions: {
    sendGet(context,data){
      context.commit('getUrl',data)
    }
  },
  modules: {

  }
}

export default global


let object = ['a','b','c',4,5,6,7]

for (const iterator of object) {
  console.log(iterator);
}