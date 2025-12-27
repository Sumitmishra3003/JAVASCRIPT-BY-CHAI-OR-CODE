// stack nad heap
// stack - premetive 
// heap - non premetive 

let myyoutubename = "hiteshchaudhary"  // premetive type
let anothername = myyoutubename
anothername = "chaiorcod"

console.log(myyoutubename)  // hiteshchaudhary
console.log(anothername)  // chaiorcode


let userone = {   // non premetive data type
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone
usertwo.email = "hitesh@gmail.com"

console.log(userone.email)
console.log(usertwo.email)