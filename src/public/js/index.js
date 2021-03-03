// // ========== Variables ==========
const toggler = document.querySelector(".header__toggler");
const mobileMenu = document.querySelector(".header__mobile-menu");
const mobileButton = document.querySelector(".header__mobile-menu-button");
const headerSocialIcons = document.querySelectorAll(".header__socials-link");
const mobileLink = document.querySelectorAll(".header__mobile-link");
const body = document.querySelector("body");
const headerLogo = document.querySelector(".header__logo-link");
const togglerLine = document.querySelectorAll("span");

// ========== Mobile Menu Start ==========
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
// ========== Mobile Menu End ==========

// ========== Tabs Start =========
const featuresButtons = document.querySelectorAll(".tab-btn");
const featuresTab = document.querySelector(".features__tabs");
const featuresContent = document.querySelectorAll(".features__content");

featuresTab.addEventListener("click", (e) => {
    const featuresId = e.target.dataset.id;
    event.preventDefault();
    if (featuresId) {
        // Remove active from other buttons
        featuresButtons.forEach((btn) => {
            btn.classList.remove("btn-active");
            e.target.classList.add("btn-active");
        });
        // Hide other Tabs
        featuresContent.forEach((content) => {
            content.classList.remove("content-active");
        });
        const element = document.getElementById(featuresId);
        element.classList.add("content-active");
    }
});
// ========== Tabs End =========