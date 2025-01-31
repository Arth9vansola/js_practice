// for of is used for "arrays" and "strings" mostly where we deal with index based iteration

const arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log(element);
}

const str = 'hello world';
for (let char of str) {
    if (char === ' ') {
        continue;
    }
    console.log(`char is ${char}`);
}

// map method :::--> map store value in key value pair, it is iterable, it hold unique key value pair and in which format we give input they give output in same format

const ap = new Map()

ap.set('name', 'john')
ap.set('age', 30)
ap.set('job', 'web developer')
ap.set('name','john')

console.log(ap)

for (let [key, value] of ap) {
    console.log(`${key} :- ${value}`);
} 