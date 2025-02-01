// map method is also callback method which is used to assign something to given array
// it give values in form of assingment like i assign item = item * 2 so it will give the values of item which multiply by 2.

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//using map method
const result = value.map((item) => item * 2); // also called as callback method

console.log(result);

//using forEach method
let char = []
value.forEach((item)=>{
    let tap =  item * 2;
    return char.push(tap);
})
console.log(char);

//methods chaining

const avi = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const leme = avi
             .map((item)=>(item * 2))
             .map((item)=> item + 10)
             .filter((item)=> item > 50)

console.log(leme)