const read = require('./n5_optFile.js')
const login = (req, res) => {
    read.readFile('./n5_login.html', (data) => {
        res.write(data)
        res.end()
        console.log('登入ok')
    })
    console.log('我是login方法')
}
const register = (req, res) => {
    console.log('我是register方法')
    read.readFile('./n5_register.html', (data) => {
        res.write(data)
        res.end()
        console.log('注册ok')
    })
}
const showImg = (req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'image/jpeg'
    })
    read.readImg('./img.png', (data, type) => {
            res.write(data, type)
            res.end()
    })
}
module.exports = {
    login,
    register,
    showImg
}