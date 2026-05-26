import React from 'react';

export function Saludo() {
  return <h1>¡Hola, mundo!</h1>;
}

export function Boton() {
  return <button>Haz clic aquí</button>;
}

 export function Usuario(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}
