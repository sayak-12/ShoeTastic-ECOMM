const nav = document.querySelector(".navigation");
const navicon = document.querySelector(".menuout");
const navdiv = document.querySelector(".vmenu");
const links = document.querySelectorAll(".vmenu li");

nav.addEventListener('click', () => {
    navdiv.classList.toggle('open');
    navicon.classList.toggle('open');
});