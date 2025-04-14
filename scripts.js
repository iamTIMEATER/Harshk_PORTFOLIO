// Function to toggle menu visibility
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show-menu');
}

// Function to close the menu when close button is clicked
function closeMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-menu');
}

