// ===== Contact Page JavaScript ===== 

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        serviceNeeded: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message sent successfully! We will respond within 24 hours.');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    }
});

console.log('Contact JavaScript loaded!');
