document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-latest-projects-page');
    const scrollThreshold = 50; // Pixels from top before header minimizes

    const adjustHeaderOnScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-latest-projects-page--scrolled');
        } else {
            header.classList.remove('header-latest-projects-page--scrolled');
        }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', adjustHeaderOnScroll);

    // Also call it once on load in case the user reloads while scrolled down
    adjustHeaderOnScroll();
});