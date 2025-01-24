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


function userLogin (username = "kumar"){
    if(!username){
        console.log("Please provide username");
        return ;
    }
    return `Welcome ${username}`;
}
console.log(userLogin("arth")); // output : Welcome arth
