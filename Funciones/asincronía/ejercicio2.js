
function descargaDatos(){

    return new Promise(function(resolve, reject){

        setTimeout (function(){

            let tiempo = Math.random();

            if (tiempo < 0.3){
                reject(`Error al descargar los datos` + tiempo);
            }else{
                resolve(`Datos descargados correctamente` + tiempo);
            }
        },2000);

    });
}

descargaDatos()
    .then(function(mensaje){
        console.log(mensaje);
    })
    .catch(function(error){
        console.log(error);
    })