const overlay = document.querySelector(".overlay")
const percentageSpan = document.querySelector(".percentage-span")

let intervalId = null
let percentage = 0
let i =  .2
let opacity = 1

intervalId = setInterval(() => {
    if (percentage == 98) {
        clearInterval(intervalId)
        overlay.style.pointerEvents = "none"
    }

    percentage += 2

    percentageSpan.innerText = percentage + "%"
    percentageSpan.style.opacity = opacity -= .02
    overlay.style.backdropFilter = `blur(${10 - i}px) saturate(1.5)`

    i += .2
}, 50);