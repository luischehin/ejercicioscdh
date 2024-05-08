// REGISTRADOR DE TICKETS DE EVENTOS

// ¿Cómo lo hacemos?
// Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

// 1) Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
// 2) La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
// 3) Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
// 4) Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
// -nombre
// -lugar
// -precio (deberá agregarse un 0.15 del valor original)
// -capacidad (50 por defecto)
// -fecha (hoy por defecto)
// 5) El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.
// 6) Debe contar con un método “agregarUsuario” El cual recibirá:
// -id del evento (debe existir, agregar validaciones)
// -id del usuario
// 7)El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
// 8) Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
// 9) Debe contar con un método “ponerEventoEnGira” El cual recibirá:
// -id del evento
// -nueva localidad
// -nueva fecha
// 10) El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades

class Evento {
    nombre;
    lugar;
    precio;
    capacidad;
    fecha;
    participantes;


    constructor(
        nombre,
        lugar,
        precio,
        capacidad = 50,
        fecha = new Date().toLocaleDateString(),
        participantes = []
    ) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.precio = precio;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.participantes = participantes;
    }
}


class TicketManager {
    //el # -> significa variable privada 
    #precioBaseGanancia = 1.15;
    eventos;
    id;

    constructor() {
        this.eventos = [];
        this.id = 1;
    }

    getEventos() {
        return this.eventos;
    }

    agregarEvento(evento) {
        evento.precio = evento.precio * this.#precioBaseGanancia;
        evento.id = ++this.id;

        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario) {
        // Compruebo que el evento exista
        const evento = this.eventos.find((evento) => evento.id === idEvento);
        if (!evento) {
            console.log("El evento no existe");
            return;
        }

        // Compruebo que el usuario no este registrad
        const user = evento.participantes.find((user) => user === idUsuario);

        if (user) {
            console.log("El usuario esta registrado");
            return;
        }

        // Obtengo el id del evento para reemplazar los datos
        const indexEvento = this.eventos.findIndex((evento) => evento.id === idEvento);

        // Agregamos el usuario
        evento.participantes.push(idUsuario);

        this.eventos[indexEvento] = evento;

        console.log("Usuario agregado")
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        // Compruebo que el evento exista
        const evento = this.eventos.find((evento) => evento.id === idEvento);

        if (!evento) {
            console.log("El evento no existe");
            return;
        }

        const nuevoEvento = new Evento(
            evento.nombre,
            nuevaLocalidad,
            evento.precio,
            evento.capacidad,
            nuevaFecha
        );

        nuevoEvento.id = this.id++;

        this.eventos.push(nuevoEvento);

        console.log("Se pueso el evento en gira");
    }

}


//Prueba 
const manager = new TicketManager();

const nuevoEvento = new Evento(
    "Charla Dev", "Usina del arte", 250
);

manager.agregarEvento(nuevoEvento);

// console.log(manager.getEventos());


// Agregar participantes
manager.agregarUsuario(1, 1);

console.log(manager.getEventos());

//Poner evento en gira
manager.ponerEventoEnGira(2, "Puerto madero", new Date().toLocaleDateString());
console.log(manager.getEventos());

