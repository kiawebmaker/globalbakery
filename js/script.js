
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainer = document.getElementById('dots-container');

let currentSlide = 0;
const slideLength = slides.length;

function createDots() {
    for (let i = 0; i < slideLength; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function updateSlideView() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
    });
    dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    currentSlide = index;
    updateSlideView();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideLength;
    updateSlideView();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideLength) % slideLength;
    updateSlideView();
}

createDots();
updateSlideView();

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto Slide (Opsional, mengganti slide otomatis setiap 5 detik)
setInterval(nextSlide, 5000);
