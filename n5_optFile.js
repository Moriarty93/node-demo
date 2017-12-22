const fs = require('fs')
const readFileSync = (path) => {
    const data = fs.readFileSync(path, 'utf-8')
    console.log(data)
    console.log('同步方法执行完毕')
}
const readFile = (path, call) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(data.toString())
            call(data)
        }
    })
    console.log('异步方法执行完毕')
}
module.exports = {
    readFileSync,
    readFile
}