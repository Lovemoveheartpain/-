const url = require('url');

const queryString = require('querystring');

function urlFunction(req,callback){
    var urlObject = url.parse(req.url,true);
    var a = JSON.stringify(urlObject.query);
    console.log(a,5201314);
    if(req.method == 'GET'){
        var object = {
            pathname:urlObject.pathname,
            params:urlObject.query,
        }
        callback(object);
    }else if(req.method == 'POST'){
        var str = '';
        req.on('data',(steam)=>{
            str+=steam;
        })

        req.on('end',()=>{
            str = queryString.parse(str);
            var object = {
                pathname:urlObject.pathname,
                params:str,
            }
            callback(object);
        })
    }
}

exports.urlFunction = urlFunction;