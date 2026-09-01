
const caja = document.querySelector(".cajaName") as HTMLInputElement;
const boton = document.querySelector(".buttonEnviar") as HTMLButtonElement;

document.addEventListener('DOMContentLoaded', ():void => {
    const formulario = document.getElementById("formulario")as HTMLFormElement | null;

    if(!formulario){
        console.log("no hay formulario");
        return;
    }

    formulario.addEventListener("submit",mostrarNombre);

});

function mostrarNombre(event: SubmitEvent):void{

    event.preventDefault();

    const form = event.currentTarget;
    let nombre = caja.value;
    if(!nombre){
        console.log("El nombre no puede estar vacío");
        return;
    }
        console.log(nombre);
    
}