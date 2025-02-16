// js is prototypial based language means it will check for something till the null means it will check for the parent object till the null
// array  --prototype----> object --prototype---> null
// string ------> object -----> null
// function ------> object -----> null
// in js everything is object
function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){ 
     this.price++

}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const chai = new createUser("chai", 25)
const tea =  createUser("tea", 250)

chai.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

#### 1) A new object is created: The new keyword initiates the creation of a new JavaScript object.
1️⃣ A new object is created
🔹 What happens?
When you use the new keyword, JavaScript creates a brand new object.

function Person(name) {
    this.name = name;
}

let p1 = new Person("Alice");
console.log(p1); // Output: Person { name: 'Alice' }

💡 Internally, JavaScript creates an empty object {} first, before executing the constructor function.

#### 2) A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
2️⃣ A prototype is linked
🔹 What happens?
The new object is linked to the constructor function's prototype.
This means that the new object can access properties and methods defined on Person.prototype.

🔹 Example:
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
};

let p2 = new Person("Bob");
console.log(p2.greet()); // Output: Hello, my name is Bob

💡 Even though greet is not inside the constructor, p2 can still use it because it's linked to Person.prototype.

#### 3) The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
3️⃣ The constructor is called
🔹 What happens?
The constructor function is executed.
Inside the function, this refers to the newly created object.
The properties are assigned to this.

🔹 Example:
function Car(brand) {
    console.log(this); // New object being created
    this.brand = brand;
}

let c1 = new Car("Tesla"); 
console.log(c1.brand); // Output: Tesla

💡 If the constructor does not return an object explicitly, JavaScript automatically returns this, the newly created object.

#### 4) The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
4️⃣ The new object is returned
🔹 What happens?
If the constructor does not return an object, JavaScript automatically returns the newly created object.
If the constructor returns an object, that object is returned instead of this.

🔹 Example:
function Example() {
    return { message: "This object is returned instead!" };
}

let e1 = new Example();
console.log(e1); // Output: { message: 'This object is returned instead!' }

💡 Here, the manually returned object { message: "This object is returned instead!" } replaces the default this object.

*/