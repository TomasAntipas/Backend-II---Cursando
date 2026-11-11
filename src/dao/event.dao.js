
import Event from "../models/Event.js";

const events = [
    new Event({
    title: "Conferencia de Tecnología",
    description: "Encuentro sobre desarrollo de software y nuevas tecnologías.",
    date: "2027-05-20T18:00:00.000Z",
    location: "Córdoba, Argentina",
    capacity: 100,
    category: "Tecnología",
    }),
];

class EventDAO {
    async getAll() {
    return events;
    }

    async getById(id) {
    return events.find((event) => event.id === id) || null;
    }
}

export default new EventDAO();
