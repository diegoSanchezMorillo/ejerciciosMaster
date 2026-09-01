

type TipoFecha = string | Date;

function mostrarFecha (fecha:TipoFecha){

    if(typeof fecha === "string"){
        console.log(fecha);
    }else{
        fecha = new Date();
        let diaSemana:string = fecha.toLocaleDateString("es-ES", {weekday:"long"});
        let dia:string = fecha.toLocaleDateString("es-ES", {day:"numeric"});
        let mes:string = fecha.toLocaleDateString("es-ES",{month:"long"});
        console.log(`${diaSemana}, ${dia} de ${mes}`);
    }

}

let hoy = new Date();

mostrarFecha(hoy);