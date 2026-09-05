interface Combinacion {
    numeros:number[],
    estrellas?:number[]
}

interface Result{
    combination:Combinacion,
    dayOfWeek:string,
    drawDate:string,
    game:string,
    jackpot:string
}


document.addEventListener("DOMContentLoaded", ()=>{
    const formulario = document.getElementById("formBoletos") as HTMLFormElement;
    const juego = document.getElementById("tipoSorteo") as HTMLSelectElement;

    if(formulario){
        formulario.addEventListener("submit", (e:SubmitEvent) =>{

            e.preventDefault();//Evitamos que la página se recargue

            const inputNumeros = document.querySelectorAll<HTMLInputElement>(".numberSorteo");//Decimos de dónde vamos a coger los números

            const numerosIngresados:number[] = Array.from(inputNumeros).map(input => Number(input.value));//añadimos los números introducidos a un Array
            const sorteoSeleccionado = juego?.value;//añadimos el tipo de juego
            const combinacion:Combinacion ={
                numeros:numerosIngresados
            }
            console.log(combinacion);
            
            comprobar(sorteoSeleccionado,combinacion);
            
        })
    }
    
})

async function comprobar(game:string,combinacion:Combinacion) {
   
    const response = await fetch(`https://api.loteriasapi.com/api/v1/results/${game}/check?numbers=${combinacion}`, {
            method: 'GET',
            headers: {
            'X-API-Key': 'lat_94a25532_82097db0e3c26a7a17e65edda64a57726adfc00418fde893731b6a1a9813f2da',
            'Content-Type': 'application/json'
            }
        });


            if(!response.ok){
                throw new Error("Error al obtener el resultado");
                ;
                
            }
        const data:Result = await response.json();
        console.log(data);
}