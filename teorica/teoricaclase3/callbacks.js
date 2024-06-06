//Utilizaremos este arreglo de prueba
let varolesOriginales = [1, 2, 3, 4, 5];
// Estamos acostumbrados a leer una funcion map de la siguiente forma:
let nuevosValores = varolesOriginales.map(x => x + 1);// nuevosValores tendra :[2,3,4,5,6]
// Sin embargo, lo que metemos dentro de la funcion map es una funcion (flecha, mas especificamente), que indica que se sume en 1 el valor del numero que este en el arreglo.
// ¿ siempre tenemos que sumar 1 ? NO. Nowotros podemos meter la operacion que queramos, map la ejecutara de manera interna.


let otrosVaroles = valoresOriginales.map(x => x * 2);// otrosValores tendra [2,4,6,8,10]
let masValores = valoresOriginales.map(x => "a");// masValores tendra:["a","a","a","a""a"]
// Notamos que, no importa cuanto cambie la funcion que este metiendo dentro de map, map esta hecho para RECIBIR UNA FUNCION COMO PARAMETRO y poder ejecutarla cuando lo considere pertinente.Ahora. si estructuramos el calback por fuera.


const funcionCallback = (valor) => { //Funcion que evalua si el valor del arreglo es un numero par
    if (valor % 2 === 0) {
        return valor
    }
    else {
        return "no es par"
    }
}
const evaluacionDePares = valoresOriginales.map(funcionCallback); // Estoy pasando la funcion completa como argumento de la funcion map
console.log(evaluacionDePares) // el resultado sera :["no es par",2,"no es par",4,"no es par"];