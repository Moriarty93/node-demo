const User = require('./n3_user.js')
const Class = require('./n3_class.js')

let http = require('http')
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/html; charset=utf-8'
    })
    if(request.url !== '/favicon.ico') {
        let user = new User(66, 'Moriarty', 25)
        user.enter()
        
        let _class = new Class(99, 'NiKo', 20, 'blue', response)
        _class.enter()
        _class.enter1()
        response.end()
    }
}).listen(9966)
console.log('Server running at http://192.168.1.43:9966')
