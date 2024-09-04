const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")
const bg = document.querySelector("#bg")
const about = document.querySelector("#about")
const skills = document.querySelector("#skills")
const contact = document.querySelector("#contact")
const nav = document.querySelector("#nav")
const text_nav = document.querySelector("#text_nav")
const mode = document.querySelector("#mode")
const iheader = document.querySelector("#iheader")
const social1 = document.querySelector("#social1")
const social2 = document.querySelector("#social2")
const about_head = document.querySelector("#about_head")
const skillbar = document.querySelector("#skillbar")
const contactheader = document.querySelector("#contactheader")
const contactheader2 = document.querySelector("#contactheader2")

burger.addEventListener("click", ()=>{
menu.classList.toggle("hidden")

});

mode.addEventListener("click", () => {
    if (mode.src.includes("sun.png")) {
        mode.src = "img/moon.png";
    } else {
        mode.src = "img/sun.png";
    }

    bg.classList.toggle("bg-gray-900")
    about.classList.toggle("bg-gray-900")
    nav.classList.toggle("bg-gray-900")
    nav.classList.toggle("bg-white")
    text_nav.classList.toggle("text-white")
    iheader.classList.toggle("text-white")
    menu.classList.toggle("bg-gray-900")
    menu.classList.toggle("bg-white")
    menu.classList.toggle("text-white")
    social1.classList.toggle("hidden")
    social2.classList.toggle("hidden")
    social2.classList.toggle("flex")
    about_head.classList.toggle("text-white")
    skills.classList.toggle("bg-gray-900")
    skillbar.classList.toggle("text-white")
    contact.classList.toggle("bg-gray-900")
    contactheader.classList.toggle("flex")
    contactheader.classList.toggle("hidden")
    contactheader2.classList.toggle("hidden")
    contactheader2.classList.toggle("flex")
    
   

    
    
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Change this value based on when you want the button to appear
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
