const promiseFive = new Promise(function(resolve, reject){
        setTimeout(()=>{
            let er = true
            if(!er){// falsy condition hogi to hi run hoga varna run nahi hoga when ! is there  in condition
                resolve({name: "avinav", age: 21 , role: "admin"})
            }else{
                reject("daya kuch to gadbad hai")
            }
              
        },3000)
    })
    
    async function handlepromiseFive(){
        try{
              const data = await promiseFive
              console.log(data)
        }catch(err){
            console.log(err)
        }
    }
    handlepromiseFive()


fetch('https://api.github.com/users/hiteshchoudhary') // here fetch come before the promiseFive because it has special (micro task queue / priority queue) which execute fetch request first without waiting for the promiseFive to complete and this is the beauty of fetch
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})