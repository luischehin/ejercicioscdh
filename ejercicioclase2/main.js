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
    eventos = [];
    id = 0;

    getEventos() {
        return this.eventos;
    }

    agregarEvento(evento) {
        evento.precio = evento.precio * this.#precioBaseGanancia;
        evento.id = this.id + 1;


        this.eventos.push(evento);
    }
}

