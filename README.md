# Plataforma de Eventos e Inscripciones


API REST desarrollada con Node.js, Express y MongoDB para gestionar eventos y usuarios de una plataforma de eventos e inscripciones.

El proyecto utiliza una arquitectura modular por capas, MongoDB Atlas como base de datos y Mongoose para la persistencia. Incluye el registro seguro de usuarios mediante bcrypt.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript (ES Modules)
- MongoDB Atlas
- Mongoose
- bcrypt
- dotenv
- Nodemon

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TomasAntipas/Backend-II---Cursando.git
```

Ingresar al directorio:

```bash
cd Backend-II---Cursando
```

Instalar las dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto, tomando como referencia `.env.example`.

Configurar las siguientes variables:

```env
PORT=8080
NODE_ENV=development
MONGO_URL=
JWT_SECRET=
```

- `PORT`: puerto en el que se ejecuta el servidor.
- `NODE_ENV`: entorno de ejecución.
- `MONGO_URL`: URI de conexión a MongoDB Atlas.
- `JWT_SECRET`: variable reservada para futuras etapas de autenticación.

Completar `MONGO_URL` con la URI correspondiente al cluster de MongoDB Atlas.

**Importante:** no compartir ni subir el archivo `.env` al repositorio. Las credenciales deben mantenerse privadas.

## Ejecución

Iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Iniciar el servidor:

```bash
npm start
```

El servidor estará disponible en:

```text
http://localhost:8080
```

La aplicación establece la conexión con MongoDB antes de iniciar el servidor.

## Arquitectura del proyecto

El proyecto implementa una arquitectura por capas que separa las responsabilidades:

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
Model
  ↓
MongoDB
```

Responsabilidades:

- **Routes:** definen los endpoints y vinculan las solicitudes con los controladores.
- **Controllers:** reciben las solicitudes HTTP y devuelven las respuestas.
- **Services:** contienen la lógica de negocio y las validaciones.
- **Repositories:** coordinan el acceso a los datos.
- **DAO:** ejecuta las operaciones de persistencia mediante Mongoose.
- **Models:** definen los esquemas y modelos de MongoDB.
- **Middlewares:** gestionan errores y rutas inexistentes.
- **Config:** centraliza las variables de entorno y la conexión a la base de datos.
- **Utils:** contiene funciones reutilizables, como el helper de bcrypt.

## Estructura del proyecto

```text
src/
├── app.js
├── server.js
├── config/
│   ├── index.js
│   └── database.js
├── routes/
│   ├── health.router.js
│   ├── events.router.js
│   └── sessions.router.js
├── controllers/
│   ├── health.controller.js
│   ├── events.controller.js
│   └── sessions.controller.js
├── services/
│   ├── events.service.js
│   └── sessions.service.js
├── repositories/
│   ├── event.repository.js
│   └── user.repository.js
├── dao/
│   ├── event.dao.js
│   └── user.dao.js
├── models/
│   ├── Event.js
│   └── User.js
├── middlewares/
│   ├── error.middleware.js
│   └── notFound.middleware.js
└── utils/
    └── hash.js
```

## Modelos

### User

El modelo de usuario contempla los siguientes campos:

| Campo | Descripción |
|---|---|
| `first_name` | Nombre del usuario |
| `last_name` | Apellido del usuario |
| `email` | Correo electrónico único y normalizado |
| `password` | Contraseña almacenada mediante hash bcrypt |
| `role` | Rol del usuario |

Los roles permitidos son:

- `user`
- `organizer`
- `admin`

El rol predeterminado es `user`. El registro público no permite modificarlo desde el body de la solicitud.

El campo `password` está excluido de las consultas normales del modelo y nunca se devuelve en la respuesta del registro.

### Event

El modelo de eventos contempla:

- `title`
- `description`
- `date`
- `location`
- `capacity`
- `category`

Los eventos se almacenan en MongoDB mediante Mongoose.

## Endpoints disponibles

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/health` | Verifica el estado del servidor |
| GET | `/api/events` | Obtiene todos los eventos |
| GET | `/api/events/:id` | Obtiene un evento por ID |
| POST | `/api/sessions/register` | Registra un usuario |
| POST | `/api/sessions/login` | Endpoint reservado para futuras etapas |

## Registro de usuarios

### POST `/api/sessions/register`

Permite registrar un nuevo usuario en la plataforma.

**Body esperado:**

```json
{
  "first_name": "Tomas",
  "last_name": "Antipas",
  "email": "tomas@example.com",
  "password": "Prueba123"
}
```

### Validaciones implementadas

- Todos los campos son obligatorios.
- El email debe tener un formato válido.
- El email se normaliza eliminando espacios al inicio y al final y convirtiéndolo a minúsculas.
- La contraseña debe tener al menos 8 caracteres.
- No se permiten emails duplicados.
- El rol se asigna automáticamente como `user`.
- El usuario no puede modificar su rol desde el body de registro.

### Respuesta exitosa — 201 Created

```json
{
  "status": "success",
  "payload": {
    "id": "ID_GENERADO",
    "first_name": "Tomas",
    "last_name": "Antipas",
    "email": "tomas@example.com",
    "role": "user"
  }
}
```

La contraseña no se incluye en la respuesta.

### Respuestas de error

**400 Bad Request — Campos obligatorios faltantes:**

```json
{
  "status": "error",
  "message": "Faltan campos obligatorios"
}
```

**400 Bad Request — Email inválido:**

```json
{
  "status": "error",
  "message": "El formato del email es inválido"
}
```

**400 Bad Request — Contraseña insuficiente:**

```json
{
  "status": "error",
  "message": "La contraseña debe tener al menos 8 caracteres"
}
```

**409 Conflict — Email duplicado:**

```json
{
  "status": "error",
  "message": "El email ya está registrado"
}
```

### Seguridad de las contraseñas

Las contraseñas se procesan mediante la librería bcrypt antes de almacenarse en MongoDB.

El proceso de hash se encuentra centralizado en un helper reutilizable dentro de `src/utils/hash.js`.

De esta manera:

- No se almacenan contraseñas en texto plano.
- Se utiliza bcrypt con 10 rondas de salt.
- La contraseña no se devuelve en la respuesta HTTP.
- El campo `password` está excluido de las consultas normales del modelo.

## Pruebas realizadas

Se verificaron los siguientes escenarios mediante Thunder Client:

| Prueba | Resultado esperado | Estado |
|---|---|---|
| Registro exitoso | 201 Created | Correcto |
| Campos obligatorios faltantes | 400 Bad Request | Correcto |
| Email con formato inválido | 400 Bad Request | Correcto |
| Email duplicado | 409 Conflict | Correcto |
| Asignación automática del rol | `user` | Correcto |
| Intento de modificar el rol desde el body | Se mantiene `user` | A verificar |
| Almacenamiento de contraseña | Hash bcrypt en MongoDB | Correcto |
| Respuesta sin contraseña | No expone el campo password | Correcto |

## Persistencia de datos

La aplicación utiliza MongoDB Atlas como base de datos y Mongoose como herramienta de modelado y persistencia.

La conexión se configura mediante la variable de entorno `MONGO_URL`.

La estructura separa el acceso a los datos mediante DAO y repositories, evitando que los controladores accedan directamente a los modelos.

## Autor

Proyecto desarrollado como parte del curso **Programación Backend II**.