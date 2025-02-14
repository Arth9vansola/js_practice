const randomNumber = () =>{
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0;i < 6 ; i++){
      color += hex[Math.floor(Math.random()*16)]
    }
    return color
  }
  
  const start = document.getElementById('start')
  const stop = document.getElementById('stop')
  
  let intervalId = null
  start.addEventListener("click",function(){
      if(!intervalId){
        intervalId = setInterval(function(){
        document.body.style.backgroundColor = randomNumber()
        },1000)
      }
  })
  
  stop.addEventListener("click",function(){
      clearInterval(intervalId)
      intervalId = null
  })