//add hovered
let list = document.querySelectorAll(".nav li");
function activeLink(){
    list.forEach((item)=> {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}
list.forEach(item.addEventListener("mouseover", activeLink));
//menu toggle
let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};