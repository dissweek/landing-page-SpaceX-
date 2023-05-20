let burgerBtn = document.querySelector(".header__burger-menu")
let burgerMenuContainer = document.querySelector(".header__wrapper-container ")
console.log(burgerMenuContainer)


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
console.log(window.pageXOffset)