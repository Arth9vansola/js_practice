// spread operation in array

const marverl_heros = ['Ironman', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];
const dc_heros = ['Superman', 'Batman','flash', 'Wonder-woman', 'Aquaman', 'Cyborg'];

const all_heros = [...marverl_heros, ...dc_heros]; // spread will spread the elements of the array and make it seperate then join it with the other array
console.log(all_heros);

// flat method where you can flatten the array means you can remove the nested array and make it a single array

const nested_array = [[1, 2, 3], [4, 5, 6], [7, 8, [10,20,30,5,6,[4,5,6]]]];
console.log(nested_array.flat(Infinity)); // here infinity is also a parameter which will flatten the array to any level means it will remove all the nested array and make it a single array

// converting into array

console.log(Array.isArray(nested_array)); // it will return true if it is an array otherwise false
console.log(Array.from("vansola")) // "yaha from mein hum aksar value bahar se lete hain aur usko array mein convert karte hain"
console.log(Array.from({name: 'vansola'})); // it will return an empty array because it is not an array and it is useful for interview also

const a1 = 10
const a2 = 20
const a3 = 30
console.log(Array.of(a1, a2, a3)); // it will convert the given values into an array and "yaha par value bahar se nahi aati par ham assign karte hain"