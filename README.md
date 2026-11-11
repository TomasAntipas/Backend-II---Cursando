
# Plataforma de Eventos e Inscripciones

## Descripción

API REST desarrollada con Node.js y Express para gestionar eventos e inscripciones de usuarios.

El proyecto utiliza una arquitectura modular por capas y está preparado para incorporar autenticación y persistencia de datos.

## Tecnologías

- Node.js
- Express
- JavaScript (ES Modules)
- dotenv
- Nodemon

## Instalación



```bash
git clone https://github.com/TomasAntipas/Backend-II---Cursando.git








cd Backend-II---Cursando







npm install
```

## Variables de entorno

Crear un archivo `.env` tomando como referencia `.env.example`.

```env
PORT=8080
NODE_ENV=development
MONGO_URL=
JWT_SECRET=
```

## Ejecución



```bash
npm run dev
```

El servidor estará disponible en http://localhost:8080.

## Arquitectura

El proyecto implementa el siguiente flujo:

```text
Router
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
DAO
  ↓
Persistencia
```

Responsabilidades:

- **Routes:** definen los endpoints.
- **Controllers:** gestionan las solicitudes y respuestas HTTP.
- **Services:** contienen la lógica de negocio.
- **Repositories:** coordinan el acceso a los datos.
- **DAO:** administra las operaciones sobre los datos.
- **Models:** representan las entidades.
- **Middlewares:** gestionan errores y rutas inexistentes.
- **Config:** centraliza las variables de entorno.

Actualmente, los eventos se almacenan en memoria mediante un DAO. La conexión con MongoDB se incorporará en una etapa posterior.

## Estructura

```text
src/
├── app.js
├── server.js
├── config/
│   └── index.js
├── routes/
│   ├── health.router.js
│   ├── events.router.js
│   └── sessions.router.js
├── controllers/
│   ├── health.controller.js
│   ├── events.controller.js
│   └── sessions.controller.js
├── services/
│   └── events.service.js
├── repositories/
│   └── event.repository.js
├── dao/
│   └── event.dao.js
├── models/
│   ├── User.js
│   └── Event.js
├── middlewares/
│   ├── error.middleware.js
│   └── notFound.middleware.js
└── utils/
```

## Rutas disponibles

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/health` | Verifica el estado del servidor |
| GET | `/api/events` | Obtiene todos los eventos |
| GET | `/api/events/:id` | Obtiene un evento por ID |
| POST | `/api/sessions/register` | Endpoint inicial de registro |
| POST | `/api/sessions/login` | Endpoint inicial de login |

## Estado del proyecto

Primera pre-entrega: servidor Express configurado, endpoints iniciales implementados, arquitectura por capas aplicada al módulo de eventos y middlewares globales incorporados.

La persistencia en MongoDB y la autenticación se desarrollarán en próximas etapas.


