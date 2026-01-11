//for of loop
const arr = [1,2,3,4,5];
for( const num of arr){
    console.log(num);
}
const greeting = "hello world";
for (const greet of greeting) {
    console.log(`each char is ${greet}`)
}



// Maps // it is a object that store unique element
const map = new Map();
map.set('IN', "india");
map.set('USA', "united states of america");
map.set('FR', "france");
console.log(map);
// for of loop on maps
for (const key of map) { // it prints the array of both key and value
    console.log(key)
}
for (const [key] of map) {  // we can print only the key by using [], this is callde the destructure the array
    console.log(key)
}



// for of loop on objects
/*const myobject = {
    'game1' : 'NFS',
   'game2' : 'spiderman'
}
for (const [key, value] of myobject) {
    console.log(key, ':-', value);
}*/   // we cannot iterate the object by this mathod
// for of loop does ot work on objects
// so we use for in loop on object



// for in loop
const myobject = {
    js : 'javascript',
    cpp : 'c++', 
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in myobject) { // it print only key
   console.log(key)  
}
for (const key in myobject) { // it print only value
   console.log(myobject[key])  
}
for (const key in myobject) { // it print only value
   console.log(`key is ${key} and value is ${myobject[key]}`) // it print both key and value 
}


// for in lop on array
const heros = ['spidy', 'hulk', 'ironman', 'sumit']
for(const key in heros){
    console.log(key);  // for in loop prints only key value but for of loop print actual values
}
for(const key in heros){
    console.log((heros[key])) // this is how we print actual values in array using for in loop
}

// we cannot apply for in loop in maps




// direct function on arrays
const coding = ['js', 'cpp', 'python', 'ruby'];
coding.forEach(function (item, index, arr) {// we can print item, index and array alone
   console.log(item, index, arr); 
})  // this is a call back function so it does not have a name

// we can give the refrence of another function inside the array function
function printme(item){
    console.log(item)
}
coding.forEach(printme)


// object inside Array
const mycoding = [
    {
        languagename: 'javascript',
        languagefile : 'js'
    },
    {
        languagename: 'java',
        languagefile : 'java'
    },
    {
        languagename: 'python',
        languagefile : 'py'
    }
]

mycoding.forEach( function (item) {
    console.log(item.languagefile)  // we have object inside array and this is how we axcess the elements of object
})