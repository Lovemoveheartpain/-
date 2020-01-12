
// 存储
/* 
    统一存储数据类型
    {
        data:任意类型
    }
*/

export function setStoreObject(key,obj){
    window.localStorage.setItem(key,JSON.stringify(obj))
}


//读取
export function getStoreObject(key){
    return JSON.parse(window.localStorage.getItem(key))
}


//删除


export function removeStoreObject(key){
    window.localStorage.removeItem(key)
}
