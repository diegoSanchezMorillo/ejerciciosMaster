let total = 0;

const cesta = document.getElementById("cesta");




function sumar(producto,name){

     // Buscar el div del producto
    let divProducto = document.getElementById("product" + name);

    // Si no existe, crearlo
    if (!divProducto) {

        divProducto = document.createElement("div");

        divProducto.id = "product" + name;

        // Crear el nombre
        let parrafo = document.createElement("p");
        parrafo.textContent = producto;

        divProducto.appendChild(parrafo);

        // Añadir el div a la cesta
        cesta.appendChild(divProducto);
    }

    // Crear el icono
    let icono = document.createElement("img");

    icono.src = `iconos/${name}.svg`;

    icono.classList.add("icono");

    // Añadir el icono al div del producto
    divProducto.appendChild(icono);
}


function restar(producto, name) {

    let divProducto = document.getElementById("product" + name);

    // Si no existe el producto
    if (!divProducto) {
        alert("No hay productos para eliminar");
        return;
    }

    // Buscar los iconos de ese producto
    let iconos = divProducto.querySelectorAll(".icono");

    // Si hay iconos, eliminar el último
    if (iconos.length > 0) {

        iconos[iconos.length - 1].remove();

    }

    // Si ya no quedan iconos, eliminar el div completo
    if (divProducto.querySelectorAll(".icono").length === 0) {

        divProducto.remove();

    }
}