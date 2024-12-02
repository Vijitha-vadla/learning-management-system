//  navbar 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', function() {
    const features = document.querySelectorAll('.feature-card');
    features.forEach(feature => {
        const featurePosition = feature.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if(featurePosition < screenPosition) {
            feature.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});
// navbar end

 // Animate stats
 function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Trigger animations when scrolled into view
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('show');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    animateValue("studentCount", 0, 10000, 2000);
    animateValue("courseCount", 0, 500, 2000);
    animateValue("instructorCount", 0, 200, 2000);
    animateValue("satisfactionRate", 0, 98, 2000);

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Trigger once on load
});

// footer page
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        this.reset();
    });

    const coursePills = document.querySelectorAll('.course-pill');
    coursePills.forEach(pill => {
        pill.addEventListener('mouseenter', () => {
            pill.style.transform = 'scale(1.05)';
        });
        pill.addEventListener('mouseleave', () => {
            pill.style.transform = 'scale(1)';
        });
    });

    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${currentYear} LearnSmart LMS. All rights reserved.`;
});

// Add mobile search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInputMobile = document.querySelector('.search-input-mobile');

    if (searchToggle && searchOverlay && searchClose) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInputMobile.focus();
        });

        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }

    // Close search overlay on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });

    // Active nav link
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});