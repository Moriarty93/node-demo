const read = require('./n5_optFile.js')


let http = require('http')
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/html; charset=utf-8'
    })
    if(request.url !== '/favicon.ico') {
        read.readFile('./n5_register.html', (data) => {
            response.write(data)
            response.end('ok')
        })
        read.readFileSync('./n5_login.html')
        // response.end('ok')
        console.log('主程序执行完毕')
    }
}).listen(9966)
console.log('Server running at http://192.168.1.43:9966')


