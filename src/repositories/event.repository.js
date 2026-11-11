
import eventDAO from "../dao/event.dao.js";

class EventRepository {
    async getAllEvents() {
    return await eventDAO.getAll();
    }

    async getEventById(id) {
    return await eventDAO.getById(id);
    }
}

export default new EventRepository();
