const User = require('./n3_user.js')
class ClassUser extends User {
    constructor (id, name, age, color, res) {
        super(id, name, age)
        this.color = color
        this.res = res
    }
    enter1 () {
        const str = this.color
        console.log(str)
        this.res.write(str)
    }
}
module.exports = ClassUser