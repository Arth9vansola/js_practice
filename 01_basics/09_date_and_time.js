// ************************** dealing with dates **************************
let time = new Date();
console.log(time.toString());
console.log(time.toDateString());
console.log(time.toTimeString());
console.log(time.toLocaleString());
console.log(time.toLocaleDateString());
console.log(time.toLocaleTimeString());
console.log(time.toISOString);
console.log(time.toJSON());

let myCreatedDate = new Date(1998, 11, 12, 12, 30, 30, 0);
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("1998-12-12");
console.log(myCreatedDate2.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // using timestamp there is ease for project where we need to compare time app like airbnb, oyo etc. where time is important
console.log(myCreatedDate2.getTime()); // it will return time in milliseconds

console.log(Math.floor(Date.now()/1000)) // it will return time in seconds

let myDate = new Date();
console.log(myDate.toLocaleString("default", {weekday: "long"}));