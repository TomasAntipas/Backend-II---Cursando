
import sessionsService from "../services/sessions.service.js";

export const registerUser = async (req, res, next) => {
    try {
    const user = await sessionsService.register(req.body);

    return res.status(201).json({
        status: "success",
        payload: user,
    });
    } catch (error) {
    next(error);
    }
};

export const loginUser = (req, res) => {
    res.status(200).json({
    status: "success",
    message: "El login se implementará en una próxima etapa.",
    });
};
