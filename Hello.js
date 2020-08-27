const time = () =>{
    var date = new Date()
    var day = date.getDate()
    var month = date.getMonth()
    var year = date.getFullYear()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    if(minutes<10)
        minuts = "0"+minutes;
    if(seconds<10)
        seconds = "0"+seconds;
    
    console.log(hour+":"+minutes+":"+seconds)
}

setInterval(time,1000)