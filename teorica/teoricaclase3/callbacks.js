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
    } ttt
}
const evaluacionDePares = valoresOriginales.map(funcionCallback); // Estoy pasando la funcion completa como argumento de la funcion map
console.log(evaluacionDePares) // el resultado sera :["no es par",2,"no es par",4,"no es par"];



/////////////////////////////  EJEMPLO DE DESCOMPOSICION DE .MAP ///////////////////


//Usaremos el arreglo de prueba 
let arregloDePrueba = [1, 2, 3, 4, 5];
const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        let nuevoValor = callback(arreglo[i]); //Nota como, el callbak que recibi aqui arrba lo estoy ejecutando en este punto. 
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
// Pongamos en comparacion nuestra nueva funcion CON UN CALLBACK y la funcion map.
let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x => x * 2); // El arreglo sera: [2,4,6,8,10]
let nuevoArregloConMap = arregloDePrueba.map(x => x * 2); // El arreglo sera:[2,4,6,8,10]

// Nota que no hay diferencia. Acabamos de recrear la funcion map para entender su funcionamiento interno y viendo DONDE esta utiliznado el callback que enviamos como parametro

// EXTRA: Si queremos que la funcion se ejecute sobre el mismo arreglo y no tener que pasarlo como parametro, debemos agregar nuestra nueva funcion en el prototipo del objeto Array 



Array.prototype.miPropiaFuncionMap = function (callback) {
    let nuevoArreglo = [];
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
let arregloPrueba = [1, 2, 3, 4, 5];
let nuevosValores = arregloPrueba.miPropiaFuncionMap(x => x + 1);
