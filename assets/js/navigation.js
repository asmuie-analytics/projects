document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    window.toggleNav = function() {
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navLinks && navToggle) {
            navLinks.classList.toggle('nav-open');
            navToggle.classList.toggle('active');
        }
    };

    // Close nav when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.greedy-nav');
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (nav && navLinks && navToggle && !nav.contains(event.target)) {
            navLinks.classList.remove('nav-open');
            navToggle.classList.remove('active');
        }
    });

    // Close nav when window is resized to desktop
    window.addEventListener('resize', function() {
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navLinks && navToggle && window.innerWidth > 768) {
            navLinks.classList.remove('nav-open');
            navToggle.classList.remove('active');
        }
    });
});
