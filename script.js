document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = btn.querySelector('i');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-primary/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5');
            navbar.classList.remove('py-2'); // Adjust padding if needed
        } else {
            navbar.classList.remove('bg-primary/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5');
        }
    });

    // --- Scroll Reveal Animation ---
    function reveal() {
        const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100; // Adjust trigger point

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    // Run once on load
    reveal();
    // Run on scroll
    window.addEventListener('scroll', reveal);
});
