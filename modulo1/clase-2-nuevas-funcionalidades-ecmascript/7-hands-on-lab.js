class TicketManager {
  #precioBaseDeGanancia;

  constructor() {
    this.eventos = [];
    this.#precioBaseDeGanancia = 0.15;
  }

  getEventos = () => {
    return this.eventos;
  };

  agregarEvento = (nombre, lugar, precio, capacidad, fecha) => {
    const evento = {
      id: this.eventos.length + 1,
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad: capacidad ?? 50,
      fecha: fecha ?? this.#fechaHoy(),
      participantes: [],
    };

    this.eventos.push(evento);
    return;
  };

  agregarParticipante = (idEvento, idUsuario) => {
    const indiceEvento = this.eventos.findIndex(
      (evento) => evento.id === idEvento
    );

    if (indiceEvento === -1) {
      console.log("El evento no existe");
      return;
    }

    // comprobamos que el usuario no haya sido registrado anteriormente
    const usuarioRegistrado =
      this.eventos[indiceEvento].participantes.includes(idUsuario);

    if (usuarioRegistrado) {
      console.log("Usuario ya ha sido registrado");
      return;
    }

    this.eventos[indiceEvento].participantes.push(idUsuario);
  };

  ponerEventoEnGira = (idEvento, nuevoLugar, nuevaFecha) => {
    const eventoEncontrado = this.eventos.find(
      (evento) => evento.id === idEvento
    );

    if (!eventoEncontrado) {
      console.log("Evento no encontrado");
      return;
    }

    const nuevoEvento = {
      ...eventoEncontrado,
      id: this.eventos.length + 1,
      lugar: nuevoLugar,
      fecha: nuevaFecha,
      participantes: [],
    };

    this.eventos.push(nuevoEvento);
    return;
  };

  #fechaHoy = () => {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
  };
}

let evento1 = new TicketManager();

evento1.agregarEvento("Dev Fest", "Buenos Aires", 200, 100, "18/02/2023");
evento1.agregarEvento("Comicon", "Bogotá", 500);

evento1.agregarParticipante(1, 5);
evento1.ponerEventoEnGira(1, "Lima", "28/03/2023");
console.log(evento1.getEventos());
