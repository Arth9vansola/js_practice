// singleton object

const instaUser = new Object()

instaUser.name = "arth";
instaUser.age = 25;
instaUser.city = "gandhinagar";
instaUser.country = "India";

// console.log(instaUser);

// yaha par humne object ke andar object banaya hai

instaUser.address = { 
    street: "123 Main St",
    city: "gandhinagar",
    state: "Gujarat",
    country: {
        name: "India",
        code: "IN",
        continent: {
            name: "Asia",
            code: "AS"
        }
    }
};

console.log(instaUser.address.country.name); 

// 'asign' for merging objects from target to source 
// 'Object.assign(target, source)'

const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 4: 'd', 5: 'e', 6: 'f' };
const obj3 = { 7: 'g', 8: 'h', 9: 'i' };

const obj4 = Object.assign({}, obj1, obj2, obj3); // here {} is a target object and obj1, obj2, obj3 are source objects
// console.log(obj4);

// mostly used syntax for merging objects is and it is also latest syntax which 99 percent used in the industry:

const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

// array of objects

const users = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Paris" },
    { name: "Mike", age: 35, city: "London" }
];

console.log(users[1].age);

console.log(instaUser)
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty('country'));

const tiger = Object.keys(instaUser)
console.log(tiger[2]);

// destructuring object

const opt = {
    name: "avi",
    age: 25,
    college: "IIT",
}

const {age : a} = opt; // if we want then we can assign age to another value by that we can ask for age
// console.log(age); // give same as a ---> (25)
console.log(a);