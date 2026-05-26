## Instrucciones Paso a Paso

### 1. Crear el Proyecto con Vite
Abrimos una terminal y ejecutamos los siguientes comandos para generar el proyecto base:
```sh
npm create vite@latest mi-tarjeta --template react
cd mi-tarjeta
npm install
```
Luego, iniciamos el servidor de desarrollo:
```sh
npm run dev
```
Esto abrirá la aplicación en `http://localhost:5173/`.

### 2. Crear el Componente `Tarjeta`
Dentro de la carpeta `src`, creamos un archivo llamado `Tarjeta.jsx` y escribimos el siguiente código:
```jsx
function Tarjeta() {
  // Definimos la información estática de la tarjeta
  const nombre = "Ana Pérez";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  // Retornamos el JSX que representa la tarjeta
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;
```

### Explicación de JSX
JSX es una extensión de JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. En el código anterior:
- `<h2>{nombre}</h2>`: Se usan llaves `{}` para insertar valores de variables dentro del JSX.
- Las llaves `{}` solo pueden contener expresiones válidas de JavaScript, como variables o funciones.
- JSX debe tener un solo elemento padre, en este caso `<div>`, que envuelve a los demás elementos.
- Los atributos en JSX, como `style`, se escriben con sintaxis de objeto en JavaScript (`style={{ propiedad: 'valor' }}`).

### 3. Integrar el Componente en `App.jsx`
Abrimos `src/App.jsx` y reemplazamos el código con:
```jsx
import Tarjeta from './Tarjeta';

function App() {
  return (
    <div>
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta />
    </div>
  );
}

export default App;
```

### 4. Ejecutar la Aplicación
Guardamos los cambios y verificamos que la aplicación se ejecute correctamente. Si el servidor de desarrollo no está corriendo, lo iniciamos con:
```sh
npm run dev
```
Luego abrimos el navegador en `http://localhost:5173/` y verificamos que la tarjeta de presentación se muestra correctamente.

## Resultado Final
Al finalizar este workshop, tendremos una tarjeta de presentación simple en React con información estática. Esto permitirá comprender cómo se estructuran los componentes y cómo funciona JSX en React de manera clara y sencilla.

### Recursos Adicionales
- [Documentación oficial de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)