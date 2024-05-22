let paraLlaveValor = Object.entries(impuestos)
console.log(paraLlaveValor)// resultado [[ impuesto1, 2341], [impuesto2,341], [impuesto3,4611],[impuesto4,111] ]
// Notamos como Object.keys obtiene en arreglos individuales la propiedad con su valor, en caso de que necesitemos utilizarlas por separado.

let soloPropiedades = Object.keys(impuestos) // resultado [impuesto1,impuesto2,impuesto3,impuesto4]
//Ahora podemos obtener solo las propiedades del objeto, sin necesidad de su valor, este metodo es MUY UTIL en codigos profesionales, sin embargo por cuestiones de complejidad se abordadra en elementod practicos mas adelante.


let soloValores = Object.values(impuestos)
console.log(soloValores) // resultado : [2341,4611,1111]
// Teniendo solo los valores del objeto, podemos utilizarlos para hacer un total ( en este ejemplo nos apoyamos de un metodo ya existente conocido como .reduce)

let impuestosTotales = soloValores.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);
console.log(impuestosTotales); //7404, total de todos los impuestos.