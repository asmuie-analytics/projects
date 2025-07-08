// Mobile navigation toggle
function toggleNav() {
    const navLinks = document.querySelector('.visible-links');
    navLinks.classList.toggle('nav-open');
}

// Close navigation when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.greedy-nav');
    const navLinks = document.querySelector('.visible-links');
    
    if (!nav.contains(event.target)) {
        navLinks.classList.remove('nav-open');
    }
});

// Close navigation when window is resized to desktop
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.visible-links');
    if (window.innerWidth > 768) {
        navLinks.classList.remove('nav-open');
    }
});
