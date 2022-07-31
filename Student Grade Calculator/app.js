const imgBtn = document.querySelector('button')
const submitBtn = document.querySelector('button[type="submit"]')
const inputDiv = document.querySelector('.input')
const allInputs = document.querySelectorAll('.sub')

let allInputsArray = Array.from(allInputs)
let valueArray = []

imgBtn.addEventListener('click', ()=> {
    
    var input = document.createElement('input');
    input.type = 'text'
    input.className = 'sub'
    input.name = 'array[]'
    inputDiv.appendChild(input)
    allInputsArray.push(input)
    
    if(allInputsArray.length === 6) {
        imgBtn.disabled = true
    }
})

submitBtn.addEventListener ('click', () => {
    let updatedInput = inputDiv.querySelectorAll('input')

    let getInputValue = () => {
        for (var i=0; i < updatedInput.length; i++){
                valueArray.push(parseFloat(updatedInput[i].value))   
        }
    }

    let getTotalValue = () => {
        let sum = 0;
        for (const value of valueArray) {
            sum += value;
        }
        return sum
    }

    getInputValue()

    let totalScore = getTotalValue()
    console.log(valueArray)
  
    let getOverall = () => {
        let total = 0
        for (var i=0; i < updatedInput.length; i++){
               total = 100 * (updatedInput.length)
    }
    return total
    }
    let overallTotal = getOverall()

    let percentage = Math.floor((totalScore/overallTotal) * 100)
    console.log(percentage)
    if(percentage >= 70) {
        document.querySelector('#result').innerHTML = `Out of a ${overallTotal}, you scored ${totalScore} and 
        your percentage is ${percentage}%.
        Your grade is an A`
    }else if (percentage < 70 && percentage >= 60 ){
        document.querySelector('#result').innerHTML = `Out of a ${overallTotal}, you scored ${totalScore} and 
        your percentage is ${percentage}%.
        Your grade is a B`
    }else if (percentage < 60 && percentage >= 50) {
        document.querySelector('#result').innerHTML = `Out of a ${overallTotal}, you scored ${totalScore} and 
        your percentage is ${percentage}%.
        Your grade is a C`
    }else if(percentage < 50 && percentage >= 40){
        document.querySelector('#result').innerHTML = `Out of a ${overallTotal}, you scored ${totalScore} and 
        your percentage is ${percentage}%.
        Your grade is a D`
    }else if(percentage < 40 && percentage >= 30){
        document.querySelector('#result').innerHTML = `Out of a ${overallTotal}, you scored ${totalScore} and 
        your percentage is ${percentage}%.
        Your grade is an E`
    }else if(percentage < 30 && percentage >= 0){
        document.querySelector('#result').innerHTML = `Out of a ${overallTotal}, you scored ${totalScore} and 
        your percentage is ${percentage}%.
        Your grade is an F`
    }else if(isNaN(percentage)){
        document.querySelector('#result').innerHTML = `*Please fill all fields`
        document.querySelector('#result').style.color = 'red'
    }
    valueArray = []
})

