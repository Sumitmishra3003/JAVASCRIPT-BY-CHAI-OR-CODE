// basics syntex of filter
const mynum = [1,2,3,4,5,6,7,8,9,10];
const nwenum = mynum.filter( (num) => num > 4);  // but if we use  "{}" then we have to use return keyword
console.log(nwenum);



const books = [
    {
        title: 'book one', genre: 'history', publish: 1992,
        edition: 2019
    },
     {
        title: 'book two', genre: 'fiction', publish: 1997,
        edition: 2013
    },
     {
        title: 'book three', genre: 'history', publish: 1982,
        edition: 2004
    },
     {
        title: 'book four', genre: 'science', publish: 1996,
        edition: 2022
    },
     {
        title: 'book five', genre: 'science', publish: 1892,
        edition: 2000
    },
     {
        title: 'book six', genre: 'history', publish: 1991,
        edition: 2020
    }
];

// userbooks = books.filter( (bk) => {bk.publish >= 1991}); // this give empty array
console.log(userbook);
userbooks = books.filter( (bk) => {
     return bk.publish >= 1991 && bk.genre === 'history'
    }); // this give the correct output
console.log(userbook);

// filter is a call back function