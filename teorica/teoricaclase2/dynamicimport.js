// ESTA ES UNA CALCULADORA SOLO SE UTILIZARA SI MI PROGRAMA ESA EN MODO "CALCULOS".

export default class calculadora {
    sumar = (num1, num2) => num1 + num2;
    restar = (num1, num2) => num1 - num2
}

// aqui seria en index.js

let modo = "calculos"

async function ejemploImport() {
    if (modo === "calculos") {
        const { default: calculadora } = await import('./calculadora.js');
        let calculadora2 = new calculadora();
        console.log(calculadora2.sumar(1, 2))// 3
    }
}
ejemploImport();