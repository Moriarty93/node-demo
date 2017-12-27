const otherFun = require('./n2_fun2.js')

let http = require('http')
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/html; charset=utf-8'
    })
    if(request.url !== '/favicon.ico') {
        fun1(response)
        // console.log(fun2)
        // fun2(response)
        console.log(otherFun)
        otherFun.fun2(response)
        otherFun.fun3(response)
        response.end()
    }
}).listen(9966)
console.log('Server running at http://192.168.1.43:9966')

const fun1 = (res) => {
    console.log('我是内嵌函数1')
    res.write('我是内嵌函数1')
}






