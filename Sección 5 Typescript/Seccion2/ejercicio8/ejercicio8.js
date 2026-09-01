"use strict";
//Declaramos la variable que cumple con la forma del objeto
const Luis = {
    nombre: "luis",
    añoNacimiento: 1983,
    cuidad: "Segovia"
};
//Función tipada que retorna un array con la forma de la tupla
function getPersonInfo(year, persona) {
    const edad = year - persona.añoNacimiento;
    return [persona.nombre, edad];
}
const result = getPersonInfo(2025, Luis);
console.log(result);
