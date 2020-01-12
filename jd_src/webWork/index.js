// import Vue from 'vue';
import axios from 'axios';
axios.request({
  baseURL:'http://localhost:8080',
  timeout:1000,
})
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config.params)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  function classify(obj){
    if(obj.method === 'GET'){
      // console.log(obj);
      return new Promise((resolve, reject)=>{
        axios.get(obj.url,obj.params).then((res)=>{
          // console.log(res);
          resolve(res.data)
        }).catch((err)=>{
            // console.log(err);
            reject(err)
        })
      })
        
    }else if(obj.method === 'POST'){
      return new Promise((resolve, reject)=>{
        axios.post(obj.url,obj.params).then((res)=>{
          // console.log(res);
          resolve(res.data)
        }).catch((err)=>{
            // console.log(err);
            reject(err)
        })
      })
    }
}

class WebWork{
    static send(obj){
      return classify(obj)
    }
}

export default WebWork