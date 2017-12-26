
const readImg = require('./n5_optFile.js')
let http = require('http')
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'image/jpeg'
    })
    if(request.url !== '/favicon.ico') {
        readImg.readImg('./img.png', (data, type) => {
            response.write(data, type)
            response.end()
        })
    }
}).listen(9966)
console.log('Server running at http://localhost:9966')