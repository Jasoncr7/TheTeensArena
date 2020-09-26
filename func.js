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

//slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
