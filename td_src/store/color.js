const colorMessage = {
    state: {
        color: window.localStorage.getItem('color')||'#FF9999'
    },
    mutations: {
        change(state,item){
            state.color = item;
            window.localStorage.setItem('color',item)
        }
    },
    actions: {},
    modules: {}
}

export default colorMessage