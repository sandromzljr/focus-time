let darkMode = true
const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener("click", (event) => {
    document.documentElement.classList.toggle("light")

    const mode = darkMode ? "LIGHT" : "DARK"
    
    event.currentTarget.querySelector("span").textContent = `${mode} MODE ATIVADO!`

    darkMode = !darkMode
})