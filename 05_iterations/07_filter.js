// filter is a method which is removes the flaws of for each loop like it can't store the value of array but filter do.
// it is also callback function which is used to filter the array and return the new array.
// it give values in boolean form like true or false.

const arr = [1, 2, 3, 4, 5];
const even = arr.filter((val)=>(val>3)) // implicit return
console.log(even) // here we use parenthesis so there is no need to use return keyword

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even2 = arr2.filter((val)=>{ // when you use curly braces then you have to use return keyword
    return val % 2 === 0; // explicit return
})
console.log(even2) //An explicit return is when you explicitly write the word return in the function. An implicit return is when you don't write the word return in the function.

const books = [
    { author: 'Author 1', genre: 'Fiction', publishDate: '2020-01-01', editionDate: '2021-01-01' },
    { author: 'Author 2', genre: 'Non-Fiction', publishDate: '2019-05-15', editionDate: '2020-05-15' },
    { author: 'Author 3', genre: 'Science Fiction', publishDate: '2018-07-20', editionDate: '2019-07-20' },
    { author: 'Author 4', genre: 'Fantasy', publishDate: '2021-03-10', editionDate: '2022-03-10' },
    { author: 'Author 5', genre: 'Mystery', publishDate: '2017-11-25', editionDate: '2018-11-25' }
];

const fictionBooks = books.filter((book) =>(book.genre === 'Fiction' && book.publishDate > '2019-01-01'));
console.log(fictionBooks);