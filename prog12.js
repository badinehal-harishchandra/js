const days=['mon','tue','web','thu','fri','sat']
/*let array=function(a)
{
  for(let i=0;i<a.length;i++)
  {
    console.log(a)
  }
}
array(days)*/
days.forEach(function(a,index)
{
  console.log(a + index)
})
