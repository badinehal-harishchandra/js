let myTodos={
  day:'monday',
  meetings:0,
  meetingsDone:0,
  addMeetings:function(n){
      this.meetings=this.meetings+n
  },
  meetDone:function(a){
    this.meetingsDone=this.meetinsDone+a
  },
  summery:function(){
    let meetLeft=this.meetings-this.meetingsDone
    return meetLeft
  }
}
let myTodosTwo={
  day:'tueday',
  date:'16.5.2020',
  learn:function(){
    console.log(this)
  }
}
myTodos.day
myTodos.addMeetings(10)
myTodos.meetDone(7)
console.log(myTodos.summery())
// myTodosTwo.learn()
// assignments
