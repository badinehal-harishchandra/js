let isVerify=false
let isLogged=true
let hasPayment=true
let isGuest=true
if(!isVerify && isLogged && hasPayment)
{
  console.log('Greeting to user ')
  console.log("grand access to piad course")
}
else if(isVerify || isGuest)
{
  console.log("allows free previews")
}
else{
  console.log("contact the ")
}
