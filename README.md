# Plataforma de Eventos e Inscripciones

## Descripción

API REST desarrollada con Node.js y Express para una plataforma de gestión de eventos e inscripciones.

El proyecto establece una estructura inicial para administrar usuarios, eventos y sesiones, preparada para incorporar nuevas funcionalidades en futuras etapas.

## Temática

Plataforma de Eventos e Inscripciones. El objetivo es permitir la publicación de eventos y la inscripción de usuarios, con futuras funcionalidades de autenticación, gestión de cupos y administración de participantes.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript (ES Modules)
- dotenv
- Nodemon

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta del proyecto:

```bash
cd backend-ii---cursando
```

Instalar las dependencias:

```bash
npm install
```

## Configuración de variables de entorno

Crear un archivo `.env` en la raíz del proyecto, tomando como referencia `.env.example`.

Variables necesarias:

```env
PORT=8080
NODE_ENV=development
MONGO_URL=
JWT_SECRET=
```

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Para iniciar el servidor:

```bash
npm start
```

El servidor estará disponible en:

`http://localhost:8080`

## Estructura del proyecto

```text
src/
├── app.js
├── server.js
├── config/
├── routes/
│   ├── health.router.js
│   ├── events.router.js
│   └── sessions.router.js
├── controllers/
│   ├── health.controller.js
│   ├── events.controller.js
│   └── sessions.controller.js
├── services/
├── repositories/
├── dao/
├── models/
│   ├── User.js
│   └── Event.js
├── middlewares/
└── utils/
```

## Rutas disponibles

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/health | Verifica el estado del servidor |
| GET | /api/events | Obtiene el listado de eventos |
| POST | /api/sessions/register | Ruta inicial para registro |
| POST | /api/sessions/login | Ruta inicial para login |

## Estado del proyecto

Primera pre-entrega: configuración inicial del servidor Express y organización arquitectónica por capas.

Las funcionalidades de autenticación, persistencia en MongoDB, gestión completa de eventos e inscripciones se incorporarán en próximas etapas.