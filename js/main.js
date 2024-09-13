// main.js

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const openIcon = document.querySelector('.navbar-toggler-icon-open');
    const closeIcon = document.querySelector('.navbar-toggler-icon-close');

    // Set initial state: open
    navbarCollapse.classList.add('show');
    closeIcon.style.display = 'block';
    openIcon.style.display = 'none';

    navbarToggler.addEventListener('click', function () {
        // Toggle visibility of icons
        const isOpen = navbarCollapse.classList.contains('show');
        if (isOpen) {
            navbarCollapse.classList.remove('show');
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            navbarCollapse.classList.add('show');
            openIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }
    });

    // Animate buttons on the home page
    const buttons = document.querySelectorAll('.btn'); // Select all buttons
    let delay = 500; // Start delay for button animations
    buttons.forEach((button) => {
        setTimeout(() => {
            button.classList.add('slide-up'); // Add the slide-up animation class
        }, delay);
        delay += 100; // Delay for each button to create cascading effect
    });
});
