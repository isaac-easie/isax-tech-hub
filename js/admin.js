// ===== Admin Dashboard JavaScript ===== 

// Sidebar Navigation
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.admin-section');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = item.getAttribute('href');
        const sectionId = href.substring(1);

        // Update active menu item
        menuItems.forEach(m => m.classList.remove('active'));
        item.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
    });
});

// Logout Handler
const adminLogout = document.getElementById('adminLogout');
if (adminLogout) {
    adminLogout.addEventListener('click', () => {
        localStorage.removeItem('adminToken');
        window.location.href = '/';
    });
}

// Check admin authentication
function checkAdminAuth() {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
        // Redirect to login (not implemented yet)
        console.log('Admin authentication required');
    }
}

// Load Dashboard Stats
async function loadDashboardStats() {
    try {
        const response = await fetch('/api/admin/stats', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Dashboard stats:', data);
            // Update dashboard with data
        }
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

// Load Orders
async function loadOrders() {
    try {
        const response = await fetch('/api/admin/orders', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Orders:', data);
            // Populate orders table
        }
    } catch (error) {
        console.error('Error loading orders:', error);
    }
}

// Mark as read functionality
function markAsRead(messageId) {
    console.log(`Marking message ${messageId} as read`);
    // Implementation would go here
}

// Delete item functionality
function deleteItem(itemType, itemId) {
    if (confirm(`Are you sure you want to delete this ${itemType}?`)) {
        console.log(`Deleting ${itemType} ${itemId}`);
        // Implementation would go here
    }
}

// Export data functionality
function exportData(dataType) {
    console.log(`Exporting ${dataType} data...`);
    alert(`${dataType} data exported successfully!`);
}

// Initialize dashboard on load
window.addEventListener('load', () => {
    checkAdminAuth();
    loadDashboardStats();
    
    // Set first menu item as active
    if (menuItems.length > 0) {
        menuItems[0].classList.add('active');
    }
});

console.log('Admin Dashboard JavaScript loaded!');
