const BURGER_BTN = document.querySelector(".header__burger-menu")
const BURGER_MENU= document.querySelector(".header__wrapper-container")
const BURGER_BG= document.querySelector(".background__null")

let header = document.querySelector(".header")
window.onscroll = ()=>{
    if (document.documentElement.scrollTop > 50){
        header.classList.add("header__backgroung-half")
    }
    if(document.documentElement.scrollTop == 0){
        header.classList.remove("header__backgroung-half")
    }
    if (document.documentElement.scrollTop > 150){
        header.classList.add("header__backgroung-full")
    }
    if(document.documentElement.scrollTop < 150){
        header.classList.remove("header__backgroung-full")
    }
    if (document.documentElement.scrollTop > 2900){
        header.classList.add("header__backgroung-black")
    }
    if(document.documentElement.scrollTop < 2900){
        header.classList.remove("header__backgroung-black")
    }
}

function burger(){
    BURGER_MENU.classList.toggle("burger-active")
    BURGER_BTN.classList.toggle("active")
    BURGER_BG.classList.toggle("active")
}

// BURGER_BTN.addEventListener("click",()=>{
//     BURGER_MENU.classList.toggle("burger-active")
//     BURGER_BTN.classList.toggle("active")
//     BURGER_BG.classList.toggle("active")
// })
BURGER_BTN.addEventListener("click",burger)
BURGER_BG.addEventListener("click",burger)

