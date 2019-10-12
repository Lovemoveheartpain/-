const http = require('http');




function serverFunction(urlFunction,routeFunction,handle){
    http.createServer((req,res)=>{
        urlFunction(req,(data)=>{
            var pathname = data.pathname;
            var params = data.params;
            console.log(data,159357)
            routeFunction(pathname,params,handle, function(hui){
                res.writeHead(200,hui.writeHead);
                res.write(hui.message);
                res.end();
            })
        })
    }).listen(3005,'127.0.0.1',()=>{
        console.log('is running!!')
    })
}


exports.serverFunction = serverFunction;