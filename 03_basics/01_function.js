//without return statement

function addTwoNum(a,b){
    console.log(a+b);
}

const show = addTwoNum(5,6);
console.log("show:", show); // output : undefined ,,,, so here we are not returning anything from the function so it will return undefined

// return statement

function addTwoNum(a,b){
    let result = a+b;
    return result;
}

const showcase = addTwoNum(5,6);
console.log("showcase:", showcase); // output : 11


function userlogin(username = "kumar") {
    if (!username) {
        return "Please provide a username";
    }
    return `Welcome ${username}`;
}

console.log(userlogin("arth")); // Output: Welcome arth
console.log(userlogin("")); // Output: Please provide a username
console.log(userlogin()); // Output: Welcome kumar


// rest operator in function
// 1) in single parameter

function addInCart1(...items){
    return items
}
const care = addInCart1("laptop","mobile","watch");
console.log(care); // output : [ 'laptop', 'mobile', 'watch' ]

// 2) in multiple parameters

function addInCart(val1, val2, ...items){
    return items
}
console.log(addInCart(10,20,30,40,50,60,70));
const debut = addInCart(10,20,30,40,50,60,70)
console.log(debut[2]); // output : [ 50 ] it gives output in from of array so we can easily find the value by index

// passing object in function

const user = {
    username: "arth",
}
function userLogin1 (upyog){
    return `Welcome ${upyog.username}`;
}
console.log(userLogin1(user)); // output : Welcome arth
console.log(userLogin1({username: "kumar"})); // output : Welcome kumar

// passing array in function

const users = ["arth","kumar","raj"];
function userLogin (upyog){
    return `Welcome ${upyog[0]}`;
}
console.log(userLogin(users)); // output : Welcome arth
console.log(userLogin(["kumar","raj","arth"])); // output : Welcome kumar