let mynums = [1,2,3,4,5,6,7,8,9,10];

let newnums = mynums.map((num) => num +10);
console.log(newnums);
// in call back function, if we use scope "{}", then we have to use return keyword.

// we can alse apply multiple functions at once

const newnum2 = mynums
.map((num) => num*10)
.map((num) => num+1)
.filter((num) => num >= 40)
console.log(newnum2)