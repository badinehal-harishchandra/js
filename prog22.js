const phone=
{
  price:15000,
  weight:25,
//  myDes:()=>{} arrow symbol we are not use like in this program beause we use this keyword
  myDes:function(){
    return "this samsung moblie price is "+this.price
  }
}
console.log(phone.myDes())
// this is only for redux people
const func=()=>({key:'value'})
