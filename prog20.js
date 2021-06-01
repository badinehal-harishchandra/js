let myTodos=['Buy Bread','Go to gym','record youtube videos ']
// console.log(myTodos.indexOf('Buy Bread'))
const newTodos=[{
  title:'buy bread',
  isDone:false,
},
{
  title:'go to gym',
  isDone:false,
},
{
  title:'record youtube videos',
  isDone:true,
}]
const index=newTodos.findIndex(function(todo){
  console.log(todo)
  return todo.title ==='go to gym'

})
console.log(index)
console.log('method 1')
/*
const findTodo=function(myTodos,title){
  const index=myTodos.findIndex(function(todo,index){
    return todo.title.toLowerCase()===title.toLowerCase()
  })
  return myTodos[index]
}
let printMe=findTodo(newTodos,'go to gym')
console.log(printMe)*/
console.log('method 2')
const findTodo=function(myTodos,title){
  const titleReturned=myTodos.find(function(todo,index){
    return todo.title.toLowerCase()===title.toLowerCase()
  })
  return titleReturned
}
let printI=findTodo(newTodos,'Go to gym')
console.log(printI)
