import { useState } from "react";

function Contador() {

  const [contador, setContador] = useState(0);

  return (

    <div>
      <p>El contador está en: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>

  );

}

export default Contador;