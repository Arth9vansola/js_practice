// for each loop is also used for array but it give you direct value of given array

// way 1:
const arr = [1, 2, 3, 4, 5];
arr.forEach((val)=>(console.log(val))) // 1 2 3 4 5

// way 2:
const arr2 = [10,5,20,30,4];
function print(val){
    console.log(val)
}
// arr2.forEach(print) // 10 5 20 30 4

// here foreach come with item, index and entire array
const cars = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
cars.forEach((item, index, arr)=>{
  console.log(item, index, arr);
});

// array of object
const carCompanies = [
    { company: "Toyota", model: "Supra" },
    { company: "Honda", model: "NSX" },
    { company: "Ford", model: "GT" },
    { company: "BMW", model: "i8" },
    { company: "Audi", model: "R8" }
];

carCompanies.forEach((item)=>{
    console.log(item["company"], item["model"]);
})