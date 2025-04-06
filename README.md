# Stratford Lernen Academy

![Stratford Lernen Academy Logo](https://via.placeholder.com/150.png?text=Stratford+Logo)  
**Un sistema de gestión educativa para administradores, profesores y estudiantes.**

---

## Descripción del Proyecto

**Stratford Lernen Academy** es un sistema de gestión educativa diseñado para facilitar la administración de una academia con múltiples sucursales. El sistema está dividido en tres módulos principales:

- **Administradores**: Gestionan sucursales, asignaturas y usuarios (estudiantes y profesores).
- **Profesores**: Crean cursos, asignan tareas, califican entregas y se comunican con estudiantes, inspirados en Google Classroom.
- **Estudiantes**: Acceden a cursos, entregan tareas y reciben retroalimentación, también basado en Google Classroom.

El proyecto utiliza tecnologías modernas para garantizar un rendimiento óptimo, una interfaz intuitiva y una experiencia de usuario fluida.

---

## Tecnologías Utilizadas

- **Frontend**: React (v18+) con Tailwind CSS (v3+)
- **Backend**: Node.js (v16+) con Express (v4+)
- **Base de Datos**: PostgreSQL (v13+)
- **Autenticación**: JSON Web Tokens (JWT)
- **Otras Herramientas**: Git, GitHub Actions, Jest, Sequelize

---

## Características Principales

- **Gestión de Sucursales y Asignaturas**: Los administradores pueden crear, editar y eliminar sucursales y asignaturas, asignando profesores según sea necesario.
- **Cursos y Tareas**: Profesores y estudiantes interactúan en un entorno similar a Google Classroom, con creación de cursos, gestión de tareas y calificaciones.
- **Autenticación Segura**: Acceso basado en roles para garantizar que cada usuario solo vea las funcionalidades correspondientes.
- **Interfaz Responsiva**: Diseño adaptable a dispositivos móviles y de escritorio gracias a Tailwind CSS.
- **Escalabilidad**: Arquitectura diseñada para soportar un número creciente de usuarios y datos.

---

## Estructura del Repositorio

El repositorio está organizado en las siguientes carpetas principales:

- **/frontend**: Código fuente del frontend (React + Tailwind CSS).
- **/backend**: Código fuente del backend (Node.js + Express).
- **/docs**: Documentación técnica del proyecto (ver más abajo).

---

## Documentación

La documentación completa del proyecto está disponible en las siguientes ubicaciones:

- [Requerimientos del Sistema](docs/requerimientos.md) (Detalles de las funcionalidades para administradores, profesores y estudiantes.)
- [Arquitectura Técnica](docs/arquitectura.md) (Descripción de la arquitectura cliente-servidor y tecnologías utilizadas.)
- [Guía de Desarrollo](docs/guia-desarrollo.md) (Instrucciones para configurar el entorno y contribuir al proyecto.)
- [Documentación de la API](docs/api.md) ()

---

## Despliegue

El sistema está diseñado para ser desplegado en entornos de desarrollo y producción:

- **Desarrollo:** Entorno local.
- **Producción:**
  - **Frontend:** Desplegado en Vercel.
  - **Backend:** Desplegado en Heroku o AWS.
  - **Base de Datos:** Hospedada en Amazon RDS o Heroku PostgreSQL.

Más detalles sobre el despliegue serán añadidos en un documento futuro.
