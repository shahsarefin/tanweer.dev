// timeline.js
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Animate main content
    setTimeout(() => {
        main.classList.add('appear');
    }, 500);

    // Animate timeline items and responsibilities
    let delay = 1000; // Start after main content animation
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('appear');
            
            // Animate responsibilities after item appears
            setTimeout(() => {
                item.querySelector('.responsibilities').classList.add('appear');
            }, 500);

        }, delay);
        delay += 1000; // Increase delay for each subsequent item
    });
});