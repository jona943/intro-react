# CONSTITUCIÓN - Clon de Twitter (Autenticación y Rutas Protegidas)

Este documento establece los principios y estándares innegociables para este proyecto.

## Principios Básicos
1. **Desarrollo Dirigido por Especificaciones (SDD)**: Cada funcionalidad importante debe seguir el flujo: Especificar -> Planificar -> Implementar.
2. **Simplicidad ante todo**: Implementar los requerimientos de la manera más directa posible. Evitar la sobre-ingeniería.
3. **Trazabilidad**: Todas las decisiones técnicas deben estar documentadas en el directorio `.specify/`.

## Stack Técnico
- **Framework**: React (Vite).
- **Lenguaje**: JavaScript (JSX).
- **Enrutamiento**: `react-router-dom`.
- **Gestión de Estado**: Hooks de React (`useState`, `useEffect`).
- **Persistencia**: `localStorage`.
- **Estilos**: CSS Puro (Vanilla CSS) si es necesario.

## Estándares de Desarrollo
- Los componentes deben ser funcionales y modulares.
- Usar etiquetas HTML semánticas.
- Seguir una estructura clara: `src/pages/` para páginas y `src/components/` para componentes reutilizables.
- No usar librerías externas de autenticación (la autenticación es simulada según los requerimientos).

## Definición de "Terminado"
- La funcionalidad coincide con la especificación.
- El código es limpio y legible.
- Verificación manual del flujo (Login -> Home -> Perfil).
