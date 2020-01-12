import WebWork from '../webWork/index';
const classify = {
    state:{
        classifyList:[],
        details:{
            "name": "小米CC9",
            "image": "http://img4.imgtn.bdimg.com/it/u=2803442434,3248883862&fm=26&gp=0.jpg",
            "count": 0,
            "price":12
        },
    },
    mutations: {
        sendClassify(state,data){
            WebWork.send(data).then((res)=>{
                // window.console.log(res);
                state.classifyList = res;
                // window.console.log(state);
            }).catch((err)=>{
                window.console.log(err)
            })
        },
        details(state,value){
            state.details = value
        }
    },
    actions: {
        getClassify({commit},data){
            commit("sendClassify",data)
        }
    }
}


export default classify;