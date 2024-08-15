// projects.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slap-animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        observer.observe(card);
    });

    // Trigger animation for initially visible cards
    setTimeout(() => {
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('slap-animate');
                observer.unobserve(card);
            }
        });
    }, 100);

    // Helper function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

        // Image enlargement functionality for screenshots
        const enlargedContainer = document.createElement('div');
        enlargedContainer.className = 'enlarged-img-container';
        const enlargedImg = document.createElement('img');
        enlargedImg.className = 'enlarged-img';
        enlargedContainer.appendChild(enlargedImg);
        document.body.appendChild(enlargedContainer);
    
        document.querySelectorAll('.screenshot-img').forEach(img => {
            img.addEventListener('click', function() {
                enlargedImg.src = this.src;
                enlargedContainer.style.display = 'flex';
            });
        });
    
        enlargedContainer.addEventListener('click', function() {
            this.style.display = 'none';
        });
});