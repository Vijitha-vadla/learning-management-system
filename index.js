document.addEventListener('DOMContentLoaded', function() {
    // Sample courses data - you can expand this
    const courses = [
        { 
            title: 'Introduction to React', 
            category: 'Programming',
            description: 'Learn React fundamentals',
            price: '₹499'
        },
        { 
            title: 'JavaScript Basics', 
            category: 'Programming',
            description: 'Master JavaScript essentials',
            price: '₹399'
        },
        { 
            title: 'Digital Marketing', 
            category: 'Marketing',
            description: 'Complete digital marketing guide',
            price: '₹599'
        },
        // Add more courses as needed
    ];

    const searchInput = document.querySelector('.search-input');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    document.querySelector('.search-box').appendChild(searchResults);

    // Search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const filteredCourses = courses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm)
        );

        displaySearchResults(filteredCourses);
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-box')) {
            searchResults.style.display = 'none';
        }
    });
});

function displaySearchResults(results) {
    const searchResults = document.querySelector('.search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No courses found</div>';
    } else {
        searchResults.innerHTML = results.map(course => `
            <div class="search-result-item">
                <div class="result-title">${course.title}</div>
                <div class="result-category">${course.category}</div>
                <div class="result-price">${course.price}</div>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
}