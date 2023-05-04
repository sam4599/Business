const headerNav = document.querySelector('.header .header-nav')

const burgerMenu = headerNav.querySelector('.burger-menu')
const headerMenuMobile = headerNav.querySelector('.header-menu-mobile')

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    headerMenuMobile .classList.toggle('active')
})


// slider

const sectionSlider = document.querySelector('section.slider')
const sliderWrapper = sectionSlider.querySelector('.slider-wrapper')
const sliderItems = sectionSlider.querySelectorAll('.slider-item')

const sliderButtonPrev = sectionSlider.querySelector('.slider-button.prev')
const sliderButtonNext = sectionSlider.querySelector('.slider-button.next')

const sliderItemWidth = 1440
const itemsLength = sliderItems.lenght 

sliderWrapper.style.width = sliderItemWidth * itemsLength + 'px'

sliderButtonPrev.addEventListener('click', prevSlide)
sliderButtonNext.addEventListener('click', nextSlide)

let offset = 0



function nextSlide() {
    offset = offset + sliderItemWidth
    if (offset >= sliderItemWidth * itemsLength) {
        return false
    }
    sliderWrapper.style.left = -offset + 'px'
}

// let StopSlide = nextSlide()

// if (StopSlide === itemsLength) {
//     return false
// }

function prevSlide() {
    offset = offset - sliderItemWidth
    if(offset < 0) {
        return false
    }
    sliderWrapper.style.left = -offset + 'px'
}