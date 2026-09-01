
//EJERCICIO 2

//Asigno los elementos del html

const caja = document.getElementById("cajaNombre") as HTMLInputElement;
const boton = document.getElementById("btn") as HTMLButtonElement;
//Añadimos el listener para cuando se ha click
boton?.addEventListener("click",()=>{
    console.log(caja.value);//muestro el valor introducido en el Input
})

//EJERCICIO 3

//Creamos los tipos que son válidos 
type align = "center" | "right" | "left";
//Creamos la función y le decimos que solo valen los tipos align
function alignHTMLElement (dato:align){
    console.log(dato);
}
//Le pasamos un parámetro incorrecto
alignHTMLElement("center");

// EJERCICIO 4
//Creamos el type para que solo se pueda introducir 21 %
type Impuesto = 21;
//Creamos la función
function calcularImpuestos(precio:number, iva:Impuesto){

    const porcentaje = iva/100;//Creamos el porcentaje de impuestos

    let total = precio + precio*porcentaje;//Se lo aplicamos al precio

    console.log(total);
}

calcularImpuestos(8,21);    


//EJERCICIO 5

function sumarNumeros(...numeros:number[]):void{
   let suma:number = 0;
    for(let i = 0; i < numeros.length ; i++){
        suma = suma + numeros[i] 
    }
    console.log(suma);
}

sumarNumeros(2,4,5,2,3);

//EJERCICIO 6

function printDate(fecha:String | Date){

    if (typeof fecha === 'string'){
        console.log(fecha);
    }else{
        
    }
}

let hoy: Date = new Date();
printDate("12/10/2024")