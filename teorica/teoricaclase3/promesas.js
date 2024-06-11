const dividr = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { // Nota que al crear una promise, estamos pasando un callback con dos parametros: resolve y reject
        if (divisor === 0) {
            reject(`No se pueden hacer divisiones entre cero`)
            // Rechazamos la operacion porque no es posible trabajar con una division entre cero, no puedo cumplirle al usuario la promersa que le hice sobre dividir sus numeros
        } else {
            resolve(dividendo / divisor);
            // si los valores son validos, entonces si puedo cumplir la promesa que hice al usuario de dividir sus numeros, por lo tanto utilizaremos el valor
        }
    })
}