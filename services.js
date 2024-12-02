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