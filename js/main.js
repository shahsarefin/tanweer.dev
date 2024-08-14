// main.js
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }
});