let a1 = '../image/01.png';
let a2 = '../image/02.png';
let a3 = '../image/03.png';
let a4 = '../image/04.png';
let a5 = '../image/05.png';
let b1 = '../image/1.png';
let b2 = '../image/2.png';
let b3 = '../image/3.png';
let b4 = '../image/4.png';
let b5 = '../image/5.png';
const tagMessage = {
    state:{
        tagData:[
            {img:a1,text:'首页',activeImg:b1,url:'home',flag:true},
            {img:a2,text:'分类',activeImg:b2,url:'classify',flag:false},
            {img:a3,text:'发现',activeImg:b3,url:'discover',flag:false},
            {img:a4,text:'购物车',activeImg:b4,url:'cart',flag:false},
            {img:a5,text:'我的',activeImg:b5,url:'mine',flag:false},
        ]
    },
    mutations: {
        change(state,index){
            state.tagData.forEach(element => {
                element.flag = false
            });
            state.tagData[index].flag = true
        }
    },
    actions: {
        
    }
}

export default tagMessage