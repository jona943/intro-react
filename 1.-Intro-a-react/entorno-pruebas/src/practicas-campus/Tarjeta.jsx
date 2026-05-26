function Tarjeta(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Tarjeta;