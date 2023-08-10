//Mobile navigation toggle on/off function for all pages//

const primaryNav = document.getElementById('mobile-nav');
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



//Desktop wallet pop up on/off toggle//

const walletMenu = document.getElementById('wallet-pop-up-menu-black-square')
const walletDesktopToggle = document.getElementById('wallet')
const walletMobileToggle = document.getElementById('mobile-wallet-name')
const walletExit = document.getElementById('wallet-exit')

walletDesktopToggle.addEventListener('click', () => {
  const visibility = walletMenu.getAttribute('data-visible')

  console.log(visibility);

  if (visibility === "false") {
    walletMenu.setAttribute("data-visible", true);
  }

});

walletMobileToggle.addEventListener('click', () => {
  const visibility = walletMenu.getAttribute('data-visible')

  console.log(visibility);

  if (visibility === "false") {
    walletMenu.setAttribute("data-visible", true);
  }

});

walletExit.addEventListener('click', () => {
  const visibility = walletMenu.getAttribute("data-visible")

  console.log(visibility)

  if (visibility === "true") {
    walletMenu.setAttribute("data-visible", false)
  }

});

//Marketplace filter function//

const filterButtons = document.querySelectorAll('.filters label');
const filterableCards = document.querySelectorAll('.nft-card');

const filterCards = e => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach(card => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    }
  });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));


//Mobile filter drop down menu function//


const statusDropdownToggle = document.querySelector('.status-dropdown');
const currencyDropdownToggle = document.querySelector('.currency-dropdown');

const statusDropdownMenu = statusDropdownToggle.querySelector('.filters');
const currencyDropdownMenu = currencyDropdownToggle.querySelector('.filters');

statusDropdownToggle.addEventListener('click', () => {
  const visibilityStatus = statusDropdownMenu.dataset.visible;

  if (visibilityStatus === "false") {
    statusDropdownMenu.dataset.visible = "true";
    currencyDropdownMenu.dataset.visible = "false"; // Hide the currency dropdown
  } else {
    statusDropdownMenu.dataset.visible = "false";
  }
});

currencyDropdownToggle.addEventListener('click', () => {
  const visibilityCurrency = currencyDropdownMenu.dataset.visible;

  if (visibilityCurrency === "false") {
    currencyDropdownMenu.dataset.visible = "true";
    statusDropdownMenu.dataset.visible = "false"; // Hide the status dropdown
  } else {
    currencyDropdownMenu.dataset.visible = "false";
  }
});