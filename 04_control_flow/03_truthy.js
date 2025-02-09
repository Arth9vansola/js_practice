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
// it is used when you fetch data from the data base and there is null value sometimes arrived that time another value helps and program to not throw an error

let val1
val1 =5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 10
val4 = null ?? 10 ?? 50

console.log(val1) 
console.log(val2) 
console.log(val3) 
console.log(val4) 

// ternary operator
// condition ? true : false

const age = 20
age >= 18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote")