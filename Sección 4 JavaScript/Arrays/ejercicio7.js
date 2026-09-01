
let numeros = [1,4,3,7,12,34,65,18,9,25];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

let media = suma / numeros.length;

console.log("La media es:", media);