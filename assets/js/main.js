// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Testimonial Slider
    const slides = document.querySelectorAll('.testimonial-slide');
    const btnNext = document.getElementById('nextTestimonial');
    const btnPrev = document.getElementById('prevTestimonial');
    let currentSlide = 0;

    if (slides.length > 0) {
        const updateSlides = () => {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        };

        if(btnNext && btnPrev) {
            btnNext.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlides();
            });

            btnPrev.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateSlides();
            });
        }
    }
    
    // Page Transitions (Fade In on Load)
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = 1;
    }, 100);
});
