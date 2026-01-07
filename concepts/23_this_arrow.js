const user = {
    username: "sumit",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`) // here we use this for current context
    }
}

user.welcomemessage()
user.username = "Sam" // the user name is changing because we use this keyword
user.welcomemessage()
console.log(this) // here it gives empty object because there is no current context at global level
// but in case of brouser, if there is no current contect at globel level then it gives window object


/*function chai(){
    let username = "chai"
    console.log(this.username)
}
chai()  // this give undefined because we can use this only in object not in function*/


// **************** arrow function*****************************

const addtwo = (num1, num2) => {
    return num1 + num2  // this is explicit return
}

//const addtwo = (num1, num2) => num1 + num2 // another way of writeing above code
  // this is implicit return
  
console.log(addtwo(2,3))