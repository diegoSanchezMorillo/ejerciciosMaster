"use strict";
function addAllThisNumbers(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(suma);
}
addAllThisNumbers(2, 2, 8, 25);
