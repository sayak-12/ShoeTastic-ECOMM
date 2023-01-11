window.onload= function ffn() {
	const nameelem = document.getElementById("hname");
	document.title = "BUY " + (nameelem.innerText) + "at SHOETASTIC";
};


const infoicon = document.querySelector(".offperc ion-icon")
infoicon.addEventListener("click", ()=>{
    document.querySelector(".tt").classList.toggle("active");
})
const nav = document.querySelector(".navigation");
const navicon = document.querySelector(".menuout");
const navdiv = document.querySelector(".vmenu");
const links = document.querySelectorAll(".vmenu li");

nav.addEventListener('click', () => {
    navdiv.classList.toggle('open');
    navicon.classList.toggle('open');
});
const activeimage = document.querySelector(".imagactive");
const bullets = document.querySelectorAll(".bullet");
bullets.forEach((bullet)=>{
    bullet.addEventListener("click", ()=>{
        for (let i = 0; i < bullets.length; i++) {
            const b = bullets[i];
            if(b.classList.contains("active")){
                b.classList.remove("active");
            } 
        }bullet.classList.add("active");
        const imgIn = bullet.querySelector("img");
        const srcname= imgIn.getAttribute("src");
        activeimage.setAttribute("src", srcname);
    })
})