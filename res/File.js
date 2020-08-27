var fs = require("fs")

fs.readdir(".",(err,files) =>{
    if(err)
    {
        console.log(err)
        throw err
    }
    console.log(files)
})
