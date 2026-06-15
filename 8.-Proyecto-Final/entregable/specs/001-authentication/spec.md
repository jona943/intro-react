# ESPECIFICACIÓN - Sistema de Autenticación para Clon de Twitter

Este documento describe las funcionalidades requeridas desde la perspectiva del usuario.

## Objetivo
Implementar un sistema de acceso que permita identificar al usuario, proteger su información y restringir el acceso a ciertas áreas de la aplicación.

## Historias de Usuario

### 1. Inicio de Sesión (Login)
- **Como** usuario no autenticado,
- **Quiero** poder ingresar mi nombre de usuario en un formulario,
- **Para** acceder a las funcionalidades completas de la aplicación.
- **Criterios de Aceptación**:
    - El formulario debe tener un campo de texto para el nombre de usuario.
    - Al hacer clic en "Iniciar sesión", la aplicación debe recordar quién soy.
    - El usuario debe ser redirigido automáticamente a la página de Inicio (Home).

### 2. Persistencia de Sesión
- **Como** usuario que ya inició sesión,
- **Quiero** que mi sesión se mantenga activa incluso si recargo la página,
- **Para** no tener que volver a loguearme constantemente.
- **Criterios de Aceptación**:
    - Los datos del usuario deben guardarse en el almacenamiento del navegador (`localStorage`).
    - Al cargar la app, se debe verificar si existe un usuario guardado.

### 3. Navegación y Rutas Protegidas
- **Como** administrador de la app,
- **Quiero** que la página de Perfil sea privada,
- **Para** que solo los usuarios logueados puedan ver su propia información.
- **Criterios de Aceptación**:
    - La ruta `/` (Home) muestra un saludo si hay usuario, o contenido general si no.
    - La ruta `/login` es accesible para todos.
    - La ruta `/profile` (Perfil) solo es accesible si hay una sesión activa.
    - Si un usuario no logueado intenta entrar a `/profile`, debe ser redirigido a `/login`.

### 5. Requerimientos Visuales (Estética)
- **Estilo General**: Minimalista con un toque "vintage" de los años 2010.
- **Efectos**:
    - Bordes redondeados en todos los contenedores.
    - Efecto "Liquid Crystal" (Glassmorphism) con opacidad casi transparente.
- **Paleta de Colores**:
    - Base: Oscuros (Negros/Grises profundos).
    - Acentos: Naranjas vibrantes.
    - Tonos: Escala de grises para profundidad.
- **Interactividad**: Ventanas que parecen flotar con desenfoque de fondo (backdrop-filter).
