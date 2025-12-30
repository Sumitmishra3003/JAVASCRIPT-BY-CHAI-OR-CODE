let mydate = new Date()

console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString()) // 12/30/25
console.log(mydate.toLocaleTimeString())
console.log(mydate.toTimeString())
console.log(mydate.toDateString()) // tue dec 30 2025

console.log(typeof mydate) // object

let mycreateddate = new Date(2023, 0, 23) //(year, month, date)
console.log(mycreateddate.toDateString()) // in js, month always starts with 0

let anotherdate = new Date("02-20-2024") // another way
console.log(anotherdate.toLocaleString())

let mytimestamp =Date.now()
console.log(mytimestamp) // gives the time in mili second from 1 jan 1970 to now
console.log(mycreateddate.getTime())

console.log(Math.floor(mytimestamp/1000)) // now it is converted into seconds