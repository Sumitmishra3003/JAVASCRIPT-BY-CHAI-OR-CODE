const myarr = [0,1,2,4,5] // in js we can include the element of different datatypes in array
// we can also include the array inside the array
console.log(myarr[1])

// methods of arrays
myarr.push(6) // use to insert the element form back
myarr.push(7)
console.log(myarr)
myarr.pop() // use to delete the element from back
console.log(myarr)
myarr.unshift(9) // use to insert the element from front 
console.log(myarr)
myarr.shift() // use to delete the element form front
console.log(myarr)
console.log(myarr.includes(10)) // gives true or false values
console.log(myarr.indexOf(4)) 
// if we tries to excess the index of element which
// is not present in the array the it gives -1

const newarr = myarr.join() // it convetes the array into string
console.log(typeof newarr)

// slice and splice

console.log("A ", myarr)
const myn1 = myarr.slice(1,3) //it gives the [starting index, ending index)
// slice does not manipulate the original array
console.log(myn1)

console.log("B ", myarr)
const myn2 = myarr.splice(1,3) // it gives the [starting index, ending index]
// splice mainupulate the original index
console.log("C " , myarr) // here we found the mainupulated array
console.log(myn2)


