
import userRepository from "../repositories/user.repository.js";
import { createHash } from "../utils/hash.js";

class SessionsService {
    async register(userData) {
    const {
        first_name,
        last_name,
        email,
        password,
    } = userData ?? {};

    const firstName =
        typeof first_name === "string" ? first_name.trim() : "";

    const lastName =
        typeof last_name === "string" ? last_name.trim() : "";

    const normalizedEmail =
        typeof email === "string" ? email.trim().toLowerCase() : "";

    if (!firstName || !lastName || !normalizedEmail || !password) {
        const error = new Error("Faltan campos obligatorios");
        error.status = 400;
        throw error;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
        const error = new Error("El formato del email es inválido");
        error.status = 400;
        throw error;
    }

    if (typeof password !== "string" || password.length < 8) {
        const error = new Error(
        "La contraseña debe tener al menos 8 caracteres"
        );
        error.status = 400;
        throw error;
    }

    const existingUser =
        await userRepository.getByEmail(normalizedEmail);

    if (existingUser) {
        const error = new Error("El email ya está registrado");
        error.status = 409;
        throw error;
    }

    const hashedPassword = await createHash(password);

    try {
        const newUser = await userRepository.create({
        first_name: firstName,
        last_name: lastName,
        email: normalizedEmail,
        password: hashedPassword,
        role: "user",
        });

        return {
        id: newUser._id.toString(),
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        role: newUser.role,
        };
    } catch (error) {
        if (error.code === 11000) {
        const duplicateError = new Error(
            "El email ya está registrado"
        );
        duplicateError.status = 409;
        throw duplicateError;
        }

        throw error;
    }
    }
}

export default new SessionsService();
