const menu = document.querySelector(".menu")
const links = document.querySelectorAll(".link")
const sections = document.querySelectorAll("section")

menu.addEventListener("click", () => {
    menu.classList.toggle("open")
})

links.forEach(link => {
    link.addEventListener("click", () => {
        sections.forEach(section => {
            if(section.innerText == link.innerText) {
                section.classList.add("shrink")
                setTimeout(() => {
                    section.style.zIndex = 1000
                }, 1000);
            } else {
                section.classList.add("shrink")

                setTimeout(() => {
                    section.style.zIndex = 100
                }, 1000);
            }
        })
    })
})