# ProyectoGPS

Sistema integral de gestión y protección animal que permite registrar mascotas, reportar casos de maltrato animal y compartir consejos sobre el cuidado de animales.

## Descripción

ProyectoGPS es una plataforma web diseñada para facilitar la gestión de mascotas y la denuncia de casos de maltrato o abandono animal. El sistema cuenta con diferentes roles de usuario (adoptantes, cuidadores y administradores) y permite:

- Registro y gestión de mascotas con información detallada
- Sistema de denuncias para reportar casos de maltrato, abandono, pérdida y otros incidentes
- Publicación de consejos sobre cuidado animal
- Gestión de perfiles de usuario
- Galería de imágenes para mascotas y denuncias

## Tecnologías Utilizadas

### Backend
- **Node.js** con **Express.js** - Framework del servidor
- **MongoDB** con **Mongoose** - Base de datos NoSQL
- **JWT (jsonwebtoken)** - Autenticación y autorización
- **Bcrypt** - Encriptación de contraseñas
- **Multer** - Manejo de carga de archivos/imágenes
- **CORS** - Configuración de políticas de origen cruzado
- **Dotenv** - Gestión de variables de entorno
- **Nodemon** - Desarrollo con recarga automática

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Build tool y dev server
- **React Router DOM** - Navegación entre páginas
- **Axios** - Cliente HTTP para peticiones a la API
- **Bootstrap** y **React Bootstrap** - Framework CSS y componentes
- **Tailwind CSS** - Utilidades CSS
- **Material Design Bootstrap (MDB)** - Componentes UI adicionales
- **SweetAlert2** - Alertas y notificaciones elegantes
- **React Bootstrap Icons** - Iconografía

## Estructura del Proyecto

```
ProyectoGPS/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Lógica de negocio
│   │   │   ├── consejo.controllers.js
│   │   │   ├── denuncia.controllers.js
│   │   │   ├── mascota.controllers.js
│   │   │   └── usuario.controllers.js
│   │   ├── models/           # Modelos de datos (Mongoose)
│   │   │   ├── Consejo.js
│   │   │   ├── Denuncia.js
│   │   │   ├── Mascota.js
│   │   │   └── Usuario.js
│   │   ├── routes/           # Rutas de la API
│   │   │   ├── consejo.js
│   │   │   ├── denuncia.js
│   │   │   ├── mascota.js
│   │   │   └── usuario.js
│   │   ├── middlewares/      # Middlewares personalizados
│   │   │   ├── authMiddleware.js
│   │   │   └── multer.js
│   │   ├── helper/           # Funciones auxiliares
│   │   │   └── generarJWT.js
│   │   └── uploads/          # Archivos subidos
│   ├── app.js                # Configuración principal del servidor
│   ├── config.js             # Configuración de la base de datos
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/       # Componentes reutilizables
    │   ├── context/          # Context API (AuthProvider)
    │   ├── hooks/            # Custom hooks
    │   ├── layout/           # Componentes de layout
    │   ├── pages/            # Páginas de la aplicación
    │   │   ├── denuncias/
    │   │   ├── mascotas/
    │   │   └── user/
    │   ├── utils/            # Utilidades
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Modelos de Datos

### Usuario
- Nombre, apellidos, fecha de nacimiento
- Email, teléfono, dirección
- Contraseña encriptada
- Rol: adoptante, cuidador o admin
- Imagen de perfil
- Referencias a sus mascotas

### Mascota
- Nombre, descripción
- Especie, raza, edad, tamaño
- Información de vacunas
- Estado de esterilización
- Imágenes
- Referencia al usuario propietario

### Denuncia
- Título y descripción
- Fecha de creación
- Tipo de denuncia:
  - Pérdida de Mascotas
  - Negligencias
  - Animales Peligrosos
  - Maltrato Animal
  - Abandono
  - Sobreexplotación Animal
  - Otros
- Imágenes de evidencia

### Consejo
- ID del consejo
- Título y descripción
- Fecha de publicación
- Imágenes ilustrativas

## Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- MongoDB (local o servicio en la nube como MongoDB Atlas)
- npm o yarn

### Configuración del Backend

1. Navegar a la carpeta backend:
```bash
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` con las siguientes variables:
```env
PORT=3000
MONGODB_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta
```

4. Iniciar el servidor:
```bash
npm run dev          # Modo desarrollo
npm run watch        # Modo desarrollo con nodemon
```

### Configuración del Frontend

1. Navegar a la carpeta frontend:
```bash
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar la URL del backend en los archivos necesarios

4. Iniciar la aplicación:
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
```

## API Endpoints

### Usuarios
- `POST /api/register` - Registro de usuario
- `POST /api/login` - Inicio de sesión
- `GET /api/perfil` - Obtener perfil (autenticado)
- `PUT /api/perfil` - Actualizar perfil (autenticado)

### Mascotas
- `GET /api/mascotas` - Listar todas las mascotas
- `GET /api/mascotas/:id` - Obtener una mascota
- `POST /api/mascotas` - Crear mascota (autenticado)
- `PUT /api/mascotas/:id` - Actualizar mascota (autenticado)
- `DELETE /api/mascotas/:id` - Eliminar mascota (autenticado)

### Denuncias
- `GET /api/denuncias` - Listar denuncias
- `GET /api/denuncias/:id` - Obtener una denuncia
- `POST /api/denuncias` - Crear denuncia
- `PUT /api/denuncias/:id` - Actualizar denuncia
- `DELETE /api/denuncias/:id` - Eliminar denuncia

### Consejos
- `GET /api/consejos` - Listar consejos
- `GET /api/consejos/:id` - Obtener un consejo
- `POST /api/consejos` - Crear consejo (admin)
- `PUT /api/consejos/:id` - Actualizar consejo (admin)
- `DELETE /api/consejos/:id` - Eliminar consejo (admin)

## Características Principales

- **Autenticación y Autorización**: Sistema de login/registro con JWT y roles de usuario
- **Gestión de Imágenes**: Carga y almacenamiento de múltiples imágenes
- **Interfaz Responsive**: Diseño adaptable a dispositivos móviles y desktop
- **Validación de Datos**: Validación en frontend y backend
- **Sistema de Alertas**: Notificaciones visuales con SweetAlert2
- **Protección de Rutas**: Middleware de autenticación para rutas protegidas

## Scripts Disponibles

### Backend
- `npm run dev` - Ejecutar servidor en modo desarrollo
- `npm run watch` - Ejecutar con nodemon (recarga automática)

### Frontend
- `npm run dev` - Servidor de desarrollo con Vite
- `npm run build` - Generar build de producción
- `npm run preview` - Previsualizar build de producción
- `npm run lint` - Ejecutar ESLint

## Contribución

Si deseas contribuir al proyecto:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

ISC License

## Contacto

Para más información sobre el proyecto, contactar al equipo de desarrollo.
