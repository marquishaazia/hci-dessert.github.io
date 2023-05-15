let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    cart.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    cnteredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-to-top").style.display = "block";
  } else {
    document.querySelector(".scroll-to-top").style.display = "none";
  }
}

document.querySelector(".scroll-to-top").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#close-modal");
