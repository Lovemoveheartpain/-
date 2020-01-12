import {hot} from '../network/index';

const swiperMessage = {
    state:{
        hotData:[]
    },
    mutations: {
        getHot(state,value){
            hot(value).then((res)=>{
                // console.log(res)
                state.hotData = res.data;
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    actions: {
        getHotData({commit},value){
            commit('getHot',value)
        }
    }
}

export default swiperMessage
