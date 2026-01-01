// object using constructor - singolton object

const tinderuser = new Object()

tinderuser.id = "abc123"
tinderuser.name = "sumit"
tinderuser.isloggedin = false
//console.log(tinderuser)




/*const regularuser = {  // object inside object ( nested object )
    email: "sumeone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sumit",
            lastname: "Mishra"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname) // accessing of nested object*/




/*const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign({}, obj1, obj2) // this is how we merge more then one object
console.log(obj3)

const obj4 = {...obj1,...obj2} // another way of merge the object
console.log(obj4) // most of the time we use this mathod*/

// when data comes from the database the it is in the form of array of object
/*const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "def@fmail.com"
    }
]
users[1].email
users[2].email*/

console.log(Object.keys(tinderuser)) // the datatype of keys of array
console.log(Object.values(tinderuser))
// this is how we can access the keys and id saperately
console.log(Object.entries(tinderuser)) // array of each entry

console.log(tinderuser.hasOwnProperty(isloggedin)) // boolean result
// use to check that given poperty is present or not in the object
