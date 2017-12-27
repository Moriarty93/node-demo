const fun2 = (res) => {
    console.log('我是外部函数2')
    res.write('我是外部函数2')
}

const fun3 = (res) => {
    console.log('我是外部函数3')
    res.write('我是外部函数3')
}
// module.exports = fun2
module.exports = {
    fun2,
    fun3
}