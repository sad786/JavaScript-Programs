class Prop(name:String,age:Int)
{
    public var Name:String=""
    set(v)
    {
        Name = v

    }
    public var Age:Int=0
    set(v)
    {
        Age = v    
    }
    init
    {
        Name = name
        Age =  age
    }
}

fun main(args:Array<String>)
{
    val p1 = Prop("Saddam",20)
    println("Name is ${p1.Name} and age is ${p1.Age}")
}