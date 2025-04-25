const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menutoggle");
menuToggle.onclick = function(){
    menu.classList.toggle("active");
}