import {setStoreObject,getStoreObject,removeStoreObject} from './localStorage';
import {config} from './localConfig'
//存储搜索历史

export let setSearchHis = (obj)=>{
    setStoreObject(config.search.SEARCH_HISTORY,obj)
}

//读取搜索历史

export let getSearchHis = ()=>{
    return getStoreObject(config.search.SEARCH_HISTORY)
}

export let removeSearchHis = ()=>{
    return removeStoreObject(config.search.SEARCH_HISTORY)
}