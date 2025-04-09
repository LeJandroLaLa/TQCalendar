document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Initialize slideshow
    showSlide(slideIndex);
    
    // Auto advance slides every 5 seconds
    setInterval(function() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, 5000);
    
    function showSlide(index) {
        const slideshow = document.querySelector('.slideshow');
        slideshow.style.transform = `translateX(-${index * 33.333}%)`;
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    // Allow clicking on indicators
    window.currentSlide = function(index) {
        slideIndex = index;
        showSlide(slideIndex);
    };
    
    // Form submissions
    const signupForm = document.getElementById('signup-form');
    const feedbackForm = document.getElementById('feedback-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send this data to your backend
            const email = document.getElementById('email').value;
            const userType = document.getElementById('user-type').value;
            
            console.log('Signup:', { email, userType });
            
            // For now, just show success message
            signupForm.classList.add('hidden');
            document.getElementById('form-success').classList.remove('hidden');
            
            // You can integrate with Netlify Forms by adding the netlify attribute to your form
            // or connect to a service like EmailJS or Mailchimp
        });
    }
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send this data to your backend
            const feedback = document.getElementById('feedback').value;
            
            console.log('Feedback:', feedback);
            
            // For now, just show success message
            feedbackForm.classList.add('hidden');
            document.getElementById('feedback-success').classList.remove('hidden');
        });
    }
});

// PWA - detect if user is offline and show appropriate message
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus() {
    if (!navigator.onLine) {
        // Create and show offline notification
        const offlineMessage = document.createElement('div');
        offlineMessage.className = 'offline-notification';
        offlineMessage.innerHTML = 'You are currently offline. Some features may not be available.';
        document.body.prepend(offlineMessage);
    } else {
        // Remove offline notification if exists
        const offlineMessage = document.querySelector('.offline-notification');
        if (offlineMessage) {
            offlineMessage.remove();
        }
    }
}