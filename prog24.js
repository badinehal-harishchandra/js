const converToRs=(dollar)=> {
  if(typeof dollar==='number')
  {
    return dollar*64;
  }else{
    throw Error('Amount needs to be number')
  }
}
try{
const myRs=converToRs('5')
console.log(myRs)
}catch(error){
  console.log(error)
}
console.log("if computer crashes i will not run thee program")
