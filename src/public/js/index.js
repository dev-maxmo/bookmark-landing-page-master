const toggler = document.querySelector(".header__toggler");
const mobileMenu = document.querySelector(".header__mobile-menu");
const mobileButton = document.querySelector(".header__mobile-menu-button");
const headerSocialIcons = document.querySelectorAll(".header__socials-link");
const mobileLink = document.querySelectorAll(".header__mobile-link");
const body = document.querySelector("body");
const headerLogo = document.querySelector(".header__logo-link");
const togglerLine = document.querySelectorAll("span");

toggler.addEventListener('click', () => {
    toggler.classList.toggle("open");
    mobileMenu.classList.toggle("active");
    mobileButton.classList.toggle("vissible");

    if(mobileMenu.classList.contains("active")) {
        body.classList.add("noscroll");
    }
    else {
        body.classList.remove("noscroll");
    };

    if(toggler.classList.contains("open")) {
        headerLogo.classList.add("white");
        togglerLine.forEach((e) => {
            e.classList.add("bg-white");
        });
        mobileLink.forEach((e) => {
            e.classList.add("vissible");
        });
        headerSocialIcons.forEach((e) => {
            e.classList.add("vissible");
        });
    }
    else {
        headerLogo.classList.remove("white");
        togglerLine.forEach((e) => {
            e.classList.remove("bg-white");
        });
        mobileLink.forEach((e) => {
            e.classList.remove("vissible");
        });
        headerSocialIcons.forEach((e) => {
            e.classList.remove("vissible");
        });
    }
});