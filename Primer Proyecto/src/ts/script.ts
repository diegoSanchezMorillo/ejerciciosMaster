
interface Combinacion {
    numeros: number[],
    estrellas?: number[]
}

interface Result{
    game : string,
    drawdate: string,
    combination: Combinacion,
    jackpot?: string


}

const API_BASE_URL = 'https://api.loteriasapi.com/api/v1/results/euromillones/latest"';


document.addEventListener("DOMContentLoaded", ()=>{
    const formulario = document.getElementById("formBoletos") as HTMLFormElement;
    const juego = document.getElementById("tipoSorteo") as HTMLSelectElement;

    if(formulario){
        formulario.addEventListener("submit", (e:SubmitEvent) =>{

            e.preventDefault();//Evitamos que la página se recargue

            const inputNumeros = document.querySelectorAll<HTMLInputElement>(".numberSorteo");//Decimos de dónde vamos a coger los números

            const numerosIngresados:number[] = Array.from(inputNumeros).map(input => Number(input.value));//añadimos los números introducidos a un Array
            const sorteoSeleccionado = juego?.value;//añadimos el tipo de juego

        })
    }
    conectar();
})

async function conectar() {
  try {
    const targetUrl = 'https://loteriasapi.com/api/v1/results/euromillones/latest';
    // Anteponemos corsproxy.io para que el navegador evite el bloqueo CORS
    const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`, {
      method: 'GET',
      headers: {
        'X-API-Key': 'lat_94a25532_82097db0e3c26a7a17e65edda64a57726adfc00418fde893731b6a1a9813f2da',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('¡Conexión realizada con éxito!', data);
    return data;

  } catch (error) {
    console.error('Error durante la conexión:', error);
  }
}