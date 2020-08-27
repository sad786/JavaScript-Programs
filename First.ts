interface Person
{
   name:string,
   age:number,
   getInfo:()=>string,
};

var customer:Person =
{
   name:'Alien',
   age:101,
   getInfo: () => `Your name is ${name} and your age is ${this.age}`,
};