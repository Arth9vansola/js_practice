const useremail = []

if(useremail){
    console.log("You are logged in")
}else{
    console.log("Please log in")
}

// falsy values 
// false, 0, "", null, undefined, NaN, -0, BigInt 0n

// truthy values
// true, 1, " ", [], {}, function(){}, -1, BigInt 1n, "0", "false"

const car = {}
if(Object.keys(car).length === 0){
    console.log("object is empty")
}

// nullish coalescing operator(??) : null undefined

let val1
// val1 =5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 50

console.log(val1) 

// ternary operator
// condition ? true : false

const age = 20
age >= 18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote")