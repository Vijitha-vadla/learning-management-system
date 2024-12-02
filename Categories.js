  // Add animation to dropdown menus
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('show.bs.dropdown', function() {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.style.opacity = '0';
        setTimeout(() => {
            dropdownMenu.style.transition = 'all 0.3s ease';
            dropdownMenu.style.opacity = '1';
        }, 0);
    });
});

// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        // Add your search logic here
        console.log('Searching for:', this.value);
    }
});

// footer js
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