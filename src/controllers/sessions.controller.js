export const registerUser = (req, res) => {
    res.status(200).json({
    status: "success",
    message:
        "Endpoint de registro disponible. La lógica de autenticación se implementará en la próxima etapa.",
    });
};

export const loginUser = (req, res) => {
    res.status(200).json({
    status: "success",
    message:
        "Endpoint de login disponible. La lógica de autenticación se implementará en la próxima etapa.",
    });
};
