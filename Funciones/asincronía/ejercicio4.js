
function leerArchivo (nombreArchivo){

    return new Promise (function(resolve,reject){

        setTimeout(function(){
            if(nombreArchivo){
                resolve(`Contenido del archivo: ${nombreArchivo}`);
            }else{
                reject("Error: No se proporcionó un nombre del archivo");
            }
        },1000)
    })
}

leerArchivo("")
    .then(function(mensaje){
        console.log(mensaje);
    })
    .catch(function(error){
        console.log(error);
    });