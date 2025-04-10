// Array of slide images
const slideImages = [
    'slides/slide1.jpg',
    'slides/slide2.jpg',
    'slides/slide3.jpg'
];

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const indicatorsContainer = document.querySelector('.slide-indicators');
    
    // Create slides
    slideImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${image})`;
        slideshowContainer.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('span');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => showSlide(index);
        indicatorsContainer.appendChild(indicator);
    });
    
    // Start automatic slideshow if there's more than one image
    if (slideImages.length > 1) {
        setInterval(nextSlide, 5000);
    }
});

// Track current slide
let currentSlide = 0;

// Show specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show selected slide
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Advance to next slide
function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
