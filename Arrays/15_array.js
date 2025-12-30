const marvel_heros = ["thor","ironman", "spiderman"]
const dc_heros = ["superan", "flash", "batman"]

//marval_heros.push(dc_heros)//it return the array inside the array
// push function add the elemnt in the existing array
console.log(marvel_heros)

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)
// concat funstion gives the new array thets why we need to create the new 
// variable 'allheros' to hold the new array

// there is another way to merge the two or more then two array 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("sumit")) // to check that given input is array or not
console.log(Array.from("sumit")) // to convert the other datatype into array

let score1 = 200
let score2 = 300
let score3 = 400
console.log(Array.of(score1, score2, score3)) // converts other element into array
