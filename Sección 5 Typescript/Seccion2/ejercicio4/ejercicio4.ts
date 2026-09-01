
function calcularImpuesto(precio:number, impuesto:number = 21):void{
    let iva:number = impuesto / 100;
    let total:number = precio +(precio * iva);
    console.log(total);
}

calcularImpuesto(8);