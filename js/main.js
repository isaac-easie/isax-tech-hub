// ===== Main JavaScript ===== 

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
function scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
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
                alert('Message sent successfully! We will contact you soon.');
                contactForm.reset();
            } else {
                alert('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
}

// Newsletter Signup
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        form.reset();
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to service cards
document.querySelectorAll('.service-card, .article-card, .blog-post').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
});

// Highlight navigation based on scroll position
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

console.log('Main JavaScript loaded successfully!');
