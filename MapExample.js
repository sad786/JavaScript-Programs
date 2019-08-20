let person = {
    identity:"I am a Person",
    salary:35000,
    name:"Big Person",
}
let human = {
    identity:"I am a Human",
    salary:undefined,
    name:"Big Human",
}

let map = new Map()
map.set('first',person)
map.set('second',human)
//map.clear()
//map.forEach((value,key,m)=>{console.log(` key :${key} value :${value.identity} `)})

console.log(map.has('firstt'))