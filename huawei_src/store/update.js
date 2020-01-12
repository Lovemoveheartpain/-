import {update} from '../network/index';
import config from './config';

const allMessage = {
    state:{
        allData:[],
        num:config.message.num,
        page:config.message.page
    },
    mutations: {
        getAll(state,value){
            update(value).then((res)=>{
                console.log(res);
                let array = [];
                for (let index = 0; index < config.message.num; index++) {
                    let element = res.data.data[index];
                    array.push(element)
                }
                state.allData = array;
                value.callback()
            }).catch((err)=>{
                console.log(err)
            })
        },
        getRefurbish(state,value){
            update(value).then((res)=>{
                let resLength = res.data.data.length;//数据总长度
                let remainder = (resLength-state.num)%state.page;//余数
                if(resLength>=(state.num+state.page)){
                    for (let index = state.num; index < state.num+state.page; index++) {
                        let element = res.data.data[index];
                        state.allData.push(element)
                    }
                    state.num+=state.page
                    value.callback();
                }else if(remainder!==0 && resLength-state.num == remainder){
                    window.console.log('有余数')
                    for (let index = state.num; index < state.num + remainder;index++) {
                        let element = res.data.data[index];
                        state.allData.push(element)
                    }
                    state.num+=state.page
                    value.callback();
                }else{
                    value.callback('已经到底了!');
                    return
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    actions: {
        getAllData({commit},value){
            window.console.log(value);
            setTimeout(() => {
                commit('getAll',value)
            }, 1000);
        },
        getRefurbishData({commit},value){
            window.console.log(value);
            setTimeout(() => {
                commit('getRefurbish',value)
            }, 1000);
        }
    }
}

export default allMessage