let myTodos={
  day:'monday',
  meetings:0,
  meetingsDone:0
}
let addMeeting=function(toDo,meet=0){
  toDo.meetings=toDo.meetings+meet
  return toDo.meetings
}
let meetDone=function(toDo,meet=0){
  toDo.meetingsDone=toDo.meetingsDone+meet
  return toDo.meetingsDone
}
let daySummery=function(toDo){
   let meetLeft=toDo.meetings-toDo.meetingsDone
 return meetLeft
}
let reSet=function(toDo){
  return toDo.meetings=0
  return toDo.meetingsDone=0
}
console.log('the total meeting added',addMeeting(myTodos,50))
console.log('the total completed meetings',meetDone(myTodos,30))
console.log('remaing meeting ',daySummery(myTodos))
console.log(reSet(myTodos))
