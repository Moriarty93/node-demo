const router = require('./n4_routerList.js')


let http = require('http')
const url = require('url')
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/html; charset=utf-8'
    })
    if(request.url !== '/favicon.ico') {
        const pathName = url.parse(request.url).pathname.replace(/^\//, '')
        console.log(pathName)
        router[pathName](request, response)
    }
}).listen(9966)
console.log('Server running at http://192.168.1.43:9966')
