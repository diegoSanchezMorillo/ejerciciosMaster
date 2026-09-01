"use strict";
//EJERCICIO 2
//Asigno los elementos del html
const caja = document.getElementById("cajaNombre");
const boton = document.getElementById("btn");
//Añadimos el listener para cuando se ha click
boton?.addEventListener("click", () => {
    console.log(caja.value); //muestro el valor introducido en el Input
});
//Creamos la función y le decimos que solo valen los tipos align
function alignHTMLElement(dato) {
    console.log(dato);
}
//Le pasamos un parámetro incorrecto
alignHTMLElement("center");
//Creamos la función
function calcularImpuestos(precio, iva) {
    const porcentaje = iva / 100; //Creamos el porcentaje de impuestos
    let total = precio + precio * porcentaje; //Se lo aplicamos al precio
    console.log(total);
}
calcularImpuestos(8, 21);
//EJERCICIO 5
function sumarNumeros(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    console.log(suma);
}
sumarNumeros(2, 4, 5, 2, 3);
//EJERCICIO 6
function printDate(fecha) {
    if (typeof fecha === 'string') {
        console.log(fecha);
    }
    else {
    }
}
let hoy = new Date();
printDate("12/10/2024");
