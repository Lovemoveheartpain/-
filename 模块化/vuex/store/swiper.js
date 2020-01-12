import {swiper} from '../network/index';

const swiperMessage = {
    state:{
        swiperData:[]
    },
    mutations: {
        getSwiper(state,value){
            swiper(value).then((res)=>{
                console.log(res)
                state.swiperData = res.data;
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    actions: {
        getSwiperData({commit},value){
            commit('getSwiper',value)
        }
    }
}

export default swiperMessage