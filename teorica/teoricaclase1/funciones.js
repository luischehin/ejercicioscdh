// EJEMPLO DE FUNCIONES

function nombreDeLaFuncion(parametros) {
    /* Cuerpo de la funcion, todas las instrucciones internas que necesitamos que la funcion realice.
    */
    let variableParaMiFuncion = 2;
    return variableParaMiFuncion;
    /* Con la palabra "return" podemos MANDAR FUERA DEL SCOPE alguna variable que necesite en otra parte del codigo */
}
/* EJEMPLO COMPLETO */
function sumarDosNumeros(numero1, numero2) {
    // resultado solo existe dentro de la funcion 
    let resultado;
    resultado = numero1 + numero2;
    /* Cuando la funcion acabe, "resultado" muere asi que hay que mandarla afuera*/
    return resultado;
}
// Mandamos llamar a la funcion con valores reales
let total = sumarDosNumeros(2, 3);
console.log(total) //5

/* Una funcion flecha es ANONIMA, quiere decir que no tiene nombre, pero puede asignarse a una variable para poder indentificarse. */
const indentificadorDeFuncion = (parametros) => {
    /*Cuerpo de la funcion, todas las instrucciones internas que necesitamos que la funcion realice. */
    let variableParaMiFuncion = 2
    return variableParaMiFuncion;
    /* Con la palabra "return" podemos MANDAR FUERA DEL SCOPE alguna variable que necesite en otra parte del codigo.
    La funcion flecha cuenta con un return IMPLICITO*/
}
/* EJEMPLO COMPLETO */
const sumarDosNumeros = (numero1, numero2) => {
    let resultado;
    resultado = numero1 + numero2;
    return resultado;
}
const sumarReturnImplicito = (num1, num2) => num1 + num2;

// EJEMPLOS DE SCOPE NO VALIDO

function exampleFunction() {
    // x solo se puede utilizar en exampleFunction
    const x = 'declarada en el scope local'
    console.log(x);
}
console.log(x) // ReferenceError : x is not defined

// EJEMPLO DE SCOPE VALIDO

const x = 'declarada en el scope global'

function example() {
    console.log(x) // x existe aca dentro

}
example()// esto no lanza error

console.log(x) // x existe aca fuera tambien.
