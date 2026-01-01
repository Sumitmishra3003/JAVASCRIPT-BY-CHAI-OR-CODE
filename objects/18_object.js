const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "Hitesh"
}

const {courseinstructor: instructor} = course  // we can rename it
//"{}" this means we de structure the object
console.log(instructor)



/* {          // this is "JSON" here keys and values both are in double quots
"name": "Hitesh",
"coursename": "js in hindi",
"price": "free"
}*/