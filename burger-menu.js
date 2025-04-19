document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    document.addEventListener('click', function(event) {
        const isClickInside = mainNav.contains(event.target) || burgerMenu.contains(event.target);
        
        if (!isClickInside && mainNav.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});