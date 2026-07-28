const customCursor = document.querySelector(".custom-cursor")
const customCursor2 = document.querySelector(".custom-cursor-2")
const body = document.body

body.addEventListener("mousemove", e => {
    customCursor.style.left = (e.clientX - (customCursor.clientWidth / 2)) + "px"
    customCursor.style.top = (e.clientY - (customCursor.clientHeight / 2)) + "px"
    customCursor2.style.left = (e.clientX - (customCursor2.clientWidth / 2)) + "px"
    customCursor2.style.top = (e.clientY - (customCursor2.clientHeight / 2)) + "px"
})