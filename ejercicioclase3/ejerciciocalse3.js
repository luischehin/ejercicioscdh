function sumar(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject("Operacion incesaria")
        }
        if (num1 + num2 <= 0) {
            reject("La calculadora solo devuelve numeros positivos");

        }
        resolve(num1 + num2);
    })
}
function restar(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject("Operacion incesaria")
        }
        if (num1 - num2 <= 0) {
            reject("La calculadora solo devuelve numeros positivos");

        }
        resolve(num1 - num2);
    })
}

function multiplicar(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 <= 0 || num2 <= 0) {
            reject("Operacion rechazada")
        }
        if (num1 * num2 <= 0) {
            reject("La calculadora solo devuelve numeros positivos");

        }
        resolve(num1 * num2);
    })
}
function dividir(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 <= 0 || num2 <= 0) {
            reject("Operacion rechazada")
        }
        if (num1 / num2 <= 0) {
            reject("La calculadora solo devuelve numeros positivos");

        }
        resolve(num1 / num2);
    })
}

async function calculos() {
    const num1 = 50
    const num2 = 10
    try {
        const sumarResultado = await sumar(num1, num2)
        const restarResultado = await restar(num1, num2)
        const multiplicarResultado = await multiplicar(num1, num2)

        console.log(sumarResultado);
        console.log(restarResultado);
        console.log(multiplicarResultado);
    }
    catch (error) {
        console.log(error)
    }
}
calculos();