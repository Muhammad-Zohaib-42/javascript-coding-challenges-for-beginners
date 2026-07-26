const barCircles = document.querySelectorAll(".bar-circle")
const btns = document.querySelectorAll("button")
const bars = document.querySelectorAll(".bar")

let currentIndex = 0

function handleBarCircles() {
    barCircles.forEach((barCircle,index) => {
        if (index <= currentIndex) {
            barCircle.classList.add("active")
        } else {
            barCircle.classList.remove("active")
        }
    })
}

function handleBtns() {
    if (currentIndex == 4) {
        btns[1].disabled = true
    } else {
        btns[1].disabled = false
    }

    if (currentIndex == 0) {
        btns[0].disabled = true
    } else {
        btns[0].disabled = false
    }
}

function handleBars() {
    bars.forEach((bar,index) => {
        if (index + 1 <= currentIndex) {
            bar.classList.add("active")
        } else {
            bar.classList.remove("active")
        }
    })
}

handleBarCircles()
handleBtns()

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        const btnTxt = e.target.innerText
        
        if (btnTxt == "Next") {
            currentIndex < 4 && currentIndex++
        } else {
            currentIndex > 0 && currentIndex--
        }

        handleBarCircles()
        handleBtns()
        handleBars()
    })
})