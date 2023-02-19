"use strict"

//Bilmirem melim neyi duz yazmamiwam ne qeder 
//axdardim tapmadim, consola cıxmır qaranadıra )))


let toplama = document.querySelector(".main2.btn1.toplama");
let cixma = document.querySelector(".main2 .btn2");
let vurma = document.querySelector(".main2 .btn3");
let bolme = document.querySelector(".main2 .btn4");


toplama.addEventListener("click", function(){
    let num1 = document.querySelector(".main1 .input1 .num1").value
    let num2 = document.querySelector(".main1 .input2 .num2").value
    let sum = Number(num1)+Number(num2);
    let res = document.querySelector(".input3 .res");
    res.value = sum;
})  





