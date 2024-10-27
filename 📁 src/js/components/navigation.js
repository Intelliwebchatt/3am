export const initNavigation = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    navToggle?.addEventListener('click', () => {
        mainNav.classList.toggle('is-active');
        navToggle.classList.toggle('is-active');
    });
};
