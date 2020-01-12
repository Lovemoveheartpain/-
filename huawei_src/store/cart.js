const cartMessage = {
    state:{
        cartData:[]
    },
    mutations: {
        addToCart(state,value){
            let index = state.cartData.findIndex(item=>item.name === value.name);
            if(index === -1){
                state.cartData.push(value);
                value.count++;
            }else{
                value.count++;
            }
        },
        removeCart(state){
            state.cartData.forEach((index) => {
                state.cartData.splice(index,1)
            });
        },
        addCount(state,index){
            state.cartData[index].count++;
        },
        minusCount(state,index){
            state.cartData[index].count--;
            if(state.cartData[index].count<1){
                state.cartData[index].count = 0;
                state.cartData.splice(index,1)
            }
        }
    },
    actions: {
        
    }
}

export default cartMessage