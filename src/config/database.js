import mongoose from "mongoose";
import config from "./index.js";

let connectionPromise = null;

const connectDB = async () => {
    if (!config.MONGO_URL) {
    throw new Error("Falta configurar MONGO_URL en el archivo .env");
    }


    if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
    }


    if (connectionPromise) {
    return connectionPromise;
    }

    try {
    connectionPromise = mongoose.connect(config.MONGO_URL);

    await connectionPromise;

    console.log("MongoDB conectado correctamente");
    console.log("Base de datos conectada:", mongoose.connection.name);
    
    return mongoose.connection;
    } catch (error) {
    connectionPromise = null;
    console.error("Error al conectar con MongoDB:", error.message);
    throw error;
    }
};

export default connectDB;