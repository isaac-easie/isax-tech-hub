// ===== Portfolio Page JavaScript ===== 

// Filter Portfolio Items
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Filter items
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Add click event to portfolio items
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        alert(`Project: ${title}\n\n${description}`);
    });
});

console.log('Portfolio JavaScript loaded!');
