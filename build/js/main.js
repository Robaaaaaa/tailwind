const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    };

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);

const stars = document.querySelectorAll('.rating input[type="radio"]');
stars.forEach(star => {
    star.addEventListener('click', () => {
        // Prevent deselecting the star when it's clicked
        if (!star.checked) {
            star.checked = true;
        }
    });
});

