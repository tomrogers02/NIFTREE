const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');
const navStickyBar = document.querySelector('header');
var navLinks = document.getElementsByClassName("nav-links");
const heroSecondTitle = document.getElementById('upper-title');
const heroThirdTitle = document.getElementById('lower-subtitle');
var socialLinksHero = document.getElementsByClassName('bi');
const leftHeroLine = document.getElementById('social-line');
const emailAddress = document.getElementById('email');






toggle.addEventListener('click', function () {
  this.classList.toggle('bi-sunset-fill');

  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = '#f5f5f5';
    body.style.color = 'black';
    body.style.transition = '2s';
    navStickyBar.style.background = '#f5f5f5';
    heroSecondTitle.style.color = ' black'
    heroThirdTitle.style.color = 'black';
    emailAddress.style.color = 'black'
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "black";
    }

    for (var i = 0; i < socialLinksHero.length; i++) {
      socialLinksHero[i].style.color = "black";
    }






  } else {
    body.style.background = '#222229';
    body.style.color = 'white';
    body.style.transition = '2s';

    navStickyBar.style.background = '#222229';
    heroSecondTitle.style.color = ' #c6c6c6'
    heroThirdTitle.style.color = '#c6c6c6';
    emailAddress.style.color = 'white'

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "white";
    }

    for (var i = 0; i < socialLinksHero.length; i++) {
      socialLinksHero[i].style.color = "white";
    }
  }
});


const primaryNav = document.getElementById('desktop-nav');
const navToggle = document.getElementById('mobile-cta');
const mobileExit = document.getElementById('mobile-exit');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  console.log(visibility);

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
  }

});


mobileExit.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible")

  console.log(visibility)

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false)
  }

});