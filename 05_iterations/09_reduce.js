const avi = [10, 20, 30];
// reduce method is also callback method which is used to reduce the array into single value. like [1, 2, 3, 4, 5] => 15

const gap = avi.reduce(function(accumulator, currentValue){
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`) 
    return accumulator + currentValue;
}, 0)
// const gap = avi.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(gap) 


// calculation : 
// acc=0 and currentvalue = 10 --> 0 + 10 = 10, now this 10 store into the acc and like wise further calculation is done.
// acc=10 and currentvalue = 20 --> 10 + 20 = 30, now this 30 store into the acc 
// acc=30 and currentvalue = 30 --> 30 + 30 = 60, now this 60 store into the acc 

// explaination:
// accumulator is the value which is used to intialize here it is 0
// currentvalue is the value is the value of array here like 10, 20, 30
// and after function, written 0 is intial value which is we declare to give idea to the accumulator, that it is intial value.

const shoppingList = [
    { course: 'JavaScript Basics', price: 29.99 },
    { course: 'Advanced JavaScript', price: 39.99 },
    { course: 'React Development', price: 'kevin' },
    { course: 'Node.js Essentials', price: 34.99 },
    { course: 'Full-Stack Development', price: 59.99 }
];

const total = shoppingList.reduce((acc, money) => {
    if (typeof money.price !== 'number') {
        console.log(`acc: ${acc}, money.price: ${money.price}`);  // Output: acc: 0, money.price: kevin);
        return acc;  // Skip non-numeric prices
    }
    return acc + money.price;  // Add only numeric prices
}, 0);

console.log(total);  // Output: 164.96
// 214.95
