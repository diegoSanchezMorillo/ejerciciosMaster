"use strict";
function calcularImpuesto(precio, impuesto = 21) {
    let iva = impuesto / 100;
    let total = precio + (precio * iva);
    console.log(total);
}
calcularImpuesto(8);
