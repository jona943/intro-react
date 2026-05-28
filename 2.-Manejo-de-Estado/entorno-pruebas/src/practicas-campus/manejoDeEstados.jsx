import { useState } from "react";

function PerfilUsuario() {

  const [usuario, setUsuario] = useState({ nombre: "Juan", edad: 25 });

  const actualizarEdad = () => {

    setUsuario({ ...usuario, edad: usuario.edad + 1 });

  };
  return (

    <div>

      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
      <button onClick={actualizarEdad}>Cumplir años</button>

    </div>

  );
}

export default PerfilUsuario;