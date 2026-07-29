const boxes = document.querySelectorAll(".box")
const frame = document.querySelector(".frame")
let currentBox = boxes[0]

boxes.forEach(box => {
    box.addEventListener("dragover", () => {
        box != currentBox && box.classList.add("highlight")
    })

    box.addEventListener("dragleave", () => {
        box.classList.remove("highlight")
    })

    box.addEventListener("dragover", (e) => {
        e.preventDefault()
    })

    box.addEventListener("drop", () => {
        box.appendChild(frame)
        box.classList.remove("highlight")
        currentBox = box
    })
})