
import Event from "../models/Event.js";



class EventDAO {
    async getAll() {
    return Event.find().lean();
    }

    async getById(id) {
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return null;
    }

    return Event.findById(id).lean();
    }
}

export default new EventDAO();
