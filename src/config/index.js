
import "dotenv/config";

const PORT = Number(process.env.PORT ?? 8080);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
    throw new Error("PORT debe ser un número entre 1 y 65535.");
}

const NODE_ENV = process.env.NODE_ENV || "development";

const validEnvironments = ["development", "production", "test"];

if (!validEnvironments.includes(NODE_ENV)) {
    throw new Error(
    "NODE_ENV debe ser development, production o test."
    );
}

const MONGO_URL = process.env.MONGO_URL || "";

if (!MONGO_URL) {
    throw new Error("La variable MONGO_URL es obligatoria.");
}

const JWT_SECRET = process.env.JWT_SECRET || "";



const config = {
    PORT,
    NODE_ENV,
    MONGO_URL,
    JWT_SECRET,
};

export default config;
