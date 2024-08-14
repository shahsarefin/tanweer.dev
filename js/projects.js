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
});

document.addEventListener('DOMContentLoaded', function() {
    const enlargedContainer = document.querySelector('.enlarged-img-container');
    const enlargedImg = document.querySelector('.enlarged-img');

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