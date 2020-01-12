// 负责导出具体业务
import {dispatchMethod} from "./networkClient";
import {config} from "./networkConfig";

export let login = (value)=>{
    return dispatchMethod (config.method.GET,config.path.login,value.params)
}

export let register = (value)=>{
    return dispatchMethod(config.method.POST,config.path.register,value.params)
}

export let swiper = (value)=>{
    return dispatchMethod(config.method.GET,config.path.swiper,value.params)
}
export let hot = (value)=>{
    return dispatchMethod(config.method.GET,config.path.hot,value.params)
}
export let classify = (value)=>{
    return dispatchMethod(config.method.GET,config.path.classify,value.params)
}
export let fen = (value)=>{
    return dispatchMethod(config.method.GET,config.path.fen,value.params)
}
export let update = (value)=>{
    return dispatchMethod(config.method.GET,config.path.update,value.params)
}
