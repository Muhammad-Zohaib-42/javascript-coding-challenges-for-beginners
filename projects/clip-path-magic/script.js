const section = document.querySelector("section")
const body = document.body

body.addEventListener("mousemove", e => {
    section.style.setProperty("--x", e.clientX + "px")
    section.style.setProperty("--y", e.clientY + "px")
})