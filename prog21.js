/*const sayHello=function(name)
{
  return 'hey there , '+name+ "!"
}
console.log(sayHello("harish"))*/
console.log("arrow method")
const sayHello=(name)=>"hey there "+ name+ " !"
console.log(sayHello("harihchandra reddy"))
const todos=[{
  title:"buy bread",
  isDone:true,
},{
  title:"Go to  gym",
  isDone:false
},{
  title:"you tube videos",
  isDone:true,
}]
const thingsDone=todos.filter((todo)=>{
  return todo.isDone===true
})
console.log(thingsDone)
console.log("assignment")
const myTodos=[{
  title:"hair cut",
  isDone:false,
},{
  title:"to eat banana",
  isDone:true,
},{
  title:"to study 10 hrs daily",
  isDone:true,
},{
  title:"sleeping in day time",
  isDone:false
},{
  title:"games in daily",
  isDone:false
},{
  title:"reading books",
  isDone:true
}]
const notDone=myTodos.filter((todo) =>{
if(todo.isDone!=true)
return todo.title
})
console.log(notDone)
