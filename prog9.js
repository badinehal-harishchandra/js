const num=['one','two','three','four','five','six']
// starting point operations on arrays
num[1]='something'
console.log(num)
 num.shift()
console.log(num.shift())
console.log(num)
num.unshift('something')
console.log(num)

// end part operations on array
num.pop()
console.log(num)
console.log("deleted element " + num.pop())
console.log(num)
num.push('six')
console.log(num)
// middle part of array operations
num.splice(2,3,'more interest')
console.log(num)
