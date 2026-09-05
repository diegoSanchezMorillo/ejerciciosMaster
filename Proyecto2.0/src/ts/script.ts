
conectar();

async function conectar() {
  
    const cajaPrecioMax = document.getElementById("boxNumber") as HTMLDivElement;
    const response = await fetch('https://api.loteriasapi.com/api/v1/results/euromillones/latest', {
    method: 'GET',
    headers: {
      'X-API-Key': 'lat_94a25532_82097db0e3c26a7a17e65edda64a57726adfc00418fde893731b6a1a9813f2da',
      'Content-Type': 'application/json'
        }
     });
        const datos = await response.json();
        console.log(datos);

        const bote = (datos.data.jackpotFormatted);//Cogemos la propiedad que contiene el bote máximo
        const boteSinDecimales = bote.split(',')[0];//Le quitamos los decimales
        //Mostramos en DOM la propiedad en un titulo h2
        const tituloPrecio = document.createElement("h2");
        tituloPrecio.innerHTML=`<h2>${boteSinDecimales} €</h2>` ;
        cajaPrecioMax.appendChild(tituloPrecio);

};



