"use strict";
const box = document.getElementById("name");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log(box.value);
});
