# Guía de Desarrollo: Stratford Lernen Academy

Este documento proporciona una **guía detallada** para los desarrolladores que trabajarán en el proyecto "Stratford Lernen Academy". Incluye instrucciones para configurar el entorno de desarrollo, las convenciones de código, las herramientas recomendadas y los pasos para contribuir al proyecto. El objetivo es asegurar que todos los miembros del equipo trabajen de manera consistente y eficiente.

---

## Introducción

El proyecto "Stratford Lernen Academy" está construido utilizando **React** con **Tailwind CSS** para el frontend, **Node.js** con **Express** para el backend, y **PostgreSQL** como base de datos. Esta guía ayudará a los desarrolladores a configurar su entorno local, comprender la estructura del código y seguir las mejores prácticas durante el desarrollo.

---

## Índice

- [Requisitos](#requisitos)
- [Clonación del Repositorio](#clonación-del-repositorio)
- [Configuración del Entorno](#configuración-del-entorno)
  - [Backend (Node.js, Express y PostgreSQL)](#backend-nodejs-express-y-postgresql)
  - [Frontend (React y Tailwind CSS)](#frontend-react-y-tailwind-css)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Flujo de trabajo con Git](#Flujo-de-trabajo-con-Git)
- [Recursos Adicionales](#recursos-adicionales)

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu equipo:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/) (para el backend)
- [Git](https://git-scm.com/)

---

## Clonación del Repositorio

Clona el repositorio del proyecto en tu máquina local:

```bash
git clone https://github.com/Luis-Ant/Stratford-Lernen-Academy.git
```

---

## Configuración del Entorno

El proyecto está dividido en dos partes principales: **backend** y **frontend**.

### Backend (Node.js, Express y PostgreSQL)

1. **Navegar a la carpeta del backend:**

```bash
cd backend
```

2. **Instalar las dependencias:**

```bash
npm install
```

3. **Configura las variables de entorno:**

Crea un archivo _.env_ en la carpeta **backend** con el siguiente contenido:

```bash
PORT=3001
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=admin
DB_NAME=Stratford-Lernen-Academy-DB
DB_PORT=5432

```

4. **Configura la Base de Datos:**

- Asegúrate de tener PostgreSQL instalado y en ejecución.
- Crea la base de datos indicada en tu archivo .env.
- Ejecuta las migraciones y semillas:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

5. **Inicia el servidor en modo desarrollo:**

```bash
npm run dev
```

El servidor debería arrancar y estar disponible en **http://localhost:3001**.

### Frontend (React y Tailwind CSS)

1. **Navega a la carpeta del frontend:**

```bash
cd ../frontend
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Inicia el servidor de desarrollo de React:**

```bash
npm start
```

La aplicación se abrirá generalmente en **http://localhost:3000**.

---

## Ejecución del Proyecto

Con ambos servidores en ejecución:

- **Backend**: Corre en http://localhost:3001
- **Frontend**: Corre en http://localhost:3000

El frontend se comunica con el backend a través de las rutas definidas en la API.

---

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

Stratford-Lernen-Academy/
├── backend/
│ ├── config/ # Configuraciones (por ejemplo, conexión a la base de datos)
│ ├── controllers/ # Lógica de negocio y controladores
│ ├── models/ # Definición de modelos (ORM)
│ ├── routes/ # Rutas de la API
│ ├── migrations/ # Migraciones de la base de datos (si se usa Sequelize)
│ ├── seeders/ # Archivos de seed para datos iniciales
│ ├── .env # Variables de entorno para el backend
│ ├── index.js # Punto de entrada del servidor
│ └── package.json # Dependencias y scripts del backend
├── frontend/
│ ├── public/ # Archivos estáticos
│ ├── src/ # Código fuente de React
│ │ ├── components/ # Componentes reutilizables
│ │ ├── pages/ # Páginas de la aplicación
│ │ ├── assets/ # Recursos (imágenes, fuentes, etc.)
│ │ ├── App.js # Componente principal de la aplicación
│ │ └── index.js # Punto de entrada de React
│ ├── tailwind.config.js # Configuración de Tailwind CSS
│ ├── postcss.config.js # Configuración de PostCSS
│ └── package.json # Dependencias y scripts del frontend
├── docs/ # Documentación del proyecto
│ └── especificacion.md # Especificaciones y lineamientos
├── README.md # Información general del proyecto
└── LICENSE # Licencia del proyecto

---

## Flujo de trabajo con Git

Para mantener un flujo de trabajo ordenado y evitar conflictos, se recomienda que cada desarrollador:

- Cree una nueva rama para cada funcionalidad o corrección en la que trabajará:

```bash
git checkout -b nombre-de-la-rama
```

- Una vez completados los cambios, agregue y realice un commit:

```bash
git add .
git commit -m "Descripción de los cambios"
```

- Suba la rama al repositorio remoto:

```bash
git push origin nombre-de-la-rama
```

- Cree una solicitud de extracción (pull request) en GitHub para fusionar los cambios en la rama principal.

**Es importante que los desarrolladores mantengan su copia local del repositorio actualizada. Antes de comenzar a trabajar en nuevas funcionalidades, deben:**

- Cambiar a la rama principal:

```bash
git checkout main
```

- Obtener los últimos cambios:

```bash
git pull origin main
```

- Crear una nueva rama para la nueva funcionalidad:

```bash
git checkout -b nueva-funcionalidad
```

---

## Recursos Adicionales

- [Documentación de Node.js](https://nodejs.org/en/docs/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---
