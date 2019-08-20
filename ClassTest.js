t = require("Fruit.ts")

class Apple extends Fruit
{
    getTaste()
    {
        return "Sweet"
    }
}

const c = new Apple()
console.log(c.getTaste())