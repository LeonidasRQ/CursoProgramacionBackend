class TicketManager {
  #baseProfit;

  constructor() {
    this.events = [];
    this.#baseProfit = 0.15;
  }

  getEvents = () => {
    console.log(this.events);
    return;
  };

  createEvent = (name, place, price, capacity, date) => {
    const event = {
      id: this.events.length + 1,
      name,
      place,
      price: price + this.#baseProfit,
      capacity: capacity ?? 50,
      date: date ?? this.#formatDate(),
      participants: [],
    };

    this.events.push(event);
  };

  addParticipant = (eventId, participantId) => {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);

    if (eventIndex === -1) {
      console.log("This event does not exist");
      return;
    }

    const participantExists =
      this.events[eventIndex].participants.includes(participantId);

    if (participantExists) {
      console.log("The user has already singed up for this event!");
      return;
    }

    this.events[eventIndex].participants.push(participantId);
  };

  rescheduleEvent = (eventId, newPlace, newDate) => {
    const event = this.events.find((event) => event.id === eventId);

    if (!event) {
      console.log("Event not found");
      return;
    }

    const newEvent = {
      ...event,
      id: this.events.length + 1,
      place: newPlace,
      date: newDate,
      participants: [],
    };

    this.events.push(newEvent);
    return;
  };

  #formatDate = () => {
    const date = new Date();

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
}

const ticketManager = new TicketManager();

ticketManager.createEvent("Dev Fest", "Buenos Aires", 150, 100, "30/03/2023");
ticketManager.createEvent("Comicon", "Lima", 90);

ticketManager.addParticipant(1, 1);

ticketManager.rescheduleEvent(1, "Santiado", "30/06/2023");
ticketManager.getEvents();
