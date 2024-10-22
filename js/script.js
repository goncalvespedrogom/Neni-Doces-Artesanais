$(document).ready(function() {
    ScrollReveal().reveal('#cta', {
        origin: 'left', 
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left', 
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('#testimonial-chef', {
        origin: 'left', 
        duration: 1000,
        distance: '20%',
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right', 
        duration: 1000,
        distance: '20%',
    });
});

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});