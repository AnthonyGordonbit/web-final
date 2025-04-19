document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more');
    const testimonialGrid = document.getElementById('testimonial-grid');
    const hiddenTestimonials = testimonialGrid.querySelectorAll('.testimonial-card.hidden');
    
    let testimonialIndex = 0;
    
    loadMoreBtn.addEventListener('click', function() {

        for(let i = 0; i < 2; i++) {
            if (hiddenTestimonials[testimonialIndex]) {
                hiddenTestimonials[testimonialIndex].classList.remove('hidden');
                hiddenTestimonials[testimonialIndex].classList.add('fade-in');
                testimonialIndex++;
            }
        }
        
        if (testimonialIndex >= hiddenTestimonials.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
});