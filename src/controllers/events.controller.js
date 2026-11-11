import eventsService from "../services/events.service.js";

export const getAllEvents = async (req, res, next) => {
    try {
    const events = await eventsService.getEvents();

    res.status(200).json({
        status: "success",
        payload: events,
    });
    } catch (error) {
    next(error);
    }
};

export const getEventById = async (req, res, next) => {
    try {
    const event = await eventsService.getEventById(req.params.id);

    if (!event) {
        return res.status(404).json({
        status: "error",
        message: "Evento no encontrado",
        });
    }

    res.status(200).json({
        status: "success",
        payload: event,
    });
    } catch (error) {
    next(error);
    }
};