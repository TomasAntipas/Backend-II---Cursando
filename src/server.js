
import app from "./app.js";
import config from "./config/index.js";

app.listen(config.PORT, () => {
    console.log(`Servidor activo en http://localhost:${config.PORT}`);
    console.log(`Entorno: ${config.NODE_ENV}`);
});
