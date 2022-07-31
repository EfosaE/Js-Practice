const liEls = document.querySelectorAll('.circles li')
const lines = document.querySelectorAll('.progress-line')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

const div = document.querySelector('div')

let activeCircles = 1
let activeLines = 0

liEls[0].classList.add('active')

nextBtn.addEventListener('click', () => {
    activeCircles++
    for (var i = 0; i < liEls.length; i++) {
        
        if(i < activeCircles ) {
            liEls[i].classList.add('active')
        }  

      }
      activeLines ++
      for (var i = 0; i < lines.length; i++) {
        
        if(i < activeLines ) {
            lines[i].classList.add('active')
        }  

      }
      printHeader()
      disablePrevBtn()
      disableNextBtn()
})


let printHeader =() => {
    document.querySelector('h2').innerHTML = (activeCircles === liEls.length) ? 'Congratulations, you have reached the final step!' : 'Follow these Steps to see Final Result!'
}
printHeader()

let disablePrevBtn = () => {
    if (activeCircles === 1){
        prevBtn.disabled = true
    } else if (activeCircles > 1){
        prevBtn.disabled = false
    }
}
disablePrevBtn()


let disableNextBtn = () => {
    nextBtn.disabled = (activeCircles === liEls.length) ? true : false
}
disableNextBtn()

prevBtn.addEventListener('click', () => {
    
    activeCircles--
    for (var i = 0; i < liEls.length; i++) {
        if(i >= activeCircles ) {
           liEls[i].classList.remove('active')
        }  

      }
      activeLines --
      for (var i = 0; i < lines.length; i++) {
        if(i >= activeLines ) {
            lines[i].classList.remove('active')
        }  
      }
     
      printHeader()
      disablePrevBtn()
      disableNextBtn()
})
