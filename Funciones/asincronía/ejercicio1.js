
function temporizador (tiempo, callback){


    setTimeout(function () {
        callback();
    }, tiempo * 1000);

}

function mensaje(){
    console.log("Se ha ejecutado");
}

temporizador(10,mensaje);