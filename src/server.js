
import app from "./app.js";
import config from "./config/index.js";
import connectDB from "./config/database.js";

const startServer = async () => {
    try {
    await connectDB();

    app.listen(config.PORT, () => {
        console.log(`Servidor activo en http://localhost:${config.PORT}`);
        console.log(`Entorno: ${config.NODE_ENV}`);
    });
    } catch (error) {
    console.error("No se pudo iniciar el servidor:", error.message);
    process.exit(1);
    }
};

startServer();
