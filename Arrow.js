const todos = [{
    title:'Python',
    isDone:false,
    print:function(){console.log(this.title)},
},{
    title:'Algorithm',
    isDone:false,
    print:function(){console.log(this.title)},
},{
    title:'Android',
    isDone:false,
    print:function(){console.log(this.title)},
},{
    title:'JavaScript',
    isDone:true,
    print:function(){console.log(this.title)},
},{
    title:'Kotlin',
    isDone:true,
    print:function(){console.log(this.title)},
},{
    title:'DBMS',
    isDone:true,
    print:function(){console.log(this.title)},
}]

const doneTodos = todos.filter((to)=>to.isDone==false)
doneTodos.forEach((todo)=>todo.print())