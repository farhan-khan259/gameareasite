function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    const stepTime = Math.max(Math.floor(duration / range), 1);
    let current = start;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Start the animations after page load
window.addEventListener("load", () => {
    animateValue("clientsCount", 0, 500, 5000);
    animateValue("projectsCount", 0, 150, 5000);
});

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    const stepTime = Math.max(Math.floor(duration / range), 1);
    let current = start;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.addEventListener("load", () => {
    animateValue("happyClients", 0, 150, 5000); // Happy Clients
    animateValue("globalClients", 0, 50, 5000); // Clients Globally
    animateValue("usersAcquired", 0, 100, 5000); // Users Acquired
    animateValue("awardsWon", 0, 15, 5000); // Awards Won
});



function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}