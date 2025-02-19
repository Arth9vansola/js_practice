// const ma = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(ma);

const tea = {
    name:"aadu chai",
    price: 10000,
    quantity: 100
}

console.log(tea)
console.log(Object.getOwnPropertyDescriptor(tea, 'name'));
console.log(Object.getOwnPropertyDescriptor(tea, 'price'));
console.log(Object.getOwnPropertyDescriptor(tea, 'quantity'));

Object.defineProperty(tea, 'name', {
    // writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(tea, "name"));

for (let [key, value] of Object.entries(tea)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}