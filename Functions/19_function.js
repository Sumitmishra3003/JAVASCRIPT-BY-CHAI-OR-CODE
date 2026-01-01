function saymyname(){  // syntex of function
console.log("s")
console.log("u")
console.log("m")
console.log("i")
console.log("t")
}

saymyname() // this is the refrence of function (execution)

function addtwonumbers( num1, num2){
    console.log(num1 + num2)
}
addtwonumbers(2,5)
addtwonumbers(3, "a")
addtwonumbers(3, null)
addtwonumbers("3", 4)
addtwonumbers(3, "4")

// here num1 and num1 are parameters and
// all the values we use like (2,5), (3, "a") etc are the arguments

const result = addtwonumbers(4,1)
console.log("Result :", result) // it gives undefined result
// because the return value is different

function addition(number1, number2){
    let ans = number1 + number2
    return ans
    // return number2 + number2 // this is another way of return the value
    console.log("sumit mishra") // after returning the value, function does not perform any operation
    //hence the console log will not print
}
const final = addition(2,8)
console.log(final)


function logginmessage(username){
    return `${username} just logged in`
}
console.log(logginmessage("sumit mishra"))
console.log(logginmessage()) // if we does not pass any value thei it gives undefined result