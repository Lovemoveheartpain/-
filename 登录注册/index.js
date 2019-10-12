const server = require('./server');


const url = require('./url');

const route = require('./route')


const setHandle = require('./handle');


var handle = {
    '/public': setHandle.public,
    '/register': setHandle.register,
    '/login': setHandle.login,
}




server.serverFunction(url.urlFunction,route.routeFunction,handle)