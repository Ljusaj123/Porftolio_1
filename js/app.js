const menu = document.querySelector('.navbar__hamburger');
const navbar= document.querySelector('.navbar__menu');


menu.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
    menu.classList.toggle('is-active');
});