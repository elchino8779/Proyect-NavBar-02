
const nav = document.querySelector(".navbar");
const selector = document.getElementById("seleccion");
const homeContainer = document.querySelector(".home-container");
const aboutContainer = document.querySelector(".about-container");
const settingContainer = document.querySelector(".setting-container");
const menuContainer = document.querySelector(".menu-container");
const pHome = document.querySelector(".p-home");
const pAbout = document.querySelector(".p-about");
const pSetting = document.querySelector(".p-setting");
const pMenu = document.querySelector(".p-menu");

nav.addEventListener("click", (e) => {

    if(e.target.matches(".bi-house")){
        selector.style.transform = "translateX(0px)";
        homeContainer.style.transform = "translateY(-30px)"
        aboutContainer.style.transform = "translateY(20px)";
        settingContainer.style.transform = "translateY(20px)";
        menuContainer.style.transform = "translateY(20px)";
        pHome.style.opacity = "1";
        pAbout.style.opacity = "0";
        pSetting.style.opacity = "0";
        pMenu.style.opacity = "0";
    }

    if(e.target.matches(".bi-person")){
        selector.style.transform = "translateX(171px)"
        homeContainer.style.transform = "translateY(20px)"
        aboutContainer.style.transform = "translateY(-30px)";
        settingContainer.style.transform = "translateY(20px)";
        menuContainer.style.transform = "translateY(20px)";
        pHome.style.opacity = "0";
        pAbout.style.opacity = "1";
        pSetting.style.opacity = "0";
        pMenu.style.opacity = "0";
    }

    if(e.target.matches(".bi-gear")){
        selector.style.transform = "translateX(357px)"
        homeContainer.style.transform = "translateY(20px)"
        aboutContainer.style.transform = "translateY(20px)";
        settingContainer.style.transform = "translateY(-30px)";
        menuContainer.style.transform = "translateY(20px)";
        pHome.style.opacity = "0";
        pAbout.style.opacity = "0";
        pSetting.style.opacity = "1";
        pMenu.style.opacity = "0";
    }

    if(e.target.matches(".bi-list")){
        selector.style.transform = "translateX(536px)"
        homeContainer.style.transform = "translateY(20px)"
        aboutContainer.style.transform = "translateY(20px)";
        settingContainer.style.transform = "translateY(20px)";
        menuContainer.style.transform = "translateY(-30px)";
        pHome.style.opacity = "0";
        pAbout.style.opacity = "0";
        pSetting.style.opacity = "0";
        pMenu.style.opacity = "1";
    }
})