class A
{
    constructor(name)
    {
        this.name = name
    }
    getName()
    {
        return this.name
    }
}
class B{
    constructor(rollno)
    {
        this.rollno = rollno
    }

    getRollno()
    {
        return this.rollno
    }
}

class C extends A
{
    constructor(name,rollno,clas)
    {
        super(name)
        //super(rollno)
        this.clas = clas
    }

    getClass()
    {
        return this.clas
    }

}

const c = new C("Saddam Ahmed",121,"4th")

console.log(c.getName())
console.log(c.getRollno())
console.log(c.getClass())
