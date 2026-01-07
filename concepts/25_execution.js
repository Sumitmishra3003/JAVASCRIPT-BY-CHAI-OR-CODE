// javascript execution context : how fies runes in JS
// the file runes in js in 2 phase (memory creation phase and execution phase)
// 1 : global execution context, tefered by "this" keyword 
// 2 : function execution context
// the value of this in browser is window
// javascript is single threaded


// execution of file in javascript
// we can understand this concept by the code given below
let val1 = 10;
let val2 = 5
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(10,5)

// step 1 : global execution (this)

//step 2 : memory phase
// =>val1 - undefined
// =>val2 - undefined
// =>addnum - defination
// =>result1 - undefined
// =>reslt2 - undefined

// step 3 : execution phase
// val1 <- 10
// val2 <- 2
// result1 <- 15
// result2 <-
// addnum - it is a function so it made a now execution context(new variable enviroment + execution thread)
// now, for addnum, there is again a memory phase and execution phase

//memory phase(addnum)
// val1 - undefined
// val2 - unefined
// total - undefined

// execution phase(addnum)
//num1 => 10
//num2 => 5
//total => 15
//total returns in the global execution context

// the functional execution context is alse delete alter execution



