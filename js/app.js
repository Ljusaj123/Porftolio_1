const menu = document.querySelector('.navbar__hamburger');
const hamburger = document.querySelectorAll('.navbar__hamburger-line');
const navbar = document.querySelector('.navbar__menu');


menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.forEach(ham => ham.classList.toggle('open'));
});



const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const expMenu = document.querySelector('#exp-page');
    const projectsMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contact-page');

    if (window.innerWidth > 650 && window.scrollY < 700) {
        homeMenu.classList.add('highlight');
        expMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');


    } else if (window.innerWidth > 650 && window.scrollY < 1400) {
        homeMenu.classList.remove('highlight');
        expMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');


    } else if (window.innerWidth > 650 && window.scrollY < 2500) {
        homeMenu.classList.remove('highlight');
        expMenu.classList.remove('highlight');
        projectsMenu.classList.add('highlight');
        contactMenu.classList.remove('highlight');

    } else if (window.innerWidth > 650 && window.scrollY < 3300) {
        homeMenu.classList.remove('highlight');
        expMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.add('highlight');
    }
    if ((elem && window.innerWidth < 650)) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('click', highlightMenu);
window.addEventListener('scroll', highlightMenu);