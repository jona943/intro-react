# PLAN TÉCNICO - Implementación de Autenticación

Este documento detalla la estrategia de implementación técnica para el sistema de autenticación.

## Estructura de Archivos Propuesta
Crearemos una estructura organizada para separar las páginas de la lógica principal:

```
src/
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Profile.jsx
├── App.jsx
└── main.jsx
```

## 1. Instalación de Dependencias
- Ejecutar `npm install react-router-dom` para manejar el enrutamiento.

## 2. Gestión de Estado Global (App.jsx)
- Usar un estado `user` mediante `useState(null)`.
- Usar `useEffect` al cargar la app para intentar recuperar al usuario de `localStorage.getItem('user')`.
- Crear funciones:
    - `login(username)`: Guarda el objeto `{ username }` en el estado y en `localStorage`.
    - `logout()`: Limpia el estado y elimina la clave de `localStorage`.

## 3. Definición de Rutas
- `/login`: Renderiza el componente `Login`.
- `/`: Renderiza el componente `Home`.
- `/profile`: Implementar una lógica condicional (Ruta Protegida):
    - Si `user` existe -> Renderizar `Profile`.
    - Si `user` es null -> Renderizar `<Navigate to="/login" />`.

## 4. Componentes de Página
- **Login.jsx**: Formulario sencillo con un `input` (para el nombre) y un `button`. Al enviar, llama a `onLogin` y redirige a `/`.
- **Home.jsx**: Muestra un mensaje de bienvenida. Si el usuario está logueado, muestra su nombre y el botón de "Cerrar sesión".
- **Profile.jsx**: Muestra la información del perfil (nombre de usuario).

## 5. Implementación Estética (Liquid Crystal & X Hybrid)
- **Layout de 3 Columnas**:
    - Sidebar (275px), Main (600px), Aside (350px).
- **CSS Variables**: Definir la paleta (naranja #ff6600, gris oscuro #1a1a1a).
- **Glassmorphism Avanzado**: 
    - `background: rgba(22, 24, 28, 0.7)`
    - `backdrop-filter: blur(15px)`
    - `border: 1px solid rgba(255, 255, 255, 0.1)`
    - **Profundidad**: `box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)` (brillo superior).
- **Redondeado**: `border-radius: 20px` o superior (Estilo Píldora para botones).
- **Efecto Grano**: Overlay con ruido sutil para textura vintage.

## 6. Iconografía y Animaciones
- **Iconos**: Usar SVG o caracteres Unicode estilizados para navegación.
- **Transiciones**: `transition: all 0.3s ease-out`.

## 7. Pruebas de Verificación
1. Abrir la app en `/`.
2. Intentar ir a `/profile` manualmente y verificar que redirige a `/login`.
3. Iniciar sesión en `/login`.
4. Verificar que ahora `/profile` es accesible.
5. Recargar la página y verificar que la sesión persiste.
6. Cerrar sesión y verificar que el acceso a `/profile` vuelve a estar restringido.
