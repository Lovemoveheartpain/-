import {classify} from '../network/index';

const classifyMessage = {
    state:{
        classifyData:[]
    },
    mutations: {
        getClassify(state,value){
            classify(value).then((res)=>{
                state.classifyData = res.data;
                window.console.log(state.classifyData)
            }).catch((err)=>{
                window.console.log(err)
            })
        }
    },
    actions: {
        getClassifyData({commit},value){
            commit('getClassify',value)
        }
    }
}

export default classifyMessage
