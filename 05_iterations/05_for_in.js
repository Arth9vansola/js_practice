// for in loop ::::---> used for object and array, it give you direct values of object and values of array

// for object
const obj = {
    name: 'john',
    age: 30,
    job: 'web developer'
}

for (let key in obj) {
    console.log(obj[key]);
}

//for array
const arr = [1, 2, 3, 4, 5];
for (let index in arr) {
    console.log(arr[index]);
}