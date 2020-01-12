import Axios from "axios";
import {config} from "./networkConfig";
Axios.defaults.baseURL = 'http://localhost:8080';
Axios.defaults.timeout = 50000;
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

function get(url,params){
    return new Promise((resolve,reject)=>{
        Axios.get(url,params).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}
function post(url,params){
    return new Promise((resolve,reject)=>{
        Axios.post(url,params).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}


export function dispatchMethod(method,url,params){
    switch (method) {
        case config.method.GET:
        return get(url,params)
        case config.method.POST:
        return post(url,params)
        default:
        break;
    }
}


