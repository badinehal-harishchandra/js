const hari={
  name:"i am hari",
  age:24,
  isActive:true
}
const raga={
  name:"i am raga",
  age:25,
  isActive:false
}
const anil={
  name:"i am anil",
  age:30,
  isActive:true
}
const users=new Map()
 console.log(typeof users)
users.set("a",hari)
users.set("b",raga)
users.set("c",anil)
console.log(users)
console.log(users.size)
console.log(users.get("a"))
console.log(users.keys())
console.log(users.values())
for (var value of users.values()) {
  console.log(value)
}
  for(var [key,value] of users.entries()){
      console.log(key + "  " + value.name)
}
users.forEach((value,key) => {
  console.log(key + "  = " + value.age)
});
var arrOfArr=[['one','1'],['two','2'],['three','3']]
var newMap=new Map(arrOfArr)
console.log(newMap)
