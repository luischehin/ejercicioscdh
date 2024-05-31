class Evento {
    nombre;
    lugar;
    precio;
    capacidad;
    fecha;
    participantes;

    constructor(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString(), participantes = []) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.precio = precio;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.participantes = participantes;
    }
}



class ticketManager {
    // El # significa que es una variable privada
    #precioBaseGanancia = 1.15;
    eventos;
    id = 0;

    constructor() {
        this.eventos = [];
        this.id = 1;
    }

    getEventos() {
        return this.eventos;
    }

    agregarEvento(evento) {
        evento.precio = evento.precio * this.#precioBaseGanancia;
        evento.id = this.id++;


        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario) {
        // compruebo q el usuario exista
        const evento = this.eventos.filter(evento => evento.id === idEvento);
        if (!evento) {
            console.log("El evento no existe");
            return;
        }
        // compruebo que el usuario no este registrado 
        const user = evento.participantes.find(user => user === idUsuario);
        if (user) {
            console.log("El usuario esta registrado");
            return;
        }
        // obtengo el id del evento para reemplazar los datos
        const indexEvento = this.eventos.findIndex(evento => evento.id === idEvento);

        // agrego el usuario
        evento.participantes.push(idUsuario);

        this.eventos[indexEvento] = evento;

        console.log("usuario agregado");
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const evento = this.eventos.find((evento) => evento.id === idEvento);

        if (!evento) {
            console.log("el evento no existe");
            return;
        }
        const nuevoEvento = new this.eventos(evento.nombre, nuevaLocalidad, evento.precio, evento.capacidad, nuevaFecha);

        nuevoEvento.id = this.id++;

        this.eventos.push(nuevoEvento);

        console.log("se puso el evento en gira");
    }
}


//Prueba 
const manager = new ticketManager();

const nuevoEvento = new Evento(
    "charla dev", "usina del arte", 250
);
manager.agregarEvento(nuevoEvento);
console.log(manager.getEventos());

// agregar participantes
manager.agregarUsuario(1, 1);

console.log(manager.getEventos());

// poner evento en gira 
manager.ponerEventoEnGira(2, "tucuman", new Date().toLocaleDateString());
console.log(manager.getEventos())
