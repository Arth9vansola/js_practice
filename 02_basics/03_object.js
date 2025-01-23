// object literals

const obj = {
    name: 'John',
    age: 25,
    city: 'New York',
    country: 'USA',
    email: 'john@gmail.com',
    phone: '1234567890',
}

console.log(Object.keys(obj)); // it will return the keys of the object
console.log(obj.name)
console.log(obj['email'])

// using symbols in object for interview purpose

const mySymbol = Symbol('mySymbol');

const obj2 ={
    [mySymbol]: 'Hello' // here [mySymbol] is a taken as a reference from above declared mySymbol
}
console.log(obj2[mySymbol]);

obj["name"] = "Vansola";
obj["name"] = "arth"
// Object.freeze(obj); // it will freeze the object means you can't change the value of the object
// obj["name"] = "kumar";
console.log(obj);

//function inside object

obj.greet = function(){
    console.log("Hello beta");
}
console.log(obj.greet());

obj.greet2 = function(){
    console.log(`Hello beta, ${this.name}`);
}
console.log(obj.greet2());