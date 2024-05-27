document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.responsive-container');
    const items = document.querySelectorAll('.item');
    const paginationContainer = document.querySelector('.pagination');

    // Create dots
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active-dot');
        paginationContainer.appendChild(dot);

        // Add click listener to each dot
        dot.addEventListener('click', () => {
            const itemStart = items[index].offsetLeft; // Get the starting point of the clicked item
            container.scrollTo({ left: itemStart, behavior: 'smooth' }); // Scroll to the item
        });
    });

    const dots = document.querySelectorAll('.dot');

    // Function to update active dot based on scroll
    container.addEventListener('scroll', () => {
        let index = Math.round(container.scrollLeft / container.clientWidth);
        dots.forEach(dot => dot.classList.remove('active-dot'));
        if (dots[index]) dots[index].classList.add('active-dot');
    });
});
