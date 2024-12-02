document.addEventListener('DOMContentLoaded', () => {
    const DARK_MODE_CLASS = 'dark-mode';
    const STORAGE_KEY = 'darkModeEnabled';
    const root = document.documentElement;

    // Check localStorage and apply dark mode if enabled
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
        root.classList.add(DARK_MODE_CLASS);
    }

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-dark-mode';
    
    // Create sun and moon elements
    const sunIcon = document.createElement('span');
    sunIcon.classList.add('sun');
    sunIcon.textContent = '☼'; // Sun icon (black)

    const moonIcon = document.createElement('span');
    moonIcon.classList.add('moon');
    moonIcon.textContent = '☾'; // Moon icon (white)

    toggleButton.appendChild(sunIcon);
    toggleButton.appendChild(moonIcon);

    // Find the header element where you want to add the button
    const headerElement = document.querySelector('header'); // Assuming you have a <header> element
    headerElement.appendChild(toggleButton); // Append the button to the header

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        const isDarkMode = root.classList.toggle(DARK_MODE_CLASS);
        localStorage.setItem(STORAGE_KEY, isDarkMode);
    });
});
