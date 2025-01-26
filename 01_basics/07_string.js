// new way to print string

let name = "John";
let age = 25;

console.log(`Hello ${name}, how are you? You are ${age} years old.`);   

// new way to write a string

const myName = new String("arth");
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('r'));

const newString = myName.substring(1,3) // 1) If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0. 2) The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.
console.log(newString);

const anotherString = myName.slice(-3,3)
console.log(anotherString); // in slice negative value is working from end of the string


// trim method

const trimmer = "    arth    ";
console.log(trimmer);
console.log(trimmer.trim());
console.log(trimmer.trimStart());
console.log(trimmer.trimEnd());
console.log(trimmer.trimLeft()); //same as trimStart
console.log(trimmer.trimRight()); //same as trimEnd

// replace method

const url = "https://www.google*40.com";
console.log(url.replace("*40",".avi"));
console.log(url.includes("avi")); // here in original string there is no avi so it will return false, avi is in only replace string("url.replace("*40",".avi")")

// split method

const splitString = "arth,vansola,vankar";

console.log(splitString.split(",")); // without limit
console.log(splitString.split(",",2)); // with limit