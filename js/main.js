let burgerBtn = document.querySelector(".header__burger-menu")
let burgerMenu= document.querySelector(".header__wrapper-container")
let burgerMenuSpan= document.querySelectorAll(".header__burger-menu--span")

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

burgerBtn.addEventListener("click",()=>{
    burgerMenu.classList.toggle("burger-active")
    burgerBtn.classList.toggle("active")
})
