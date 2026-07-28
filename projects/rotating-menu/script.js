const toggleBtn = document.querySelector(".toggle-btn")
const navContainer = document.querySelector(".nav-container")

toggleBtn.addEventListener("click", () => navContainer.classList.toggle("grow"))