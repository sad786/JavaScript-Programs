const extract = key => {
    let index = process.argv.indexOf(key) +1

    return process.argv[index]
};

//console.log(`Hello Mr. ${extract('name')} You are ${extract('age')} ${process.argv.indexOf('name')}`)

if(module.name == 'First')
{
    console.log(`Hello Mr. ${extract('name')} You are ${extract('age')} ${process.argv.indexOf('name')}`)
}

const name = () => console.log("I am from First.js file")

const print = () => console.log(`Hello Mr. ${extract('--name')} Your are ${extract('--age')} years old!!!`)

const exit = () => process.exit(0)
module.exports = {
    name,
    print,
    exit
}





