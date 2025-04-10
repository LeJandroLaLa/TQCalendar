// Array of slide images with your naming convention
const slideImages = [
    'slides/TQC_pix_01.jpg',
    'slides/TQC_pix_02.jpg',
    'slides/TQC_pix_03.jpg',
    'slides/TQC_pix_04.jpg',
    'slides/TQC_pix_05.jpg',
    'slides/TQC_pix_06.jpg',
    'slides/TQC_pix_07.jpg',
    'slides/TQC_pix_08.jpg',
    'slides/TQC_pix_09.jpg',
    'slides/TQC_pix_10.jpg'
];

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const indicatorsContainer = document.querySelector('.slide-indicators');
    
    // Clear any existing content
    slideshowContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';
    
    // Create slides
    slideImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        
        // Create image element
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Slide ${index + 1}`;
        
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('span');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => showSlide(index);
        indicatorsContainer.appendChild(indicator);
    });
    
    // Start slideshow if multiple images
    if (slideImages.length > 1) {
        setInterval(nextSlide, 5000);
    }
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
