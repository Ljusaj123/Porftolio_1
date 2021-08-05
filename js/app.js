const menu = document.querySelector('.navbar__hamburger');
const navbar = document.querySelector('.navbar__menu');


menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('is-active');
});

const elem = document.querySelector('.highlight');
const homeMenu = document.querySelector('#home-page');
const projectsMenu = document.querySelector('#projects-page');
const contactMenu = document.querySelector('#contact-page');

const highlightMenu = () => {
    if (window.innerWidth > 650 && window.scrollY < 700) {
        homeMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');


    } else if (window.innerWidth > 650 && window.scrollY < 1400) {
        homeMenu.classList.remove('highlight');
        projectsMenu.classList.add('highlight');
        contactMenu.classList.remove('highlight');


    } else if (window.innerWidth > 650 && window.scrollY < 2345) {
        homeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.add('highlight');
    }
    if ((elem && windoew.innerWidth > 960 && window.scrollY < 650) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('click', highlightMenu);
window.addEventListener('scroll', highlightMenu);