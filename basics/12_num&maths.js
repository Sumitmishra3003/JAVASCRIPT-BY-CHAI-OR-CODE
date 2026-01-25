const score = 400
//console.log(score)

const balance = new Number(100)
//console.log(balance)

//console.log(balance.toString().length)  // it converts the number into string
//console.log(balance.toFixed(3)) // gives the decimal value upto 3 digits

const othernumber = 123.654
//console.log(othernumber.toPrecision(4)) // it return string value

const hundred = 1000000000000
//console.log(hundred.toLocaleString('en-IN')) // gives the comaa sepration

//********************maths******************************** */

//console.log(Math)  // it gives an object
//console.log(Math.abs(-4))  // gives +ive value
//console.log(Math.round(4.7)) //gives the roundoff
console.log(Math.ceil(4.1))
console.log(Math.floor(2.9))
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))
console.log(Math.random()) // gives the randon values between 0 and 1 but 1 is excluded
console.log((Math.random())+1) // gives the value between 1 and 2 and 2 is excluded
console.log((Math.random()*10) + 1) // gives the value between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) // imp formula
