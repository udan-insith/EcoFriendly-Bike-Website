// PRELOADER
const loadElement = document.querySelector("[data-preloader]")

window.addEventListener("load", () => {
    loadElement.classList.add("loaded")
})

// Mobile navbar

const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggler]")

const toggleNavbar = function () {
    navbar.classList.toggle("active")
    navToggler.classList.toggle("active")
}

navToggler.addEventListener("click", toggleNavbar)