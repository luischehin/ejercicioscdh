// Exponencial ** permite hacer el equivalente de la operacion Math.pow(base,exp), para elevar un valor base a un exponente dado
let valoresBase = [1, 2, 3, 4, 5, 6] // Esto es un conjunto de valores base
let nuevosValores = valoresBase.map((numero, indice) => numero ** indice);
console.log(nuevosValores); // resultado = 1, 2,9,64,625 etc

// El codigo mostrado arriba toma un arreglo de valores base y con ayuda del operador map, utliza el operador exponencial para elevar el valor base, por su indice (1**0,2**1,3**2,4**3)

// Includes : Corrobora si algun elemento existe dentro de un arreglo 
// El .includes devuelve true o false segun sea el caso, por eso podemos usarlo dentro del if.

let nombres = ['juan', 'pedro', 'luis'];
if (nombres.includes('camilo')) {
    console.log('camilo si aparece dentro del array')
} else {
    console.log("camilo no esta en la base de datos")
}

// En un termino mas resumido, lo que quiero hacer con el includes, es ver si el nombre camilo esta en la base de datos, y si no esta me salta el mensaje de que camilo no esta en la base de datos. . 