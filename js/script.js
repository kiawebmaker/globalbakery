// --- LOGIKA NAVBAR HAMBURGER ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Menutup menu jika salah satu link diklik (opsional, UX lebih baik)
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


// --- LOGIKA HERO SLIDER ---
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainer = document.getElementById('dots-container');

let currentSlide = 0;
const slideLength = slides.length;

// 1. Buat Dots sesuai jumlah slide
function createDots() {
    for (let i = 0; i < slideLength; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// 2. Update Tampilan Slide & Dot
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

// 3. Navigasi ke Slide Tertentu
function goToSlide(index) {
    currentSlide = index;
    updateSlideView();
}

// 4. Tombol Next
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideLength;
    updateSlideView();
}

// 5. Tombol Prev
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideLength) % slideLength;
    updateSlideView();
}

// Inisialisasi Slider
createDots();
updateSlideView();

// Event Listener untuk Tombol
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto Slide (Opsional, mengganti slide otomatis setiap 5 detik)
setInterval(nextSlide, 5000);
