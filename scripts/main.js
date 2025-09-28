// This file contains JavaScript code that adds interactivity to the landing pages, such as form validation or dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Form validation for a contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Example: Dynamic content update
    const dynamicContentButton = document.getElementById('dynamic-content-button');
    if (dynamicContentButton) {
        dynamicContentButton.addEventListener('click', function() {
            const dynamicContent = document.getElementById('dynamic-content');
            dynamicContent.innerHTML = 'This content was updated dynamically!';
        });
    }
});