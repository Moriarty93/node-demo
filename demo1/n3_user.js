class User {
    constructor (id, name, age) {
        this.id = id
        this.name = name
        this.age = age
    }
    enter () {
        const str = `欢迎ID为${this.id}的${this.age}岁的${this.name}`
        console.log(str)
    }
}
module.exports = User