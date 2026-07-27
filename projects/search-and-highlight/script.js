const form = document.querySelector("form")
const input = document.querySelector("input")
const p = document.querySelector("p")

const originalText = p.innerHTML

form.addEventListener("submit", e => {
    e.preventDefault()

    const searchQuery = input.value.trim()

    if (!searchQuery) return

    const regex = new RegExp(`(${searchQuery})`, 'gi')

    p.innerHTML = originalText.replaceAll(regex, "<mark>$1</mark>")
})

