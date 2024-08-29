const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")
const bg = document.querySelector("#bg")
const about = document.querySelector("#about")
const nav = document.querySelector("#nav")
const text_nav = document.querySelector("#text_nav")
const mode = document.querySelector("#mode")
const iheader = document.querySelector("#iheader")
const social1 = document.querySelector("#social1")
const social2 = document.querySelector("#social2")
const about_head = document.querySelector("#about_head")

burger.addEventListener("click", ()=>{
menu.classList.toggle("hidden")

});

mode.addEventListener("click", () => {
    if (mode.src.includes("moon.png")) {
        mode.src = "img/sun.png";
    } else {
        mode.src = "img/moon.png";
    }

    bg.classList.toggle("bg-gray-900")
    about.classList.toggle("bg-gray-900")
    nav.classList.toggle("bg-gray-900")
    text_nav.classList.toggle("text-white")
    iheader.classList.toggle("text-white")
    menu.classList.toggle("bg-white")
    menu.classList.toggle("text-white")
    social1.classList.toggle("hidden")
    social2.classList.toggle("hidden")
    social2.classList.toggle("flex")
    about_head.classList.toggle("text-white")

   

    
    
});