

type Persona = {
    nombre:string,
    añoNacimiento:number;
    cuidad?:string // añadimo ? para decir que es opcional
}
//Declaramos la variable que cumple con la forma del objeto
const Luis:Persona ={
    nombre:"luis",
    añoNacimiento:1983,
    cuidad:"Segovia"
}
//Definimos la tupla
type InfoPersona = [string, number];
//Función tipada que retorna un array con la forma de la tupla
function getPersonInfo(year:number, persona:Persona):InfoPersona{
        
        const edad:number = year - persona.añoNacimiento;
        return [persona.nombre,edad];
}

const result = getPersonInfo(2025,Luis);
console.log(result);