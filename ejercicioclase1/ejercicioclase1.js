// // REGISTRADOR DE TICKETS DE EVENTOS

// // ¿Cómo lo hacemos?
// // Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

// // 1) Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
// // 2) La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
// // 3) Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
// // 4) Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
// // -nombre
// // -lugar
// // -precio (deberá agregarse un 0.15 del valor original)
// // -capacidad (50 por defecto)
// // -fecha (hoy por defecto)
// // 5) El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.
// // 6) Debe contar con un método “agregarUsuario” El cual recibirá:
// // -id del evento (debe existir, agregar validaciones)
// // -id del usuario
// // 7)El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
// // 8) Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
// // 9) Debe contar con un método “ponerEventoEnGira” El cual recibirá:
// // -id del evento
// // -nueva localidad
// // -nueva fecha
// // 10) El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades

// class Evento {
//     nombre;
//     lugar;
//     precio;
//     capacidad;
//     fecha;
//     participantes;


//     constructor(
//         nombre,
//         lugar,
//         precio,
//         capacidad = 50,
//         fecha = new Date().toLocaleDateString(),
//         participantes = []
//     ) {
//         this.nombre = nombre;
//         this.lugar = lugar;
//         this.precio = precio;
//         this.capacidad = capacidad;
//         this.fecha = fecha;
//         this.participantes = participantes;
//     }
// }


// class TicketManager {
//     //el # -> significa variable privada
//     #precioBaseGanancia = 1.15;
//     eventos;
//     id;

//     constructor() {
//         this.eventos = [];
//         this.id = 1;
//     }

//     getEventos() {
//         return this.eventos;
//     }

//     agregarEvento(evento) {
//         evento.precio = evento.precio * this.#precioBaseGanancia;
//         evento.id = ++this.id;

//         this.eventos.push(evento);
//     }

//     agregarUsuario(idEvento, idUsuario) {
//         // Compruebo que el evento exista
//         const evento = this.eventos.find((evento) => evento.id === idEvento);
//         if (!evento) {
//             console.log("El evento no existe");
//             return;
//         }

//         // Compruebo que el usuario no este registrad
//         const user = evento.participantes.find((user) => user === idUsuario);

//         if (user) {
//             console.log("El usuario esta registrado");
//             return;
//         }

//         // Obtengo el id del evento para reemplazar los datos
//         const indexEvento = this.eventos.findIndex((evento) => evento.id === idEvento);

//         // Agregamos el usuario
//         evento.participantes.push(idUsuario);

//         this.eventos[indexEvento] = evento;

//         console.log("Usuario agregado")
//     }

//     ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
//         // Compruebo que el evento exista
//         const evento = this.eventos.find((evento) => evento.id === idEvento);

//         if (!evento) {
//             console.log("El evento no existe");
//             return;
//         }

//         const nuevoEvento = new Evento(
//             evento.nombre,
//             nuevaLocalidad,
//             evento.precio,
//             evento.capacidad,
//             nuevaFecha
//         );

//         nuevoEvento.id = this.id++;

//         this.eventos.push(nuevoEvento);

//         console.log("Se pueso el evento en gira");
//     }

// }


// //Prueba
// const manager = new TicketManager();

// const nuevoEvento = new Evento(
//     "Charla Dev", "Usina del arte", 250
// );

// manager.agregarEvento(nuevoEvento);

// // console.log(manager.getEventos());


// // Agregar participantes
// manager.agregarUsuario(1, 1);

// console.log(manager.getEventos());

// //Poner evento en gira
// manager.ponerEventoEnGira(2, "Puerto madero", new Date().toLocaleDateString());
// console.log(manager.getEventos());




// CREAR UNA CLASE CONTADOR
// 1) DEFINIR LA CLASE CONTADOR
// 2) LA CLASE SE CREARA CON UN NOMBRE,REPRESENTANDO AL RESPONSABLE DEL CONTADOR
// 3) EL CONTADOR DEBE INICIALIZARSE EN 0.
// 4) DEBE EXISTIR UNA VARIABLE ESTATICA QUE FUNCIONE COMO CONTADOR GLOBAL DE TODAS LAS INSTANCCIAS DE CONTADOR CREADAS.
// 5) DEFINIR EL METODO GETRESPONSABLE, EL CUAL DEBE DEVOLVER EL RESPONSABLE DE DICHO CONTADOR.
// 6) DEFINIR EL METODO CONTAR, EL CUAL DEBE DEVOLVER SOLO LA CUENTA INVIDIDUAL DEL CONTADOR.
// 7) DEFINIR EL METODO GetCuentaIndividual, EL CUAL DEBE DEVOLVER SOLO LA CUENTA INDIVIDUAL DEL CONTADOR 
// 8) DEFINI EL METODO GetCuentaGlobal, EL CUAL DEBE DEVOLVER LA VARIABLE ESTATICA CON EL CONTEO GLOBAL
// 9) REALIZAR DE INDIVIDUALIDAD ENTRE LAS INSTANCIAS


// Creo la clase contador 
class Contador {
    responsable;
    contadorIndividual;
    static contadorGlobal = 0;

    constructor(responsable) {
        // Creo la instancia
        this.responsable = responsable;
        this.contadorIndividual = 0;

        Contador.contadorGlobal++; // Aqui sumo el contador global

        console.log("objeto creado")
    }

    getResponsable() {
        return `El responsable se llama ${this.responsable}`;
    }

    contar = () => {
        this.contadorIndividual++;
    };

    getCuentaIndividual() {
        return this.contadorIndividual;
    }

    static getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

// Prueba de uso
const contador_1 = new Contador("federico rossi");
const contador_2 = new Contador("juan");

contador_1.contar();
contador_1.contar();
contador_1.contar();

contador_2.contar();

// Muestro los datos
console.log(contador_1.getResponsable());
console.log(contador_1.getCuentaIndividual());

console.log(contador_2.getResponsable());
console.log(contador_2.getCuentaIndividual());

console.log(Contador.getCuentaGlobal()); // como muestra me dira 2, significa que hay 2 contadores.
