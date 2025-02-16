// immediately invoked function expression (IIFE)

// IIFE is a function that is executed right after it is created. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts: () () , 

// The first part contains the anonymous function and the second part is used to call the function immediately.

// it is used to avoid polluting the global scope and it can be used to create a private scope And due to pollution of global scope it can't affected that why it is used.


// unnamed iife
(()=>{
     console.log("my name is arth");
})(); // always apply semicolon after IIFE because due to this another iife know that first iife where is ended.

((naam)=>{
    console.log(`Roses are red,
Violets are blue,
JavaScript is fun,
And so are you. Happy ${naam}`)
})("arth");

// named iife
(function greet(){
    console.log("hello, world");
})();

