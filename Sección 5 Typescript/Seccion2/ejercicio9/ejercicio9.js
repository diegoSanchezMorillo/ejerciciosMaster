"use strict";
var Medallas;
(function (Medallas) {
    Medallas["First"] = "Oro";
    Medallas["Second"] = "Plata";
    Medallas["Third"] = "Bronce";
})(Medallas || (Medallas = {}));
function showMedalla(clasificacion) {
    console.log(`Has ganado la medalla de ${clasificacion}`);
}
showMedalla("First");
showMedalla("Second");
showMedalla("Third");
