export const errorHandler = (error, req, res, next) => {
    const statusCode = error.status || 500;

    res.status(statusCode).json({
    status: "error",
    message:
        statusCode === 500
        ? "Error interno del servidor"
        : error.message,
    });
};
