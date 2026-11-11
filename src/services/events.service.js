
import eventRepository from "../repositories/event.repository.js";

class EventsService {
    async getEvents() {
    return await eventRepository.getAllEvents();
    }

    async getEventById(id) {
    return await eventRepository.getEventById(id);
    }
}

export default new EventsService();
