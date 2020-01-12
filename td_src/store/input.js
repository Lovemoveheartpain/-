const inputMessage = {
    state: {
        input: JSON.parse(window.localStorage.getItem('inputArray') || '[]')
    },
    mutations: {
        add(state, item) {
            state.input.push(item);
            window.localStorage.setItem('inputArray', JSON.stringify(state.input));
            window.console.log(JSON.parse(window.localStorage.getItem('inputArray') || '[]'))
        },
        toBottom(state,item) {
            state.input.forEach(element => {
                if(element.value === item.value){
                    element.status = 'FINISHED'
                    element.flag = true;
                }
            });
            window.localStorage.setItem('inputArray', JSON.stringify(state.input));
        },
        toTop(state,item) {
            state.input.forEach(element => {
                if(element.value === item.value){
                    element.status = 'PENDING'
                    element.flag = false;
                }
            });
            window.localStorage.setItem('inputArray', JSON.stringify(state.input));
        },
        toRemove(state,item) {
            state.input.forEach(element => {
                if(element.value === item.value){
                    element.status = 'REMOVE'
                    element.flag = false;
                }
            });
            window.localStorage.setItem('inputArray', JSON.stringify(state.input));
        },
        xiu(state) {
            window.localStorage.setItem('inputArray', JSON.stringify(state.input));
        },
    },
    actions: {},
    modules: {}
}

export default inputMessage