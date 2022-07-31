const dEl = document.querySelector('#timer #day')
const hEl = document.querySelector('#timer #hour')
const mEl = document.querySelector('#timer #min')
const sEl = document.querySelector('#timer #sec')
const countDownEl =  document.querySelector('#countdown')


const newYear = moment([2023, 0, 01])
let newYearTimeStamp = newYear.valueOf()


let countDown = function(){
    let now = moment()
    const nowTimeStamp = now.valueOf()

    const remainingTime = newYearTimeStamp - nowTimeStamp
    

    let min = 60 * 1000
    let hour = 60 * min
    let day = 24 * hour

    d = Math.floor((remainingTime / day))
    h = Math.floor((remainingTime % day) / hour)
    m = Math.floor((remainingTime % hour) / min)
    s = Math.floor((remainingTime % min) / 1000)

    if (remainingTime < 0){
        clearInterval(i)
        countDownEl.innerHTML = `EXPIRED!!!`
        countDownEl.style.color = 'white'
        
    }else if(remainingTime === 0) {
        countDownEl.innerHTML = `HAPPY NEW YEAR`
        countDownEl.style.color = 'white'
    }
    else {
        dEl.innerHTML = `${d}`
        hEl.innerHTML = `${h}`
        mEl.innerHTML = `${m}`
        sEl.innerHTML = `${s}`
    }

}

let i = setInterval(function(){
    countDown();
}, 1000)