fs = require("fs")

const read  = (err,data) => console.log(data)

data = fs.readFile("C://Users/Dell/Desktop/file.txt",read)

console.log(data)
