const countdown = () => {
    const countDate = new Date('August 5, 2023 00:00:00');
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








const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterableCards = document.querySelectorAll('.filterable-cards .card');

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);


    filterableCards.forEach(card => {
        card.classList.add("hide");


        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all")
            card.classList.remove("hide");
    });
};



filterButtons.forEach(button => button.addEventListener("click", filterCards));