document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.project-card');

    // Initialize IntersectionObserver for animation triggering
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation with increasing delay
                setTimeout(() => {
                    entry.target.classList.add('slap-animate');
                    observer.unobserve(entry.target); // Stop observing once animated
                }, index * 200); // Increase delay for each subsequent card
            }
        });
    }, { threshold: 0.1 });

    // Observe each project card
    cards.forEach(card => {
        observer.observe(card);
    });
});
