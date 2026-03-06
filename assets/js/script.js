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


// Header animation
const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function() {
    if (this.window.scrollY >= 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})