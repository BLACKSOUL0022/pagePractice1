// Menu button for smartphones & small screens

const dots1 = document.getElementById("smartphonesMenu_icon1");
const dots2 = document.getElementById("smartphonesMenu_icon2");
const dots3 = document.getElementById("smartphonesMenu_icon3");
const smartphonesMenu = document.getElementById("smartphonesMenuID");
const smartphonesNav = document.getElementById("smartphonesNavID");
let isMenuActivated = false;


function showMenu() {
    console.log("this part is working");
    smartphonesMenu.style.transition = "0.75s ease";
    smartphonesNav.style.transition = "0.75s ease";
    dots1.style.transition = "0.75s ease";
    dots2.style.transition = "0.75s ease";
    dots3.style.transition = "0.75s ease";

    
    if (isMenuActivated == false) {
        smartphonesMenu.style.transform = "rotate(720deg)";
        smartphonesNav.style.transform = "translateX(-100%)";
        dots1.style.transform = "translateX(15px)";
        dots3.style.transform = "translateX(-15px)";
        dots1.style.fill = "#fff";
        dots2.style.fill = "#fff";
        dots3.style.fill = "#fff";
        isMenuActivated = true;
        
    } else {
        smartphonesMenu.style.transform = "rotate(0deg)";
        smartphonesNav.style.transform = "translateX(0%)";
        dots1.style.transform = "translateX(0px)";
        dots3.style.transform = "translateX(0px)";
        dots1.style.fill = "#000";
        dots2.style.fill = "#000";
        dots3.style.fill = "#000";
        isMenuActivated = false;
    }

}

// Other pages button 

const morePages_button = document.getElementById("morePages_button");
const arrowbtnSVG = document.getElementById("arrowbtnSVG");
let showOtherPagesActivated = false;

morePages_button.style.transition = "0.75s ease";
arrowbtnSVG.style.transition = "0.75s ease";


morePagesLogo1 = document.getElementById("morePagesLogo1");
morePagesLogo2 = document.getElementById("morePagesLogo2");
morePagesLogo1Img = document.getElementById("morePagesLogo1Img");
morePagesLogo2Img = document.getElementById("morePagesLogo2Img");


function showOtherPages() {
    console.log("its working correctly");

    if (showOtherPagesActivated == false) {
        morePages_button.style.backgroundColor = "#fff";
        arrowbtnSVG.style.fill = "#000";
        arrowbtnSVG.style.transform = "rotate(540deg) translateY(-5px)";


        morePagesLogo1Img.style.transform = "rotate(720deg)";
        morePagesLogo2Img.style.transform = "rotate(720deg)";
        morePagesLogo1.style.transform = "translate(-50px, -80px) scale(1)";
        morePagesLogo2.style.transform = "translate(50px, -80px) scale(1)";
        morePagesLogo1.style.opacity = "1";
        morePagesLogo2.style.opacity = "1";
        showOtherPagesActivated = true;
    } else {
        morePages_button.style.backgroundColor = "#141414";
        arrowbtnSVG.style.fill = "#fff";
        arrowbtnSVG.style.transform = "rotate(0deg) translateY(0px)";

        morePagesLogo1Img.style.transform = "rotate(0deg)";
        morePagesLogo2Img.style.transform = "rotate(0deg)";
        morePagesLogo1.style.transform = "translate(0px, 0px) scale(0)";
        morePagesLogo2.style.transform = "translate(0px, 0px) scale(0)";
        morePagesLogo1.style.opacity = "0";
        morePagesLogo2.style.opacity = "0";
        showOtherPagesActivated = false;
    }

}

// Closing the mobile menu after clicking an option

homeButton = document.getElementById("homeButton");
blogButton = document.getElementById("blogButton");
servicesButton = document.getElementById("servicesButton");
catalogButton = document.getElementById("catalogButton");
contactButton = document.getElementById("contactButton");

homeButton.addEventListener('click', showMenu);
blogButton.addEventListener('click', showMenu);
servicesButton.addEventListener('click', showMenu);
catalogButton.addEventListener('click', showMenu);
contactButton.addEventListener('click', showMenu);
