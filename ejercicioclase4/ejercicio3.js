// EJERCICIO DE CALCULADORA DE EDAD
const fechaActual = moment();
const fechaNacimiento = moment("1999-03-20");

if (fechaNacimiento.isVaid()) {
    let dias = fechaActual.diff(fechaNacimiento, "days");
    console.log(dias)

}

// esto en teoria serviria para contar cuantos dias estoy vivo desde que naci.