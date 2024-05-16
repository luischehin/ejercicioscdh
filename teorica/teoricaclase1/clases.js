// Comenzamos utilizando la palabra reservada "class"
class nombreDeMiClase {
    constructor(parametrosDeCreacion) {
        console.log("Nuevo objeto creado");
        this.variableInterna = 2;
        //Cada instancia de la clase contara con variables internas, para poder declararlas y utilizarlas necesitamos colocar el "this" antes de la variable.
    }

    static variableEstatica = 4;
    // La palabra "static" es una variable que puede utilizarse SIN NECESITAR UNA INSTANCIA, ademas todas sus instancias pueden acceder a ella de igual manera. SI ALGUNA INSTANCIA CAMBIA LA VARIABLE ESTATICA, toas las instancias se enteraran.

    metodo1() {
        // Los metodos son funciones que solo puede utilizar una instancia de la clase
        console.log(" Soy un meteodo de la clase")
    }
    metodo2 = () => {
        console.log(`Soy una funcion flecha, puedo incrutar variables: ${this.variableInterna} todo dentro de una clase.`)
    }
}

// Una vez que terminé de definir mi clase, es hora de instanciar
// Usaremos el operador "new" El cual crea una instancia de la clase.
let instancia = new nombreDeMiClase(); // se ejecutará el constructor diciendo " nuevo objeto creado" (constructor)

// Ahora la instancia cuenta con las variables y metedoso definidios en la clase previamente
console.log(instancia.variableInterna);
instancia.metodo1();
instancia.metodo2();
// Para usar la variable estática, no es necesaria la instancia, simplemente lo llamamos desde la clase

nombreDeMiClase.variableEstatica;

//La magia esta en que, como la variable es un molde, se puede crear multiples instancias de esta 

let instancia_2 = new nombreDeMiClase() // Se ejecutara el constructor dicendo "nuevo objeto creado" 
let instancia_3 = new nombreDeMiClase() // se ejecutara el constructor diceindo "nuevo objeto creado"

// Cada instancia sera diferenetes de las otras en cuanto a sus variables y meteodos ( excepto los static).


// Ejemplo
// 1) Se declara una clase PERSONA, la cual debe crearse con un nombre que identifique la instancia.
// 2) Ademas, habra una variable estatica utilizables para todos.
// 3) Se comprobara la individualidad entre las dos instancias.

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static especie = "humano";
    saludar = () => {
        console.log(`hola soy: ${this.nombre}`)
    }
    getEspecie = () => {
        console.log(`Aunque no lo creas, soy un ${Persona.especie}`)
    }
}
let persona1 = new Persona("Jorge")
let persona2 = new Persona("Belen");
persona1.saludar();
persona2.saludar();
persona1.getEspecie();
persona2.getEspecie();