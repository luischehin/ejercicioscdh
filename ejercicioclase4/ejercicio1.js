const resultado = {}
const limite = 1000
const maximo = 20
for (let i = 0; i < limite; i++) {
    // obtengo el numero random 
    const random = Math.floor(Math.random() * maximo) + 1;
    // chequeo que el numero exista
    if (resultado[random]) {
        // si existe le sumamos uno 
        resultado[random] += 1;
    } else {
        // si no existe se lo crea

        resultado[random] = 1;
    }
}
console.log(resultado);