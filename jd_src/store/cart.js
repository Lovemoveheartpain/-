export default {
    state:{
        // shoppingCar:[{
        //     "name": "小米CC9",
        //     "image": "source/小图片/图片/手机/1.png",
        //     "count": 0,
        //     "price":12
        // }]
        shoppingCar:[]
    },
    mutations: {
        add(state,value){
            let index = state.shoppingCar.findIndex(item=>item.name === value.name);
            if(index === -1){
                state.shoppingCar.push(value)
                value.count++;
            }else{
                value.count++;
            }
            console.log(state)
        },
        remove(state){
            state.shoppingCar = [];
        },
        jian(state,index){
            state.shoppingCar[index].count--;
            if(state.shoppingCar[index].count < 0){
                state.shoppingCar[index].count = 0
            }
        },
        jia(state,index){
            state.shoppingCar[index].count++;
        },
    }
}








