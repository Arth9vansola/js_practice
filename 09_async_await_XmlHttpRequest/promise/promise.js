// 1.............................................................................................................

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("promise pura hua")
//         resolve()
//     },1000)
// }) 

// promiseOne.then(()=>{
//     console.log("i am here bro")
// })

// 2.............................................................................................................

// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("second promise pura hua")
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("i am here bro again")
// })

// 3.............................................................................................................

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve({name: "Avi", age: 21})    
//     },3000)
// })

// promiseThree.then(function(data){
//     console.log(data)
// })

// 4.............................................................................................................

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let er = false
//         if(!er){// falsy condition hogi to hi run hoga varna run nahi hoga when ! is there  in condition
//             resolve({name: "Avi", age: 21})
//         }else{
//             reject("daya kuch to gadbad hai")
//         }
          
//     },3000)
// })

// promiseFour
// .then(function(data){
//     console.log(data)
//     return data.name
// })
// .then(function(name){
//     console.log(name)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("finally daya case solve ho gaya")
// })

// 5.............................................................................................................

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let er = true
//         if(!er){// falsy condition hogi to hi run hoga varna run nahi hoga when ! is there  in condition
//             resolve({name: "avinav", age: 21 , role: "admin"})
//         }else{
//             reject("daya kuch to gadbad hai")
//         }
          
//     },3000)
// })

// async function handlepromiseFive(){
//     try{
//           const data = await promiseFive
//           console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// handlepromiseFive()

// 6.............................................................................................................

// async function fetchData(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetchData()

// 7.............................................................................................................

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})