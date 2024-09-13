document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const contactElements = document.querySelectorAll('.contact-info, .contact-form');

    // Form submission handling
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thank you for your message. I will get back to you soon!');
                form.reset();
            } else {
                alert('Oops! There was a problem submitting your form. Please try again.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Oops! There was a problem submitting your form. Please try again.');
        });
    });

    // Animate contact elements sequentially and ensure they stay visible
    let delay = 300; // Set initial delay
    contactElements.forEach((element) => {
        setTimeout(() => {
            element.classList.add('appear');
        }, delay);
        delay += 500; // Increase delay for each element
    });
});
