import React, { useState, useEffect, useMemo, use } from "react";
import Planeta from "./components/Planeta"

function App() {

  // MONTAJE Y DESMONTAJE
  useEffect(() => {
    console.log("Panel renderizado");

    const intervalo = setInterval(() => {
      console.log("Vuelo iniciado");
    }, 1000);

    return () => {
      console.log("Panel desmontado");
      clearInterval(intervalo);
    }
  }, []);

  useEffect(() => {
    console.log("Control de combustible actualizado");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado ${estadoNave}`;
  }, [estadoNave]);

  return (
    <div>
      <h1>Explorador Espacial</h1>
      <p>{mensajeEstado}</p>
      <button onClick={() => setEstadoNave("En órbita")}>Cambiar estado</button>
      {PlanetaVisitados.map((planeta, index) => (
        <planeta key={index}>{planeta}</planeta>
      ))}
    </div>
  );

}