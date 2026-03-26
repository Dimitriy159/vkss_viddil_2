const track = document.getElementById('sliderTrack')
const track1 = document.getElementById('sliderTrack1')
const dots = document.querySelectorAll('.dot')
const dots1 = document.querySelectorAll('.dot1')
const slides = document.querySelectorAll('.slide')
const slides1 = document.querySelectorAll('.slide1')

let currentSlide = 0
let currentSlide1 = 0

function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide)
    })
}

function moveSlide(direction) {
    currentSlide += direction
    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }
    updateSlider()
}

function goToSlide(index) {
    currentSlide = index
    updateSlider()
}

function updateSlider1() {
    track1.style.transform = `translateX(-${currentSlide1 * 100}%)`
    dots1.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide1)
    })
}

function moveSlide1(direction) {
    currentSlide1 += direction
    if (currentSlide1 < 0) {
      currentSlide1 = slides1.length - 1
    }
    if (currentSlide1 >= slides1.length) {
      currentSlide1 = 0
    }
    updateSlider1()
}

function goToSlide1(index) {
    currentSlide1 = index
    updateSlider1()
}