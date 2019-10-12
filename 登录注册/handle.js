const fs = require('fs')


function public(pathname,params,hui){
    console.log('用户来处理文件');
    var resData = {}
    var postfix = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名
    fs.readFile(pathname.substr(1),(err,data)=>{
        if(!err){
            if(postfix == '.html'){
                resData.writeHead = {'Content-Type':'text/html'};
            }
             if(postfix == '.css'){
                resData.writeHead = {'Content-Type':'text/css'};
            }else if(postfix == '.js'){
                resData.writeHead = {'Content-Type':'application/javascript'};
            }else if(postfix == '.json'){
                resData.writeHead = {'Content-Type':'application/javascript'};
            }else if(postfix == '.jpg'){
                resData.writeHead = {'Content-Type':'image/jpg'};
            }
            resData.message = data;
            hui(resData);
        }
    })
}


function register(pathname,params,hui){
    console.log('用户来注册');
    console.log(params,55220)
    var resData = {};
    var str = JSON.stringify(params)
    console.log(str,45);
    fs.writeFile('main.json',str,(err)=>{
        if(!err){
            resData.writeHead = {'Content-Type':'application/json'};
            resData.message = str;
            hui(resData);
        }
    })
}


function login(pathname,params,hui){
    console.log('用户来登录');
    var resData = {};
    fs.readFileSync
    fs.readFile('main.json',(err,data)=>{
        if(!err){
            var dataObject = JSON.parse(data);
            console.log(data,111)
            console.log(dataObject,222); 
            console.log(JSON.stringify(dataObject),333)
            var name = dataObject.name;
            var age = dataObject.age;
            if(params.name == name&&params.age == age){
                var json = JSON.stringify(dataObject);
                resData.writeHead = {'Content-Type':'application/json'};
                resData.message = json;
                // resData.message = dataObject;
                hui(resData)
            }else{
                resData.writeHead = {'Content-Type':'application/json'};
                resData.message = '404';
                hui(resData);
            }
        }
    })
}



exports.public = public;
exports.register = register;
exports.login = login;