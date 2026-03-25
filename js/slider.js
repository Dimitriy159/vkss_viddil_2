const track = document.getElementById('sliderTrack')
const dots = document.querySelectorAll('.dot')
const slides = document.querySelectorAll('.slide')

let currentSlide = 0

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