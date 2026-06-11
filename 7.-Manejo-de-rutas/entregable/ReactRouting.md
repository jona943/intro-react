
## **Instrucciones para el taller

1. **Configuración del entorno:**
   - Asegúrate de tener Node.js y npm instalados.
   - Crea un nuevo proyecto con Vite:
     ```bash
     npm create vite@latest citas-medicas --template react
     ```
   - Instala `react-router-dom`:
     ```bash
     npm install react-router-dom
     ```
   - Arranca el servidor de desarrollo:
     ```bash
     npm run dev
     ```

2. **Configurar las rutas en `App.jsx`**
   - Crea un enrutador básico con las siguientes rutas:
     - `/`: Página de inicio.
     - `/citas`: Lista de citas médicas.
     - `/cita/:id`: Detalles de una cita específica.
     - `/*`: Página de error para rutas no existentes.

3. **Código inicial incompleto**
   - Completa los componenter faltantes en el código base propoecionado a continuación para definir las rutas y manejar los parámetros dinámicos:

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitaDetalle';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/citas">Ver Citas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

4. **Implementación de la página de detalles de una cita**
   - La página `CitaDetalle.jsx` debe obtener el parámetro `id` de la URL y mostrar los detalles de la cita.
   - Usa `useParams` para acceder a los parámetros de la URL.

```jsx
import { useParams } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();
  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {id}</p>
    </div>
  );
}

export default CitaDetalle;
```

5. **Pruebas y ajustes**
   - Asegúrate de que las rutas funcionen correctamente.
   - Intenta navegar entre las páginas utilizando los enlaces.
   - Prueba rutas inexistentes y verifica que la página de error se renderiza.