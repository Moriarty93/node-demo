const http = require('http')
const hostname = '192.168.1.43'
const port = 9966


const assert = require('assert')


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain')

    
    try {
        {
            // assert.deepEqual() =>   == 
            // const obj1 = {
            //     a: {
            //         b: 1
            //     }
            // }
            // const obj2 = {
            //     a: {
            //         b: 2
            //     }
            // }
            // const obj3 = {
            //     a: {
            //         b: 1
            //     }
            // }
            // const obj4 = Object.create(obj1)
            // assert.deepEqual(obj1, obj1)
            // assert.deepEqual(obj1, obj3)
            // assert.deepEqual(obj1, obj2)
            // assert.deepEqual(obj1, obj4)
        }
        


        {
            // assert.deepStrictEqual() =>  ===
            assert.deepEqual({a: 1}, {a: '1'})
            assert.deepStrictEqual({a: 1}, {a: '1'})

        }
        res.end('Moriarty')
    } catch (err) {
        console.log(err.toString())
        res.write(err.toString())
        res.end()
    }



})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})