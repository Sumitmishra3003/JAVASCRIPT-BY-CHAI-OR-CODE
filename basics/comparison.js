console.log(null > 0) // flase
console.log(null == 0) // false
console.log(null >= 0) // true

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

// "==" and comparison operators works differently
//"===" it checks the value as well as data types
console.log("2" == 2) // true
console.log("2" === 2) // false