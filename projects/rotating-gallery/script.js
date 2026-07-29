const gallery = document.querySelector(".gallery")

let currentIndex = 0
let intervalId = null

function startRotation() {
    intervalId = setInterval(() => {
        currentIndex++
        gallery.style.transform = `rotateY(${currentIndex * 60}deg)`
    }, 1500);
}

function stopRotation() {
    clearInterval(intervalId)
}

startRotation()

gallery.addEventListener("mouseenter", () => {
    stopRotation()
})

gallery.addEventListener("mouseleave", () => {
    startRotation()
})