
function operacion1 (){

    return new Promise (function(resolve,reject){
        setTimeout (function(){
            
            resolve("Resultado de la operación 1");
        },1000);
    });

}

function operacion2(){

     return new Promise (function(resolve,reject){
        setTimeout (function(){
            
            resolve("Resultado de la operación 2");
        },1000);
    });

}

function operacion3(){

     return new Promise (function(resolve,reject){
        setTimeout (function(){
            
            resolve("Resultado de la operación 3");
        },1000);
    });
}


operacion1()
    .then(function(mensaje){
        console.log(mensaje);
        return operacion2();
    })
    .then(function(mensaje){
        console.log(mensaje);
        return operacion3();
    })
    .then(function(mensaje){
        console.log(mensaje);
    })
   