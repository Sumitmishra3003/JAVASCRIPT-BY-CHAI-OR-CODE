// immedeatly invoked function expression (IIFE)
//there is a lot of problem by global variable inside the function se we use 
// IIFE to prevent the global scope problem

(function chai(){  // named IIFE
    console.log(`DB connected`) // we bound the function inside the parenthesis
})(); // here using semicolon is necessary to end the IIFE.

((name) =>{  // unnamed IIFE
    console.log(`db connected to ${name}`) // this is how we pass the argument in IIFE
})(`sumit`)