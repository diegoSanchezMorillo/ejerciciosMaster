"use strict";
function mostrarFecha(fecha) {
    if (typeof fecha === "string") {
        console.log(fecha);
    }
    else {
        fecha = new Date();
        let diaSemana = fecha.toLocaleDateString("es-ES", { weekday: "long" });
        let dia = fecha.toLocaleDateString("es-ES", { day: "numeric" });
        let mes = fecha.toLocaleDateString("es-ES", { month: "long" });
        console.log(`${diaSemana}, ${dia} de ${mes}`);
    }
}
let hoy = new Date();
mostrarFecha(hoy);
