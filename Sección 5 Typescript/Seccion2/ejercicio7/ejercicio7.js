"use strict";
const caja = document.querySelector(".cajaName");
const boton = document.querySelector(".buttonEnviar");
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById("formulario");
    if (!formulario) {
        console.log("no hay formulario");
        return;
    }
    formulario.addEventListener("submit", mostrarNombre);
});
function mostrarNombre(event) {
    event.preventDefault();
    const form = event.currentTarget;
    let nombre = caja.value;
    if (!nombre) {
        console.log("El nombre no puede estar vacío");
        return;
    }
    console.log(nombre);
}
