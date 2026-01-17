let mynums = [1,2,3];
const total = mynums.reduce(function(acc, currval){
    console.log(`accumulator : ${acc} and currval : ${currval}`);
    return acc + currval;
}, 0) // here 0 is the initial value
console.log(total);
// accumulator takes it first value according to initial value


let shopingcart = [
    {
        itemname: 'js course',
        price: 2999
    },
    {
        itemname: 'py course',
        price: 999
    },
    {
        itemname: 'mobile dev course',
        price: 5999
    },
    {
        itemname: 'data science course',
        price: 12999
    }
]
 let pricetopay = shopingcart.reduce((acc,item) => acc + item.price, 0);
 console.log(pricetopay)