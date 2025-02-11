const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if(height === '' || height < 0 || isNaN(height)){
    return `please enter valid height:${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    return `please enter valid weight:${weight}`
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    if(bmi < 18.6){
      result.innerHTML = `<span>your bmi is: ${bmi} and you are under weight </span>`
    }else if(bmi >= 18.6 && bmi <= 24.6){
      result.innerHTML = `<span>your bmi is: ${bmi} and you are in normal range </span>`
    }else{
      result.innerHTML = `<span>your bmi is: ${bmi} and you are over weight </span>`
    }
    
  }
})