// arrays

const first = [1, 2, 3];
console.log(first);

const second = new Array(4, 5, 6);

//array methods

second.push(8)
second.push(10)
second.pop()
second.unshift(10)
second.shift()
console.log(second.includes(5));
console.log(second.indexOf(-5));
console.log(second.length);
console.log(second.concat(first));

const newarr = second.join()
console.log(newarr);
console.log(typeof newarr);

// slice
const bhai = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(bhai.slice(1, 5));
console.log(bhai);

// splice
console.log(bhai.splice(1, 5));
console.log(bhai);