let x = 3;
const y = x++; //If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  //If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

