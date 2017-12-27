// console.log('Moriarty')
// console.log('hello node')

let http = require('http')
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    if(request.url !== '/favicon.ico') {
        console.log('访问')
        response.write('Moriarty')
        response.end('end')
    } else {
        console.log(request.url)
        return 
    }
}).listen(9966)
console.log('9966')

    