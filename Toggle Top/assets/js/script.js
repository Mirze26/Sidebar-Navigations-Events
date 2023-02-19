"use strict"

let topbar = document.querySelector(".topbar");
let closeIcon = document.querySelector(".topbar .close-icon");
let openIcon = document.querySelector(".topbar .open-icon");

openIcon.addEventListener("click",function(){
    topbar.classList.remove("sidebar");
    closeIcon.classList.remove("d-none");
    this.classList.add("d-none")
})


closeIcon.addEventListener("click",function(){
    topbar.classList.add("sidebar");
    openIcon.classList.remove("d-none");
    this.classList.add("d-none")
})
