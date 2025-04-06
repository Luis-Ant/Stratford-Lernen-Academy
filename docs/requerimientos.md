# Requerimientos del Sistema: Stratford Lernen Academy

Este documento detalla los **requerimientos funcionales** y **no funcionales** para el desarrollo del sistema "Stratford Lernen Academy". El propósito del sistema es gestionar de manera eficiente las operaciones de la academia con múltiples sucursales, ofreciendo una plataforma robusta para administradores, profesores y estudiantes.

---

## Introducción

El sistema "Stratford Lernen Academy" está diseñado para centralizar la gestión de la academia educativa, permitiendo a los **administradores** supervisar sucursales, asignaturas y usuarios, mientras que los **profesores** y **estudiantes** interactúan en un entorno digital similar a Google Classroom. Este documento especifica las funcionalidades clave que el sistema debe incluir y las características técnicas esenciales para garantizar su rendimiento, seguridad y escalabilidad.

---

## Requerimientos Funcionales

Los requerimientos funcionales se organizan en tres secciones principales según el tipo de usuario: **Administradores**, **Profesores** y **Estudiantes**. A continuación, se detallan las funcionalidades específicas para cada rol, junto con una sección de funcionalidades comunes.

### 1. Sección de Administradores

Los administradores tienen el control total del sistema, gestionando sucursales, asignaturas y usuarios desde una interfaz intuitiva.

#### 1.1 Gestión de Sucursales

- **Crear sucursales**: Registrar nuevas sucursales con campos como _nombre_, _dirección_ y _logo_.
- **Leer sucursales**: Mostrar una lista de sucursales existentes con sus detalles en una vista clara.
- **Actualizar sucursales**: Editar información existente, incluyendo la opción de actualizar el logo.
- **Eliminar sucursales**: Borrar sucursales obsoletas, con una confirmación para evitar errores.
- **Asociar logo**: Permitir la carga de un logo único para cada sucursal.

#### 1.2 Gestión de Asignaturas

- **Crear asignaturas**: Añadir nuevas asignaturas con _nombre_ y _descripción_.
- **Leer asignaturas**: Listar todas las asignaturas, indicando los profesores asignados o "No asignado" si no los hay.
- **Actualizar asignaturas**: Modificar detalles de asignaturas existentes.
- **Eliminar asignaturas**: Retirar asignaturas innecesarias del sistema.
- **Asignar profesores**: Vincular uno o más profesores a cada asignatura.

#### 1.3 Gestión de Usuarios

- **Crear usuarios**: Generar cuentas para administradores, profesores y estudiantes con roles específicos.
- **Leer usuarios**: Mostrar una lista filtrable de usuarios por rol (_administrador_, _profesor_, _estudiante_).
- **Actualizar usuarios**: Editar datos de usuarios, como nombres o roles.
- **Eliminar usuarios**: Retirar usuarios que ya no pertenezcan a la academia.
- **Mensajes personalizados**: Mostrar un saludo al iniciar sesión, ej. _"Welcome, Ana López"_.

#### 1.4 Interfaz y Navegación

- **Barra lateral**: Incluir un menú con opciones como _Sucursales_, _Asignaturas_, _Usuarios_, _Grupos_ y _Cerrar Sesión_.
- **Botones de acción**: Ofrecer botones visibles para _Agregar_, _Editar_ y _Eliminar_ en cada sección.

### 2. Sección de Profesores

Los profesores gestionan cursos, tareas y comunicación con estudiantes desde la plataforma educativa integrada.

#### 2.1 Gestión de Cursos

- **Visualizar cursos**: Listar los cursos impartidos por el profesor con sus detalles.

#### 2.2 Gestión de Tareas

- **Crear tareas**: Publicar tareas con _título_, _instrucciones_, _fecha límite_ y _archivos adjuntos_.
- **Recibir entregas**: Ver las tareas enviadas por los estudiantes con sus archivos.
- **Calificar tareas**: Asignar notas y comentarios a las entregas.

#### 2.3 Herramientas de Comunicación

- **Publicar anuncios**: Compartir mensajes en el flujo del curso para todos los estudiantes.
- **Comentarios privados**: Enviar retroalimentación personalizada a cada estudiante.

#### 2.4 Libro de Calificaciones

- **Registrar calificaciones**: Mantener un historial de notas por curso y estudiante.
- **Exportar datos**: Permitir descargar calificaciones en formatos como _CSV_.

#### 2.5 Flujo de Curso

- **Feed de actividad**: Mostrar un resumen de tareas pendientes, anuncios y actualizaciones recientes.

### 3. Sección de Estudiantes

Los estudiantes acceden a sus cursos, completan tareas y reciben retroalimentación en un entorno sencillo y funcional.

#### 3.1 Gestión de Cursos

- **Ver detalles**: Acceder a información del curso, como tareas y anuncios.

#### 3.2 Gestión de Tareas

- **Enviar tareas**: Subir archivos y entregar tareas antes de la fecha límite.
- **Consultar calificaciones**: Revisar notas y comentarios del profesor.

#### 3.3 Comunicación

- **Leer anuncios**: Ver publicaciones del profesor en el flujo del curso.
- **Mensajes privados**: Contactar al profesor si está habilitado.

#### 3.4 Flujo de Curso

- **Feed de actividad**: Consultar tareas pendientes y actualizaciones en tiempo real.

#### 3.5 Libro de Calificaciones

- **Ver calificaciones**: Acceder a un resumen personal de notas por curso.

### 4. Funcionalidades Comunes

Estas características aplican a todos los usuarios del sistema.

#### 4.1 Autenticación Segura

- **Inicio de sesión**: Proporcionar un formulario con campos para _usuario_ y _contraseña_, con opción de mostrar/ocultar la contraseña.
- **Autenticación de sesión**: Acceso mediante credenciales únicas por usuario.
- **Control de acceso**: Restringir funcionalidades según el rol del usuario.

---

## Requerimientos No Funcionales

Los requerimientos no funcionales aseguran que el sistema sea eficiente, seguro y fácil de usar. A continuación, se detallan las características clave:

### 1. Escalabilidad

- Soporte para múltiples sucursales y un número creciente de usuarios sin pérdida de rendimiento.
- Capacidad para manejar volúmenes crecientes de datos (cursos, tareas, usuarios).

### 2. Rendimiento

- Tiempo de respuesta inferior a **2 segundos** para acciones y carga de páginas.
- Manejo eficiente de operaciones simultáneas, como entregas masivas de tareas.

### 3. Seguridad

- **Autenticación**: Uso de cifrado para contraseñas y tokens JWT.
- **Datos sensibles**: Encriptación de información personal y calificaciones.
- **Protección**: Medidas contra ataques como inyección SQL y XSS.

### 4. Usabilidad

- Interfaz intuitiva y accesible para usuarios con distintos niveles técnicos.
- Diseño alineado con la identidad visual de "Stratford Lernen Academy" (colores, logos, tipografía).

### 5. Confiabilidad

- Disponibilidad del **99.9%**, con mínimas interrupciones.
- Respaldos automáticos y recuperación de datos ante fallos.

### 6. Mantenibilidad

- Código modular y bien documentado para facilitar actualizaciones.
- Estructura que permita añadir funcionalidades sin afectar el sistema existente.

---

## Apéndices

### Glosario

- **CRUD**: Crear, Leer, Actualizar, Eliminar.
- **JWT**: JSON Web Token, método de autenticación segura.
- **Feed**: Flujo de actividad en tiempo real.

---
