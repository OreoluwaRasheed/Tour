let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#user-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
})


let vid = 1;
setInterval(function () {
    if (vid == 6) {
        vid = 0
    }
    document.querySelector('.controls .active').classList.remove('active');
    videoBtn[vid].classList.add('active');
    let src = videoBtn[vid].getAttribute('data-src');
    document.querySelector('#video-slider').src = src;

    vid++



}, 4000);



videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {

            vid = [...videoBtn].indexOf(btn) + 1
    

        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})




var swiper = new Swiper(".mySwiper ", {
    spacebetween: 20,
    loop: true,
    autoplay:
    {
        delay: 2500,
        disableOnIneraction: false,
    },
    breakpoints:
    {
        640:
        {
            slidesPerView: 1,
        },
        768:
        {
            slidesPerView: 2,

        },
        1024:
        {
            slidesPerView: 3,
        },

    },
});
var swiper = new Swiper(".brand-slider ", {
    spacebetween: 20,
    loop: true,
    autoplay:
    {
        delay: 2500,
        disableOnIneraction: false,
    },
    breakpoints:
    {
        450:
        {
            slidesPerView: 2,
        },
        760:
        {
            slidesPerView: 3,
        },
        991:
        {
            slidesPerView: 4,

        },
        1200:
        {
            slidesPerView: 5,
        },

    },
});