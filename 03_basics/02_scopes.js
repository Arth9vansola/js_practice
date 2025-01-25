
var c = 300
let z = 100

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    let z = 50;
    console.log(z); // output : 50
}

console.log(z); // output : 100
// console.log(a); // output : ReferenceError: a is not defined
// console.log(b); // output : ReferenceError: b is not defined
// console.log(c); // output : 30

/************************************************************************************************************************/
function one(){
    const name = "arth";

    function two(){
        const site = "arth.dev";
        console.log(name); // output : arth
    }
    // console.log(site); // output : ReferenceError: site is not defined
    two();
}
one();

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ interesting hoisting just overview $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

addOne(10) // it can't show error because it is function declaration
function addOne(num){
    return num + 1;
}

addTwo(10) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}

// in above code addOne is function declaration so it can be called before the function declaration but addTwo is function expression so it can't be called before the function declaration