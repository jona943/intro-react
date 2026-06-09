import React, { useState, useEffect, useMemo } from "react";
import Planeta from "./components/Planeta"


function App() {

  const [ distancia, setDistancia ] = useState(0);
  const [ combustible, setCombustible ] = useState(100);
  const [ estadoNave, setEstadoNave ] = useState('En orbita');
  const [ PlanetaVisitados, setPlanetaVisitados ] = useState(["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"]);

  // MONTAJE Y DESMONTAJE
  useEffect(() => {
    console.log("Panel renderizado");

    const intervalo = setInterval(() => {
      setDistancia( prev => prev + 1); // Incrementa la distancia
      setCombustible( prev => prev - 1); // Decrementa el combustible
      console.log("Vuelo iniciado");
    }, 1000);

    return () => {
      // Aquí se ejecuta el código de desmontaje
      console.log("Panel desmontado (apagado)");
      clearInterval(intervalo);
    }
  }, []);


  useEffect(() => {
    console.log("Control de combustible actualizado");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    const nuevoPlaneta = `Planeta nuevo${PlanetaVisitados.length + 1}`;
    setPlanetaVisitados(prev => [...prev, nuevoPlaneta]);
  }


  return (
    <div>
      <h1>Explorador Espacial</h1>
      <p>{mensajeEstado}</p>
      <button onClick={() => setEstadoNave("En órbita")}>Cambiar estado</button>
      {PlanetaVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}

      <p>Distancia recorrida: {distancia} anios luz</p>
      <p>Combustible restante: {combustible}%</p>

      <button onClick={aterrizar} style={{ backgroundColor: '#928f', color: 'white', padding: '10px', margin: '10px' }}>Aterrizar</button>
    </div>
  );
}

export default App;