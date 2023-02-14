class TicketManager {
  #precioBaseDeGanancia;

  constructor() {
    this.eventos = [];
    this.#precioBaseDeGanancia = 0.15;
  }

  getEventos = () => {
    return this.eventos;
  };

  agregarEvento = (nombre, lugar, precio) => {
    let evento = {
      id: this.eventos.length + 1,
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad: 50,
      fecha: this.#getFechaHoy(),
      participantes: [],
    };
    this.eventos.push(evento);
  };

  agregarUsuario = (idEvento, idUsuario) => {
    const indiceEvento = this.eventos.findIndex(
      (evento) => evento.id === idEvento
    );

    if (indiceEvento === -1) {
      console.log("El evento no existe");
      return;
    }

    const usuarioRegistrado =
      this.eventos[indiceEvento].participantes.includes(idUsuario);

    if (usuarioRegistrado) {
      console.log("Usuario ya ha sido registrado");
      return;
    }
    this.eventos[indiceEvento].participantes.push(idUsuario);
  };

  ponerEventoEnGira = (idEvento, nuevaLocalidad, nuevaFecha) => {
    const eventoEncontrado = this.eventos.find(
      (evento) => evento.id === idEvento
    );

    if (!eventoEncontrado) {
      console.log("Evento no encontrado");
      return;
    }

    const nuevoEvento = {
      ...eventoEncontrado,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      id: this.eventos.length + 1,
      participantes: [],
    };

    this.eventos.push(nuevoEvento);
    return;
  };

  #getFechaHoy = () => {
    let fecha = new Date();

    let anio = fecha.getFullYear();
    let mes = fecha.getMonth();
    let dia = fecha.getDate();

    return `${dia}-${mes}-${anio}`;
  };
}

// Pruebas
let ticketManager = new TicketManager();

// agregarEvento()
ticketManager.agregarEvento("DevFest", "Edificio Ruta N");
ticketManager.agregarEvento("MUN", "CECAR");

// agregarUsuario()
ticketManager.agregarUsuario(1, 1);

// ponerEventoEnGira()
ticketManager.ponerEventoEnGira(1, "Sincelejo", "30-04-2023");
console.log(ticketManager.getEventos());
