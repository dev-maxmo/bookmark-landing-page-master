const toggler = document.querySelector(".header__toggler");
const mobileMenu = document.querySelector(".header__mobile-menu");
const mobileLink = document.querySelector(".header__mobile-link");
const body = document.querySelector("body");
const headerLogo = document.querySelector(".header__logo-link");
const togglerLine = document.querySelectorAll("span");

toggler.addEventListener('click', () => {
    toggler.classList.toggle("open");
    mobileMenu.classList.toggle("active");
    mobileLink.classList.toggle("vissible");

    if(mobileMenu.classList.contains("active")) {
        body.classList.add("noscroll");
    }
    else {
        body.classList.remove("noscroll");
    };

    if(toggler.classList.contains("open")) {
        headerLogo.classList.add("white");
        togglerLine.classList.add("bg-white");
    }
    else {
        headerLogo.classList.remove("white");
        togglerLine.classList.remove("bg-white");
    }
});