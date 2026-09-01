
function addAllThisNumbers (...numeros:number[]):void{
    let suma:number = 0;

    for(let i = 0; i < numeros.length; i++ ){
        suma += numeros[i];
    }
    console.log(suma);
}

addAllThisNumbers(2,2,8,25);