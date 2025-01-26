// use of this
// this is a reference to the object that is executing the current context

const person = {
    username: 'john',
    age: 30,
    greet: function(){
        console.log(`welcome back to site, ${this.username}`);
        // console.log(this)
    }
}
person.greet(); // output : welcome back to site, john
person.username = "arth" // changing the username
person.greet(); // output : welcome back to site, arth
console.log(this); // output : {}


/*********************************************************** arrow function *********************************************************/
const arth = () => {
    console.log(this);
}
arth()

// implicit return --> not using return keyword
// if you use paranthesis then there is no need to write return keyword but if you use curly braces then you have to write return keyword

const add = (a, b) => (a + b)
console.log(add(10, 20)); // output : 30

const add1 = (a, b) => {
    return a + b;
}
console.log(add1(10, 20)); // output : 30

// object in arrow function
const mix = () => ({name: "arth", age: 20})
console.log(mix()); // output : { name: 'arth', age: 20 }
    