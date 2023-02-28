const countdown = () => {
    const countDate = new Date('March 10, 2023 00:00:00');
    const now = new Date().getTime();
    const gap = countDate - now;



    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    const textHour = Math.floor(gap / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    console.log(textHour, textMinute, textSecond);


    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;



};

setInterval(countdown, 1000)

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


const walletNav = document.getElementById('wallet-desktop-menu');

const walletToggle = document.getElementById('wallet-name');
const walletToggleDesktop = document.getElementById('wallet');
const walletExit = document.getElementById('wallet-exit-btn');

walletToggle.addEventListener('click', () => {
    const visibility = walletNav.getAttribute('data-visible')

    console.log(visibility);

    if (visibility === "false") {
        walletNav.setAttribute("data-visible", true);
    }

});

walletToggleDesktop.addEventListener('click', () => {
    const visibility = walletNav.getAttribute('data-visible')

    console.log(visibility);

    if (visibility === "false") {
        walletNav.setAttribute("data-visible", true);
    }

});

walletExit.addEventListener('click', () => {
    const visibility = walletNav.getAttribute("data-visible")

    console.log(visibility)


    if (visibility === "true") {
        walletNav.setAttribute("data-visible", false)
    }

});


const filterPopUp = document.getElementById('filter-pop-up-menu');
const filterToggle = document.getElementById('filter-dropdown')
const filterExit = document.getElementById('filter-mobile-exit-btn')

filterToggle.addEventListener('click', () => {
    const visibility = filterPopUp.getAttribute('data-visible')

    console.log(visibility);

    if (visibility === "false") {
        filterPopUp.setAttribute("data-visible", true);
    }

});

filterExit.addEventListener('click', () => {
    const visibility = filterPopUp.getAttribute('data-visible')

    console.log(visibility)

    if (visibility === "true") {
        filterPopUp.setAttribute("data-visible", false);
    }

});



window.addEventListener('load', () => {
    let scrollElement = document.querySelector('.media-scroller');
    scrollElement.scrollLeft = (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
});

window.addEventListener('load', () => {
    let scrollElement = document.querySelector('.nft-carousel-two');
    scrollElement.scrollLeft = (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
});