const headerNav = document.querySelector('.header .header-nav')

const burgerMenu = headerNav.querySelector('.burger-menu')
const headerMenuMobile = headerNav.querySelector('.header-menu-mobile')

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    headerMenuMobile .classList.toggle('active')
})


// slider

let offset = 0
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 1440
    if (offset > 2880) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})


document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -= 1440
    if (offset < 0) {
        offset = 2880
    }
    sliderLine.style.left = -offset + 'px'
})