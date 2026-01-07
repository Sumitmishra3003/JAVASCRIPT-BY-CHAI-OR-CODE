function one(){
    const username = "sumit"

    function two(){
        const website = "youtube"
        console.log(username)
    }
   // console.log(website) produce error
    two()
}
one()

//******************************************************************************************

console.log(addone(5)) // we can call the function before its declearation
function addone(num){
    return num + 1
}

// addtwo(5) // but we cannot call the function before if we store it into vatiable
const addtwo = function(num){  // in js we can store the function in variable
    return num + 2
}