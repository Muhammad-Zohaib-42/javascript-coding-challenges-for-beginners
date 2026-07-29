const controls = document.querySelectorAll("button")
const gallery = document.querySelector(".gallery")

let currentIndex = 0

controls.forEach(control => {
    control.addEventListener("click", () => {
        const controlName = control.innerText

        controlName == "Next" ? currentIndex-- : currentIndex++

        gallery.style.transform = `rotateY(${currentIndex * 60}deg)`
    })
})