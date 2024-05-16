// Ejemplos
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