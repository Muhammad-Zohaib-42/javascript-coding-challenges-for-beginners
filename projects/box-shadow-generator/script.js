const inputs = document.querySelectorAll("input")
const box = document.querySelector(".box")
const values = document.querySelector(".values")
const button = document.querySelector("button")

let xAxis = 0
let yAxis = 0
let blur = 6
let spread = 3
let color = "#000000"
let inset = false

function applyShadowValues() {
    box.style.boxShadow = `${inset ? "inset": ""} ${xAxis}px ${yAxis}px ${blur}px ${spread}px ${color}`
    values.innerText = `${xAxis}px ${yAxis}px ${blur}px ${spread}px ${color}`
}

applyShadowValues()

inputs.forEach(input => {
    input.addEventListener("input", e => {
        const {id,value} = e.target

        console.log(id, value)

        switch(id) {
            case 'x':
                xAxis = value
                break
            case 'y':
                yAxis = value
                break
            case "blur":
                blur = value
                break
            case "spread":
                spread = value
                break
            default:
                color = value
        }

        applyShadowValues()

    })
})

button.addEventListener("click", () => {
    inset = !inset
    button.innerText = inset ? "outset" : "inset"
    applyShadowValues()
})