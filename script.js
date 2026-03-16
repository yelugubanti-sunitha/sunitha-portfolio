const navLinks = document.querySelectorAll('.nav-menu a[href^="#"], .hero-buttons a[href^="#"]');
const navbar = document.querySelector('.navbar');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (!targetId || targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        e.preventDefault();

        const navHeight = navbar.offsetHeight;
        const targetPosition =
            targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        history.replaceState(null, '', targetId);
    });
});