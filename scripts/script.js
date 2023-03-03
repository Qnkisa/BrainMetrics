var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

