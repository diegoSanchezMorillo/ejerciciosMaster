
enum Medallas {
    First = "Oro",
    Second = "Plata",
    Third = "Bronce",
}

type PosicionMedalla = keyof typeof Medallas;
function showMedalla(clasificacion:PosicionMedalla){

    console.log(`Has ganado la medalla de ${clasificacion}`);
}

showMedalla("First");
showMedalla("Second");
showMedalla("Third");