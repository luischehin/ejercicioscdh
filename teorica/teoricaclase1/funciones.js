// Ejemplo de funciones 
//1= 
function nombreDeLaFuncion(parametros){
    /* Cuerpo de la funcion, todas las instrucciones internas que necesitamos que la funcion realice.
    */
   let variableParaMiFuncion = 2 ;
   return variableParaMiFuncion;
   /* Con la palabra "return" podemos MANDAR FUERA DEL SCOPE alguna variable que necesite en otra parte del codigo */
}
/* EJEMPLO COMPLETO */ 
 function sumarDosNumeros (numero1, numero2){
    // resultado solo existe dentro de la funcion 
    let resultado;
    resultado= numero1+numero2;
    /* Cuando la funcion acabe, "resultado" muere asi que hay que mandarla afuera*/
     return resultado;
 }
 // Mandamos llamar a la funcion con valores reales
 let total = sumarDosNumeros(2,3);
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
const sumarDosNumeros = (numero1,numero2) => {
    let resultado;
    resultado = numero1+numero2;
    return resultado;
}
const sumarReturnImplicito= (num1,num2)=> num1+num2;
