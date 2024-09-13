// skills.js
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    const skillCards = document.querySelectorAll('.skills-card');
    const buttons = document.querySelectorAll('.button-group button');

    // Animate main content
    setTimeout(() => {
        main.classList.add('appear');
    }, 500);

    // Animate skill cards
    let delay = 500; // Start delay after main content animation
    skillCards.forEach((card) => {
        setTimeout(() => {
            card.classList.add('appear');
        }, delay);
        delay += 300; // Increase delay for each subsequent card
    });

    // Animate buttons one by one very fast
    delay = 800; // Set initial delay after skill cards
    buttons.forEach((button) => {
        setTimeout(() => {
            button.classList.add('slide-up');
        }, delay);
        delay += 100; // Small delay for each button
    });
});
