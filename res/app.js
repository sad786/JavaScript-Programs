var ex = require('express')

var server = ex()


server.use(ex.static(__dirname))

var port = server.listen(4040,() =>{
    console.log('sever is listening ')
})