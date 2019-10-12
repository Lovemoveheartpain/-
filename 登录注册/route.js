function routeFunction(pathname,params,handle,hui){
    var arr = pathname.split('/');
    var str = '/'+arr[1];

    if(typeof handle[str] == 'function'){
        var handleFunction = handle[str];
        handleFunction(pathname,params,hui);
    }else{
        console.log('我不知道你要做什么操作')
    }
}


exports.routeFunction = routeFunction;