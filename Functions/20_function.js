// shoping cart type example

function calculatecartprice(...num1){  // "..." this is called rest or spread operator
    return num1
}
console.log(calculatecartprice(200, 300, 400, 500)) // it return the array of the values because we use rest operator


// how to pass object in a function
const user = {
    username: "sumit",
    price: 199
}
function handleobject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)

// how to pass array in function
const myarray = [200, 300, 400, 500]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(myarray))
