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
const writeFileSync = (path, data, call) => {
    fs.writeFileSync(path, data)
    console.log(data)
    console.log('同步写文件成功！')
    call(data)
}
const writeFile = (path, data, call) => {
    fs.writeFile(path, data, (err) => {
        if(err) {
            throw err
        } else {
            console.log('异步写文件成功')
            call(data)
        }
    })
}
const readImg = (path, call) => {
    fs.readFile(path, 'binary', (err, filedata) => {
        if(err) {
            console.log(err)
            return
        } else {
            console.log('读取图片成功')
            call(filedata, 'binary')
        }
    })
}
module.exports = {
    readFileSync,
    readFile,
    writeFileSync,
    writeFile,
    readImg
}