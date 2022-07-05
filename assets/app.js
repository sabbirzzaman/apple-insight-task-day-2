const navToggler = document.querySelector('.nav-toggler')
const overlay = document.querySelector('.overlay')
const closer = document.querySelector('.close')
const offcanvasNavigation = document.querySelector('.offcanvas')
const arrow = document.querySelector('#navbarDropdownMenuLink')

const handleOffcanvasNavigation = () => {
    offcanvasNavigation.classList.toggle('active')
}

const handleArrow = () => {
    arrow.classList.toggle('rotate')
}

navToggler.addEventListener('click', handleOffcanvasNavigation)
overlay.addEventListener('click', handleOffcanvasNavigation)
closer.addEventListener('click', handleOffcanvasNavigation)
arrow.addEventListener('click', handleArrow)
