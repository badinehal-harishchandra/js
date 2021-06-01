let userEmail='6161@gmail'
let password='12343211'
let userChecker=function(myString){
  if((myString.includes("gmail")) && (myString.length>=6)){
  return true
}
  return false
}
let passChecker=function(pass){
  if((pass.includes(123)) && (pass.length>=8)){
  return true
}
return false
}
// console.log(length)
console.log(userChecker(userEmail))
console.log(passChecker(password))
