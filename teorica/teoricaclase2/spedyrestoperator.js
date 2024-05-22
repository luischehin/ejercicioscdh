// Dado los siguientes objetos
let objetos1 = {
    propiedad1: 2,
    propiedad2: "b",
    propiedad3: true
}
let objetos2 = {
    propieda1: "c",
    propiedad2: [2, 3, 5, 6, 7]
}
//SPREAD OPERATOR Nos sirve para hacer una destructuracion del objeto, para podre utilizar solo las propiedadesque queremos.
let { propiedad1, propiedad2 } = objeto1; // tomamos el objeto 1 y lo "rompemos" para obtener solo las primeras dos propiedades.
let objeto3 = { ...objeto1, ...objeto2 }// spread operator tambien se puede utilizar para vaciar propiedades de un objeto en otro objeto nuevo.
console.log(objeto3);// Resultado:{propiedad1:"c", propiedad2: [2,3,5,6,7], propiedad3:true}
//Notamos como si dos elementos comparten el mismo nombre de propiedad, se superponen, por lo que propiedad1 y propiedad2 del objeto uno ya no existen dentro del objeto 3, sino que fueron "superpuestos" por propiedad1 y propiedad2 del objeto 2.

//REST OPERATOR nos servira para obtener un objeto SOLO con las propiedades RESTANTES del objeto que hayamos destructurado, por ejemplo:
let objeto4 = {
    a: 1,
    b: 2,
    c: 3
}
let { a, ...rest } = objeto4;
//Indicamos que queremos trabjar con la propiedad a, y guardar en un objeto el resto de las propiedades de ese objeto, en caso de los necesitemos mas adelante.
console.log(rest);// resultado:{b:2, c:3}