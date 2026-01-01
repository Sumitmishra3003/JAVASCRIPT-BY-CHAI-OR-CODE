// when we initialized the object by cnstructor then it made singolton object
// when we initialized the object by literals then it have multiple instences

// here we talk about object literals

const mysym = Symbol("key")  // decleration of symbol

const jsuser = {
    name: "sumit",  // by default, key is string
    "full name": "Sumit Mishra",
    [mysym]: "mykey1", // this is how we use symbol as a key
    age: 22,
    location: "jaipur",
    email: "sumit@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"]
}
//console.log(jsuser)

console.log(jsuser.email);  // but this is not the appropriate way of access
console.log(jsuser["email"])  // this theappropriate way
console.log(jsuser["full name"])  // we cannot access this by using "." mathod
console.log(jsuser[mysym])  // this is symbol
console.log(typeof mysym)

jsuser.email = "mishra@gmsil.com" // thid id how we csnge the value of object
console.log(jsuser.email)
//Object.freeze(jsuser)
jsuser.age = 23  // this change will not implement
console.log(jsuser.age)

jsuser.greeting = function(){
    console.log("hello JS user")
}

jsuser.greetingtwo = function(){
    console.log(`hello JS user, ${this.name}`) // this os how we can give the refrence of any variable to the function
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())

// maximum tim we use "." mathod for accessing the object, we use "[]" only when it is needed


