// for loop

for (let a = 0; a < 5; a++) {
    // console.log(a);
}

for (let i = 1; i <=5; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
} 

// break statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// continue statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}