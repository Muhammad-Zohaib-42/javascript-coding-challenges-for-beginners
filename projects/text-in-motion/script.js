const titleWrapper = document.querySelector(".title-wrapper")
let currentIndex = 0

function moveTitleWrapper() {
    titleWrapper.style.transform = `translateY(-${50 * currentIndex}px)`
}

setInterval(() => {
    if (currentIndex < 2) {
        currentIndex++
    } else {
        currentIndex = 0
    }

    moveTitleWrapper()
}, 1500);