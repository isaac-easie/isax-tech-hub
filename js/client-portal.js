// ===== Client Portal JavaScript ===== 

// Tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Update active tab button
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Hide all forms
        authForms.forEach(form => form.style.display = 'none');

        // Show selected form
        document.getElementById(`${tabName}Form`).style.display = 'block';
    });
});

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const credentials = {
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value
        };

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('userName', credentials.email);
                
                // Show dashboard
                showDashboard();
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        }
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const password = document.getElementById('regPassword').value;
        const confirm = document.getElementById('regConfirm').value;

        if (password !== confirm) {
            alert('Passwords do not match!');
            return;
        }

        const userData = {
            fullname: document.getElementById('regName').value,
            email: document.getElementById('regEmail').value,
            password: password
        };

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Registration successful! Please login.');
                registerForm.reset();
                // Switch to login tab
                document.querySelector('[data-tab="login"]').click();
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration.');
        }
    });
}

// Show Dashboard
function showDashboard() {
    const portalAuth = document.getElementById('portalAuth');
    const portalDashboard = document.getElementById('portalDashboard');
    const clientName = document.getElementById('clientName');

    if (portalAuth && portalDashboard) {
        portalAuth.style.display = 'none';
        portalDashboard.style.display = 'block';
        clientName.textContent = localStorage.getItem('userName') || 'User';
    }
}

// Logout Handler
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        
        const portalAuth = document.getElementById('portalAuth');
        const portalDashboard = document.getElementById('portalDashboard');
        
        if (portalAuth && portalDashboard) {
            portalAuth.style.display = 'block';
            portalDashboard.style.display = 'none';
        }
    });
}

// Submit New Order
const newOrderForm = document.getElementById('newOrderForm');
if (newOrderForm) {
    newOrderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const orderData = {
            service: document.getElementById('serviceType').value,
            description: document.getElementById('description').value
        };

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                alert('Order submitted successfully!');
                newOrderForm.reset();
                // Refresh orders list
                loadOrders();
            } else {
                alert('Failed to submit order.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

// Load Orders
function loadOrders() {
    console.log('Loading orders from server...');
    // This would typically fetch from API
}

// Check if user is logged in on page load
window.addEventListener('load', () => {
    const token = localStorage.getItem('token');
    if (token && document.getElementById('portalDashboard')) {
        showDashboard();
    }
});

console.log('Client Portal JavaScript loaded!');
