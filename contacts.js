document.addEventListener('DOMContentLoaded', function() {
    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with email: ${email}`);
            this.reset();
        });
    }

    // Course pills animation
    const coursePills = document.querySelectorAll('.course-pill');
    coursePills.forEach(pill => {
        pill.addEventListener('mouseenter', () => {
            pill.style.transform = 'scale(1.05)';
        });
        pill.addEventListener('mouseleave', () => {
            pill.style.transform = 'scale(1)';
        });
    });

    // Update copyright year
    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.innerHTML = `&copy; ${currentYear} LearnSmart LMS. All rights reserved.`;
    }

    // Form field animations
    const formFields = document.querySelectorAll('.form-control');
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.closest('.mb-3')?.classList.add('field-active');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.closest('.mb-3')?.classList.remove('field-active');
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (this.checkValidity()) {
                this.classList.add('submitted');
                setTimeout(() => {
                    alert('Thank you for your message. We will get back to you soon!');
                    this.reset();
                    this.classList.remove('submitted');
                }, 1000);
            }
        });
    }

    // Desktop search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIconBtn = document.querySelector('.search-icon-btn');

    if (searchInput && searchIconBtn) {
        searchIconBtn.addEventListener('click', () => {
            handleSearch(searchInput.value);
        });

        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInput.value);
            }
        });
    }

    // Mobile search functionality
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInputMobile = document.querySelector('.search-input-mobile');

    if (searchToggle && searchOverlay && searchClose && searchInputMobile) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInputMobile.focus();
        });

        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });

        searchInputMobile.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInputMobile.value);
            }
        });
    }

    function handleSearch(query) {
        // Add your search logic here
        console.log('Searching for:', query);
        // For now, just alert the search query
        alert(`Searching for: ${query}`);
    }

    // Close search overlay on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay?.classList.contains('active')) {
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

    // Dropdown animation
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
});
