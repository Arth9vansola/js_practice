// **************** about number **************************************************

const a = 10
console.log(a)

// another way to print number
const b = new Number(50)
console.log(b)
console.log(b.toString().length)
console.log(b.toFixed(2))

// precesion

const c = 105.99895
console.log(c.toPrecision(3))
console.log(typeof c.toPrecision(3))

// to locale string
const hun = 100000000000
console.log(hun.toLocaleString('en-IN'))

// **************** about  maths **************************************************
console.log(Math)
console.log(Math.PI)
console.log(Math.round(5.5))
console.log(Math.ceil(5.1))
console.log(Math.floor(5.9))
console.log(Math.sqrt(25)) // square root
console.log(Math.abs(-25)) // absolute value
// console.log(Math.random())

// random game on number 

const num = Math.floor(Math.random() * 10) + 1
console.log(num)

// formula to get number between giver range

const min = 10
const max = 20

const formula = Math.floor(Math.random() * (max - min + 1)) + min 
console.log(formula)