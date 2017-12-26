
const write = require('./n5_optFile.js')

let http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/html; charset=utf-8'
    })
    if(request.url !== '/favicon.ico') {
        write.writeFile('./n6_yibu.html', 'moriarty', (data) => {
            response.write(data)
            response.end()
        })
        write.writeFileSync('./n6_tongbu.html', '同步写文件内容', (data) => {
            response.write(data)
        })
    }
}).listen(9966)
console.log('Server running at http://localhost:9966')