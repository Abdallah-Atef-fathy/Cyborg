
// Start Toggale Menu
let bar = document.getElementById("bar");
let links = document.querySelector(".links");
bar.addEventListener("click" , function() {
    bar.classList.toggle("open");
    if(bar.classList.contains("open")) {
        links.style.display = `block`;
        links.style.transform = `translateY(14rem)`;
    }else{
        links.style.display = `none`;
    }
})
// End Toggale Menu
let nav = document.querySelector(".nav");
let welcom = document.querySelector(".welcome");
let pl1 = document.getElementById("pl-1");
let h1 = document.getElementById("h1-1");
let btn1 = document.getElementById("btn-1");
let h12 = document.getElementById("h1-2");
let boxes = document.querySelector(".boxes");
let h13 = document.getElementById("h1-3");
let footer = document.getElementById("footer")
window.onload = function() {
    nav.style.transform = `translateX(0rem)`;
    welcom.style.transform = `translateY(0px)`;
    welcom.style.opacity = `1`;
    pl1.style.transform = `translateX(0rem)`;
    h1.style.transform = `translateX(0rem)`;
    btn1.style.transform = `translateX(0rem)`;
    h12.style.transform = `translateX(0rem)`;
    boxes.style.opacity = `1`;
}
window.addEventListener("scroll" , function() {
    if(this.scrollY >= 800) {
        h13.style.transform = `translateX(0rem)`;
    }
    if(this.scrollY >= 1300) {
        footer.style.opacity = `1`;
    }
})
ScrollReveal().reveal('.box', { delay: 500 } ,{ duration: 500 } ,{ reset: true });
ScrollReveal().reveal('.table', { delay: 500 } ,{ reset: true });
