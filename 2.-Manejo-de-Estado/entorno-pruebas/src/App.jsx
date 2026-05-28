import Mensaje from './practicas-campus/mensaje';
import TarjetaUsuario from './practicas-campus/tarjetUsuario';
import Contador from './practicas-campus/contador';
import PerfilUsuario from './practicas-campus/manejoDeEstados';

function App() {
  return (

    <div>
      // Sección de mensajes
      <h1>Ejemplo de Props en React</h1>
      <Mensaje texto="¡Hola, mundo!" />
      <Mensaje texto="Bienvenido a React" />

      // Sección de usuarios
      <h2>Usuarios</h2>
      <TarjetaUsuario nombre="Ana Pérez" edad={28} ocupacion="Ingeniera de Software" />
      <TarjetaUsuario nombre="Carlos Gómez" edad={35} ocupacion="Diseñador UX" />

      // Sección de contador
      <h2>Contador</h2>
      <Contador /> // Componente que muestra un contador con estado local

      // Sección de perfil de usuario
      <h2>Perfil de Usuario</h2>
      <PerfilUsuario /> // Componente que muestra un perfil de usuario con estado local

    </div>
  );
}

export default App;