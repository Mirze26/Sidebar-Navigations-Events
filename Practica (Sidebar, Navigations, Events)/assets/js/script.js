"use strict"

//sidebar


// let sidebar = document.querySelector(".sidebar");
// let closeIcon = document.querySelector(".sidebar .close-icon");
// let openIcon = document.querySelector(".sidebar .open-icon");

// openIcon.addEventListener("click", function(){
//     sidebar.classList.remove("hide-sidebar");
//     closeIcon.classList.remove("d-none");
//     this.classList.add("d-none")
// })

// closeIcon.addEventListener("click",function(){
//     sidebar.classList.add("hide-sidebar");
//     openIcon.classList.remove("d-none");
//     this.classList.add("d-none");
// })

//---------------------------------------------------------


//let h1 = document.querySelector("h1")
// console.log(h1.parentNode.parentNode.parentNode.style.backgroundColor = "red");
// console.log(h1.nextElementSibling.firstElementChild.innerText)
//console.log(h1.nextElementSibling.children[1].innerText)
//let elem = document.querySelector(".apple ul li:last-child a");
//elem.parentNode.parentNode.parentNode.previousElementSibling.style.backgroundColor = "red";
//elem.closest(".apple").previousElementSibling.style.backgroundColor = "red"

//----------------------------------------------------------------------------------------------------

// let button = document.querySelector("button");
// button.addEventListener("click", function(){
//     this.previousElementSibling.style.backgroundColor = "red";
// })

//----------------------------------------------------------------------

 let input = document.querySelector("#blog input");
// input.addEventListener("keyup",inputEvent)

// function inputEvent(){
//     console.log("input event")
// }



input.addEventListener("keypress", function(event){
    console.log(event.keyCode)
    if(event.key == "Enter"){
        event.preventDefault();
        document.querySelector(".test").click();
    }
})


document.querySelector(".test").onclick = function(){
    alert("trigged")
}

//----------------------------------------------------------