const home = document.querySelector('#home');
const homeLink = document.querySelector('.home');
const about = document.querySelector('#about');
const aboutLink = document.querySelector('.about');
const services = document.querySelector('#services');
const servicesLink = document.querySelector('.services');
const contact = document.querySelector('#contact');
const contactLink = document.querySelector('.contact');

home.addEventListener("mouseover", (e) => {
    homeLink.classList.add('active');
    aboutLink.classList.remove('active');
    servicesLink.classList.remove('active');
    contactLink.classList.remove('active');
});
about.addEventListener("mouseover", (e) => {
    homeLink.classList.remove('active');
    aboutLink.classList.add('active');
    servicesLink.classList.remove('active');
    contactLink.classList.remove('active');
});
services.addEventListener("mouseover", (e) => {
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    servicesLink.classList.add('active');
    contactLink.classList.remove('active');
});
contact.addEventListener("mouseover", (e) => {
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    servicesLink.classList.remove('active');
    contactLink.classList.add('active');
});