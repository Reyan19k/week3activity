const displayKey = document.querySelector(".key h2");
const displayKeyode = document.querySelector(".keyCode h2");
const keyodeDiv = document.querySelector(".keyCode");

window.addEventListener("keydown", (i) =>{
    displayKey.innerText = i.key;
    displayKeyode.innerText = i.keyCode;
})