/*const num1 = 6, num2 = 10;

let suma = num1 + num2;
console.log(`La suma entre ${num1} y ${num2} es ${suma}`); 
*/

//tipos de funcion :arrow funtion, declaracion, expresion, anonima

//funcion suma
const sumar=(num1, num2)=>{
    let suma=num1+num2
    console.log(`La suma entre ${num1} y ${num2} es ${suma}`);
}


//funcion restar
function restar(num1,num2){
    let resta=num1-num2;
    console.log(`La resta entre ${num1} y ${num2} es ${resta}`)

}
//funcion multiplicar
function multiplicar(num1,num2){
    let multiplicacion=num1*num2;
    console.log(`La multiplicacion entre ${num1} y ${num2} es ${multiplicacion}`)
}
//funcion divicion
function dividir(num1,num2){
    let divicion=num1/num2;
    console.log(`La divicion entre ${num1} y ${num2} es ${divicion}`)
}
//funcion potencia
function potenciar(num1,num2){
    let potencia=Math.pow(num1,num2);
    console.log(`El elevado de ${num1} a la potencia de ${num2} es ${potencia}`)
}
//funcion radicacion
function radicar(num1,num2){
    if(num1 <0){ return undefined}

    let radicacion=Math.pow(num1,1/num2);
    console.log(`EL radicado de ${num1} a la ${num2} es ${radicacion}`)
}

/*
exports.suma = sumar
exports.resta = restar;
exports.multiplicacion = multiplicar;
exports.divicion = dividir;
exports.potencia = potenciar;
exports.radicacion = radicar;
*/

const operaciones ={};
operaciones.suma=sumar;
operaciones.resta = restar;
operaciones.multiplicacion = multiplicar;
operaciones.divicion = dividir;
operaciones.potencia = potenciar;
operaciones.radicacion = radicar;

module.exports = operaciones;

