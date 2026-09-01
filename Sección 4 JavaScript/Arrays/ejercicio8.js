let edades = [];
let suma = 0;

// Generar 20 edades aleatorias entre 18 y 35
for (let i = 0; i < 20; i++) {
    let edad = Math.floor(Math.random() * 18) + 18;
    edades.push(edad);
}

// Sumar todas las edades
for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
}

// Calcular la media
let media = suma / edades.length;

// Mostrar resultados
console.log("Edades:", edades);
console.log("La media de edad es:", media);