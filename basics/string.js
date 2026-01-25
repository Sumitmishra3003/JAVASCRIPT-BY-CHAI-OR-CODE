const name = "Sumit"
const count = 10

//console.log(name + count + " value")  // concatination of string
// but the above syntex is outdated so we use modern syntex

//console.log(`hello my name is ${name} and my count is ${count}`)
//we shuold use back tick(``) instead of double quots

const gamename = new String('sumit-sm') // another way of declear the string

// every charactor of string has its own key value
console.log(gamename[0]) // key value of s is 0

// there are many functions of string, some are given below
console.log(gamename.length)
console.log(gamename.toUpperCase()) 
console.log(gamename.charAt(3))
console.log(gamename.indexOf('t'))

const newstring = gamename.substring(0,4) // (first char, last char)
// but last character is not included
console.log(newstring)  // sumi

const anotherstring = gamename.slice(1,5)// we can also use -ive value in slice
console.log(anotherstring)

const cast = "   mishra   "
console.log(cast)
console.log(cast.trim()) // remove white spaces

const url = "https://sumit.com/sumit%20mishra"
console.log(url.replace('%20', '-')) // (remove, replace)

console.log(url.includes('sumit')) // gives true or false