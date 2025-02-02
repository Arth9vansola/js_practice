// stack (primitive) ---> give the copy of the original value(call by value)

let a = "Vansola"
let b = a
b = "vankar"
console.log(a);
console.log(b);

// heap (non-primitive / reference) ---> give the reference of the original value(call by reference)

let x = [1, 2, 3]
let y = x
y[2] = 50
console.log(x);
console.log(y);
