const sliders = document.querySelectorAll('input')

let r = document.querySelector('#red')
let g = document.querySelector('#green')
let b = document.querySelector('#blue')

const colorBg = document.querySelector('#color-background')
const pEl = document.querySelector('p')
pEl.innerHTML = 'rgb( 0, 0, 0)'




sliders.forEach((slider) => {
    slider.addEventListener('input', () => {
        r.value = sliders[0].value
        g.value = sliders[1].value
        b.value = sliders[2].value
        let colorUpdate = function () {
            colorBg.style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})`
            pEl.innerHTML = `rgb( ${r.value}, ${g.value}, ${b.value})`
        }
        colorUpdate()
    })
})

