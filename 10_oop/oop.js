// js is prototype based language and classes are only syntactic sugar
// In properties , we can not pass value .length(), .toUpperCase() etc
// In methods(function), we can pass value map(func), filter(func) etc

// ------> new is constructor function <------
// 1)  when we write "new" it will create new empty object {}
// 2)  due to new keyword call the constructor function which pack the arguments
// 3)  this keyword pack the arguments in constructor function
// 4)  return the object or we get the object from constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);
console.log(userTwo.greeting());
console.log(userOne)
