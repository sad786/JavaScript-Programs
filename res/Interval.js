console.log("This program illustrates the usage of setInterval() and setTimeout() methods")

let inter = 500
let time = 3000

const print = () =>{
    console.log(`Waiting... ${time/1000} seconds`)
    time += inter
}
const finish = () =>{
    clearInterval(interval)
}

var interval = setInterval(print,inter)


setTimeout(finish,time)