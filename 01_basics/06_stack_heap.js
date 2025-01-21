// stack (primitive) ---> give the copy of the original value(call by value)

let arth = "Vansola"
let avi = arth
avi = "vankar"
console.log(arth);
console.log(avi);

// heap (non-primitive / reference) ---> give the reference of the original value(call by reference)

let a = [1, 2, 3]
let b = a
b[2] = 50
console.log(a);
console.log(b);
